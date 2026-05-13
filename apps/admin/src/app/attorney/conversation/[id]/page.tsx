import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Message = {
  role: "user" | "agent" | string;
  message: string;
  time_in_call_secs?: number;
};

type Transcript = {
  conversation_id: string;
  status: string;
  transcript?: Message[];
  metadata?: {
    start_time_unix_secs?: number;
    call_duration_secs?: number;
  };
};

export default async function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/attorney/login");
  }

  let transcript: Transcript | null = null;
  let fetchError: string | null = null;

  try {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversations/${params.id}`,
      {
        headers: { "xi-api-key": process.env.ELEVENLABS_API_KEY! },
        cache: "no-store",
      }
    );
    if (res.ok) {
      transcript = await res.json();
    } else {
      fetchError = `API returned ${res.status}`;
    }
  } catch (e) {
    fetchError = "Failed to fetch transcript";
  }

  const backHref =
    session.user.role === "admin"
      ? "/leads"
      : "/attorney/dashboard";

  const messages = transcript?.transcript ?? [];

  function formatTime(secs?: number) {
    if (secs == null) return "";
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link
            href={backHref}
            className="text-slate-400 hover:text-white text-sm"
          >
            ← Back
          </Link>
          <div>
            <h1 className="text-white font-bold">Call Transcript</h1>
            <p className="text-slate-400 text-xs font-mono">{params.id}</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        {fetchError && (
          <div className="bg-red-900/40 border border-red-700 text-red-300 text-sm px-4 py-3 rounded-lg mb-6">
            Could not load transcript: {fetchError}
          </div>
        )}

        {transcript && (
          <div className="mb-6 bg-slate-800 rounded-xl border border-slate-700 p-4 flex gap-6 text-sm">
            {transcript.metadata?.start_time_unix_secs && (
              <div>
                <span className="text-slate-400 text-xs uppercase tracking-wide">
                  Date
                </span>
                <p className="text-white mt-0.5">
                  {new Date(
                    transcript.metadata.start_time_unix_secs * 1000
                  ).toLocaleString()}
                </p>
              </div>
            )}
            {transcript.metadata?.call_duration_secs != null && (
              <div>
                <span className="text-slate-400 text-xs uppercase tracking-wide">
                  Duration
                </span>
                <p className="text-white mt-0.5">
                  {formatTime(transcript.metadata.call_duration_secs)}
                </p>
              </div>
            )}
            <div>
              <span className="text-slate-400 text-xs uppercase tracking-wide">
                Status
              </span>
              <p className="text-white mt-0.5 capitalize">
                {transcript.status}
              </p>
            </div>
          </div>
        )}

        {messages.length === 0 && !fetchError && (
          <p className="text-slate-500 text-sm text-center py-12">
            No transcript messages available.
          </p>
        )}

        {/* Chat bubbles */}
        <div className="space-y-4">
          {messages.map((msg, idx) => {
            const isAgent = msg.role === "agent";
            return (
              <div
                key={idx}
                className={`flex ${isAgent ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    isAgent
                      ? "bg-red-600 text-white rounded-br-sm"
                      : "bg-slate-700 text-slate-100 rounded-bl-sm"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-semibold ${
                        isAgent ? "text-red-200" : "text-slate-400"
                      }`}
                    >
                      {isAgent ? "Agent" : "Caller"}
                    </span>
                    {msg.time_in_call_secs != null && (
                      <span
                        className={`text-xs ${
                          isAgent ? "text-red-300" : "text-slate-500"
                        }`}
                      >
                        {formatTime(msg.time_in_call_secs)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed">{msg.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
