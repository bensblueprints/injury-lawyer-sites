import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const API_KEY = process.env.OPENAI_API_KEY;

const CITIES = [
  { city: "las-vegas", label: "Las Vegas, Nevada", state: "Nevada", adj: "Nevada" },
  { city: "dallas", label: "Dallas, Texas", state: "Texas", adj: "Texas" },
  { city: "austin", label: "Austin, Texas", state: "Texas", adj: "Texas" },
  { city: "omaha", label: "Omaha, Nebraska", state: "Nebraska", adj: "Nebraska" },
  { city: "denver", label: "Denver, Colorado", state: "Colorado", adj: "Colorado" },
];

// Body images — shown in article content of each practice area page
const BODY_IMAGES = [
  {
    name: "car-accident-body.webp",
    prompt: (c) => `Professional personal injury attorney in ${c.label} reviewing car accident case files and police reports at their office desk. Close-up of attorney in business attire studying documents with photographs of vehicle damage. Warm office lighting, focused expression, legal notepad. Photorealistic, no text.`,
  },
  {
    name: "truck-accident-body.webp",
    prompt: (c) => `${c.adj} personal injury lawyer examining large commercial truck accident evidence and Federal Motor Carrier Safety Administration documents at a conference table. Professional office setting, serious expression, stacks of legal files. Photorealistic, no text.`,
  },
  {
    name: "motorcycle-accident-body.webp",
    prompt: (c) => `Personal injury attorney in ${c.label} meeting with a motorcycle accident victim client, both seated at a modern law office desk reviewing accident reports and insurance documents. Empathetic attorney expression, professional setting. Photorealistic, no text.`,
  },
  {
    name: "slip-fall-body.webp",
    prompt: (c) => `${c.adj} premises liability attorney reviewing surveillance footage and incident reports from a slip and fall accident on a laptop in a law office. Professional attorney in suit, serious focused expression. Photorealistic, no text.`,
  },
  {
    name: "medical-malpractice-body.webp",
    prompt: (c) => `Medical malpractice attorney in ${c.label} collaborating with a medical expert witness, both reviewing medical records and charts at a conference table. Professional office setting, both in business attire. Photorealistic, no text.`,
  },
  {
    name: "wrongful-death-body.webp",
    prompt: (c) => `Compassionate personal injury attorney in ${c.label} meeting with grieving family members in a private law office conference room. Attorney leaning forward attentively, listening with empathy. Soft professional lighting, tissue box on table, warm supportive atmosphere. Photorealistic, no text.`,
  },
  {
    name: "workers-comp-body.webp",
    prompt: (c) => `Workers compensation attorney in ${c.label} helping an injured construction worker client complete legal paperwork at an office desk. Worker in work clothes with visible arm injury, attorney in suit guiding them through documents. Professional empathetic setting. Photorealistic, no text.`,
  },
  {
    name: "dog-bite-body.webp",
    prompt: (c) => `Personal injury attorney in ${c.label} reviewing photographs and medical documentation of a dog bite injury case. Attorney at desk with case files and medical reports. Professional law office setting. Photorealistic, no text.`,
  },
  {
    name: "product-liability-body.webp",
    prompt: (c) => `Product liability attorney in ${c.label} examining a defective product as evidence alongside engineering reports and legal documents at a conference table. Professional business attire, analytical expression, law office setting. Photorealistic, no text.`,
  },
  {
    name: "brain-injury-body.webp",
    prompt: (c) => `Personal injury attorney in ${c.label} meeting with a neurologist expert witness reviewing brain scan MRI images and medical reports related to a traumatic brain injury lawsuit. Conference room setting, both professionals in business attire. Photorealistic, no text.`,
  },
  {
    name: "spinal-injury-body.webp",
    prompt: (c) => `Personal injury attorney in ${c.label} consulting with a spinal cord injury client in a wheelchair. Attorney seated at eye level, reviewing settlement documents together in a modern accessible law office. Compassionate professional interaction. Photorealistic, no text.`,
  },
  {
    name: "pedestrian-accident-body.webp",
    prompt: (c) => `${c.adj} personal injury attorney reviewing pedestrian accident reconstruction diagrams and police reports at their desk. Photographs of accident scene visible on desk, attorney making notes. Professional office lighting. Photorealistic, no text.`,
  },
  {
    name: "neighborhood-body.webp",
    prompt: (c) => `Vibrant street scene in ${c.label} showing a safe, active neighborhood with pedestrians, local businesses, and well-maintained infrastructure. Daytime, clear sky, community atmosphere. Professional photography style, photorealistic. No text, no logos.`,
  },
  {
    name: "settlement.webp",
    prompt: (c) => `Personal injury attorney and client in ${c.label} shaking hands across a desk after reaching a successful legal settlement. Both smiling, signed settlement documents visible on the desk. Professional law office interior, warm celebratory atmosphere. Photorealistic, no text.`,
  },
  {
    name: "free-consultation.webp",
    prompt: (c) => `Welcoming personal injury attorney in ${c.label} greeting a new client in a bright modern law office reception area. Attorney smiling warmly, extending hand for handshake. Friendly professional atmosphere, clean modern interior. Photorealistic, no text.`,
  },
  {
    name: "courtroom.webp",
    prompt: (c) => `Personal injury attorney standing confidently at the podium in a ${c.state} courtroom, addressing the judge. Professional business attire, courtroom with American flag, judge's bench, jury box visible in background. Dramatic professional lighting. Photorealistic, no text.`,
  },
  {
    name: "legal-process.webp",
    prompt: (c) => `Personal injury attorney in ${c.label} reviewing legal documents and case files spread across a large mahogany desk. Stacks of law books, court filings, and a laptop visible. Focused professional attorney in business attire. Photorealistic, no text.`,
  },
  {
    name: "insurance-claim.webp",
    prompt: (c) => `Personal injury attorney in ${c.label} reviewing an insurance claim denial letter with a frustrated client, explaining their legal options. Law office setting, documents spread on desk. Empathetic attorney posture. Photorealistic, no text.`,
  },
];

