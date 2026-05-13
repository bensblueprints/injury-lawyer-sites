#!/usr/bin/env node
/**
 * Sets up ElevenLabs for the attorney transfer flow:
 * 1. Creates a "notify attorney" agent that calls attorneys about new leads
 * 2. Adds the "request_attorney" server tool to all 4 site agents
 *
 * Run once, then set the printed ELEVENLABS_NOTIFY_AGENT_ID env var in Coolify admin app.
 *
 * Prerequisites in ElevenLabs dashboard:
 *   - Go to Conversational AI → Phone Numbers → Add Phone Number
 *   - Note the phone_number_id and set ELEVENLABS_PHONE_NUMBER_ID in Coolify admin
 */

const https = require("https");

const API_KEY = "sk_8eda1022626d44a1d45d3da542d5be7794a174d3d13e6e49";
const ADMIN_URL = "http://c85jf48um6q1x33ycewp0z0i.212.28.184.24.sslip.io";

const SITE_AGENTS = [
  { domain: "lasvegasnevadainjurylawyer.com", agentId: "agent_3201krfrtyd8frrak4dcekbsxk0b", city: "Las Vegas" },
  { domain: "dallastexasinjurylawyer.com",    agentId: "agent_2601krfrvrqxe1rt4mhpex3n5whp", city: "Dallas" },
  { domain: "austintexasinjurylawyer.com",    agentId: "agent_3101krfrvwwxfgm9anxt1xbwhg4v", city: "Austin" },
  { domain: "omahanebraskainjurylawyer.com",  agentId: "agent_7201krfrw0eqfqsrsq63cxnwcedf", city: "Omaha" },
];

function apiRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = https.request(
      {
        hostname: "api.elevenlabs.io",
        path,
        method,
        headers: {
          "xi-api-key": API_KEY,
          "Content-Type": "application/json",
          ...(payload ? { "Content-Length": Buffer.byteLength(payload) } : {}),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(data) });
          } catch {
            resolve({ status: res.statusCode, body: data });
          }
        });
      }
    );
    req.on("error", reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error("timeout")); });
    if (payload) req.write(payload);
    req.end();
  });
}

async function createNotifyAgent() {
  console.log("\n=== Creating attorney notification agent ===");
  const res = await apiRequest("POST", "/v1/convai/agents/create", {
    name: "Attorney Lead Notification",
    conversation_config: {
      agent: {
        prompt: {
          prompt: `You are an automated intake notification system for a personal injury law firm.
When the call connects, immediately say the following notification and then end the call:

"Hello, this is the automated intake system for {{firm_name}}. You have a new {{case_type}} inquiry from a potential client.
Client name: {{client_name}}.
Callback number: {{client_phone}}.
The client is expecting your call. Please call them back as soon as possible. Goodbye."

Do not engage in any conversation. Say the notification once and end the call.`,
          llm: "claude-3-5-sonnet",
          temperature: 0,
        },
        first_message: "",
        language: "en",
      },
      tts: {
        voice_id: "21m00Tcm4TlvDq8ikWAM", // Rachel — calm, professional
      },
    },
    platform_settings: {
      overrides: {
        conversation_config_override: {
          agent: {
            prompt: {
              prompt: true,
            },
          },
        },
      },
    },
  });

  if (res.status === 200 || res.status === 201) {
    const agentId = res.body.agent_id;
    console.log(`  ✅ Created notify agent: ${agentId}`);
    console.log(`\n  ⚠️  Set this in Coolify admin env vars:`);
    console.log(`     ELEVENLABS_NOTIFY_AGENT_ID=${agentId}`);
    return agentId;
  } else {
    console.error(`  ❌ Failed: ${JSON.stringify(res.body)}`);
    return null;
  }
}

async function addServerToolToAgent(site) {
  console.log(`\n=== Adding server tool to ${site.city} agent ===`);

  // First, get current agent config
  const getRes = await apiRequest("GET", `/v1/convai/agents/${site.agentId}`, null);
  if (getRes.status !== 200) {
    console.error(`  ❌ Could not fetch agent: ${JSON.stringify(getRes.body)}`);
    return;
  }

  const agent = getRes.body;
  const existingTools = agent.conversation_config?.agent?.prompt?.tools ?? [];

  // Remove any existing request_attorney tool to avoid duplicates
  const filteredTools = existingTools.filter((t) => t.name !== "request_attorney");

  const transferTool = {
    type: "webhook",
    name: "request_attorney",
    description:
      "Call this tool when you have collected the client's name, phone number, email address, and case type, AND the client has asked to speak with an attorney or wants to be connected. This logs the lead and notifies an attorney to call them back.",
    api_schema: {
      url: `${ADMIN_URL}/api/elevenlabs/transfer`,
      method: "POST",
      request_body_schema: {
        description: "Lead data to log and trigger attorney notification",
        type: "object",
        properties: {
          name: { type: "string", description: "Client's full name" },
          phone: { type: "string", description: "Client's phone number" },
          email: { type: "string", description: "Client's email address" },
          caseType: { type: "string", description: "Type of legal case (e.g. car accident, slip and fall)" },
          message: { type: "string", description: "Brief description of what happened" },
          domain: { type: "string", description: `Always send: "${site.domain}"` },
        },
        required: ["name", "phone", "email", "caseType", "domain"],
      },
    },
  };

  const updatedTools = [...filteredTools, transferTool];

  // Patch the agent
  const patchRes = await apiRequest("PATCH", `/v1/convai/agents/${site.agentId}`, {
    conversation_config: {
      agent: {
        prompt: {
          tools: updatedTools,
        },
      },
    },
  });

  if (patchRes.status === 200) {
    console.log(`  ✅ ${site.city} agent updated with request_attorney tool`);
  } else {
    console.error(`  ❌ Failed: ${JSON.stringify(patchRes.body)}`);
  }
}

async function main() {
  console.log("ElevenLabs Attorney Transfer Setup");
  console.log("===================================");

  await createNotifyAgent();

  for (const site of SITE_AGENTS) {
    await addServerToolToAgent(site);
  }

  console.log("\n=== Setup complete ===");
  console.log("\nNext steps:");
  console.log("1. In ElevenLabs dashboard → Conversational AI → Phone Numbers");
  console.log("   Add a phone number (via Twilio) and copy the phone_number_id");
  console.log("2. In Coolify admin app env vars, add:");
  console.log("   ELEVENLABS_API_KEY=sk_8eda1022626d44a1d45d3da542d5be7794a174d3d13e6e49");
  console.log("   ELEVENLABS_PHONE_NUMBER_ID=<from step 1>");
  console.log("   ELEVENLABS_NOTIFY_AGENT_ID=<printed above>");
  console.log("3. Redeploy the admin app on Coolify");
}

main().catch(console.error);
