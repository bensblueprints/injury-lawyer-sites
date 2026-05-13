"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PRACTICE_AREAS = [
  "Personal Injury",
  "Car Accidents",
  "Truck Accidents",
  "Motorcycle Accidents",
  "Medical Malpractice",
  "Slip & Fall",
  "Workers Comp",
];

const LEAD_TYPE_OPTIONS = [
  { value: "FORM_FILL", label: "Form Fill Lead", price: "$210/lead", description: "Web form submission with contact info and case details" },
  { value: "AI_CALL", label: "AI Call Lead", price: "$525/lead", description: "AI receptionist call with transcript and qualified info" },
  { value: "HOT_TRANSFER", label: "Qualified Hot Transfer", price: "$2,100/lead", description: "Live transfer of verified, qualified prospective client" },
];

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [firmName, setFirmName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [practiceAreas, setPracticeAreas] = useState<string[]>([]);
  const [acceptedLeadTypes, setAcceptedLeadTypes] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function togglePracticeArea(area: string) {
    setPracticeAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  }

  function toggleLeadType(type: string) {
    setAcceptedLeadTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/attorney/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, firmName, email, phone, password, confirmPassword, acceptedLeadTypes }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Registration failed");
        return;
      }
      router.push("/attorney/login?registered=1");
    } catch {
      setError("Network error — please try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-red-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-black text-xl">L</span>
          </div>
          <h1 className="text-white text-2xl font-bold">Create Attorney Account</h1>
          <p className="text-slate-400 text-sm mt-1">
            Join GetLegalLeads and start receiving qualified leads
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800 rounded-2xl p-6 space-y-5">
          {error && (
            <div className="bg-red-900/40 border border-red-700 text-red-300 text-sm px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Name & Firm */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Firm Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                placeholder="Smith Law Firm"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                placeholder="you@firm.com"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>

          {/* Password */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                placeholder="Min. 8 characters"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Confirm Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                placeholder="Repeat password"
              />
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Practice Areas You Handle
            </label>
            <div className="grid grid-cols-2 gap-2">
              {PRACTICE_AREAS.map((area) => (
                <label
                  key={area}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={practiceAreas.includes(area)}
                    onChange={() => togglePracticeArea(area)}
                    className="w-4 h-4 rounded border-slate-500 bg-slate-700 text-red-600 focus:ring-red-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    {area}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Lead Types */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Types of Leads You Want to Receive
            </label>
            <div className="space-y-2">
              {LEAD_TYPE_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-start gap-3 cursor-pointer bg-slate-700/50 rounded-lg px-4 py-3 border border-slate-600 hover:border-slate-500 transition-colors group"
                >
                  <input
                    type="checkbox"
                    checked={acceptedLeadTypes.includes(opt.value)}
                    onChange={() => toggleLeadType(opt.value)}
                    className="w-4 h-4 mt-0.5 rounded border-slate-500 bg-slate-700 text-red-600 focus:ring-red-500 focus:ring-offset-0 cursor-pointer flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-white text-sm font-medium">{opt.label}</span>
                      <span className="text-green-400 text-sm font-bold whitespace-nowrap">{opt.price}</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5">{opt.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-colors text-sm"
          >
            {loading ? "Creating account…" : "Create Attorney Account"}
          </button>

          <p className="text-center text-slate-500 text-xs">
            Already have an account?{" "}
            <Link href="/attorney/login" className="text-slate-300 hover:text-white underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