// LV-specific fixes (missing from original generation)
const LV_MISSING = [
  {
    name: "car-accident.webp",
    prompt: `Dramatic scene of a serious car accident on a Las Vegas Nevada highway at night. Damaged vehicles, emergency lights, police and paramedics at the scene. Cinematic professional photography, no people injured visible, just the aftermath. No text.`,
  },
  {
    name: "wrongful-death.webp",
    prompt: `Somber memorial flowers placed at a roadside accident scene in Las Vegas Nevada. Candles, flowers, and a small memorial on the side of a desert highway at dusk. Emotional but respectful photography. No text, no people.`,
  },
];

import sharp from "sharp";

async function generateImage(prompt, outputPath) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1536x1024",
      quality: "high",
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API ${response.status}: ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) throw new Error("No b64_json in response");

  const rawBuf = Buffer.from(b64, "base64");

  // Compress to web-ready size
  const compressed = await sharp(rawBuf)
    .resize(1536, 1024, { fit: "cover", position: "center" })
    .webp({ quality: 80, effort: 4 })
    .toBuffer();

  fs.writeFileSync(outputPath, compressed);
  return compressed.length;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const results = { success: [], failed: [] };
  const resultsPath = path.join(ROOT, "image-generation-results-body.json");

  // Load existing results if any (for resuming)
  let existing = { success: [], failed: [] };
  if (fs.existsSync(resultsPath)) {
    existing = JSON.parse(fs.readFileSync(resultsPath, "utf8"));
  }
  const done = new Set(existing.success);

  // Fix LV missing practice area images
  console.log("\n=== LV Missing Images ===");
  for (const img of LV_MISSING) {
    const key = `las-vegas/${img.name}`;
    if (done.has(key)) { console.log(`  ✓ skip ${img.name} (done)`); continue; }
    const outPath = path.join(ROOT, "apps/las-vegas/public/images", img.name);
    try {
      const bytes = await generateImage(img.prompt, outPath);
      console.log(`  ✓ ${img.name} (${Math.round(bytes/1024)}KB)`);
      results.success.push(key);
      await sleep(1500);
    } catch (err) {
      console.error(`  ✗ ${img.name}: ${err.message}`);
      results.failed.push({ file: key, error: err.message });
    }
  }

  // Body images for all 5 cities
  for (const cityObj of CITIES) {
    console.log(`\n=== ${cityObj.label} ===`);
    const imagesDir = path.join(ROOT, "apps", cityObj.city, "public", "images");

    for (const img of BODY_IMAGES) {
      const key = `${cityObj.city}/${img.name}`;
      if (done.has(key)) { console.log(`  ✓ skip ${img.name} (done)`); continue; }
      const outPath = path.join(imagesDir, img.name);
      try {
        const prompt = img.prompt(cityObj);
        const bytes = await generateImage(prompt, outPath);
        console.log(`  ✓ ${img.name} (${Math.round(bytes/1024)}KB)`);
        results.success.push(key);
        // Save progress after each image
        fs.writeFileSync(resultsPath, JSON.stringify({
          success: [...done, ...results.success],
          failed: [...existing.failed, ...results.failed]
        }, null, 2));
        await sleep(1500);
      } catch (err) {
        console.error(`  ✗ ${img.name}: ${err.message}`);
        results.failed.push({ file: key, error: err.message });
        fs.writeFileSync(resultsPath, JSON.stringify({
          success: [...done, ...results.success],
          failed: [...existing.failed, ...results.failed]
        }, null, 2));
      }
    }
  }

  const total = results.success.length;
  const failed = results.failed.length;
  console.log(`\n✓ Done: ${total} generated, ${failed} failed`);
  if (results.failed.length > 0) {
    console.log("Failed:", results.failed.map(f => f.file).join(", "));
  }
}

main().catch(console.error);
