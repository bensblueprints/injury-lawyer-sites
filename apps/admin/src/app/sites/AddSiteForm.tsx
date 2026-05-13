"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Attorney = { id: string; name: string; firmName: string };

export function AddSiteForm({ attorneys }: { attorneys: Attorney[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    domain: "",
    practiceArea: "Personal Injury",
    city: "",
    state: "",
    formFillPrice: "",
    aiCallPrice: "",
    hotTransferPrice: "",
    attorneyId: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/sites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          formFillPrice: parseFloat(form.formFillPrice) || 0,
          aiCallPrice: parseFloat(form.aiCallPrice) || 0,
          hotTransferPrice: parseFloat(form.hotTransferPrice) || 0,
          attorneyId: form.attorneyId || null,
        }),
      });
      if (!res.ok) { setError("Failed to save site"); return; }
      setOpen(false);
      setForm({ domain: "", practiceArea: "Personal Injury", city: "", state: "", formFillPrice: "", aiCallPrice: "", hotTransferPrice: "", attorneyId: "" });
      router.refresh();
    } catch {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  }

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
        + Add Site
      </button>
    );
  }

  const priceField = (label: string, name: string, placeholder: string, hint: string) => (
    <div>
      <label className="block text-slate-300 text-sm font-medium mb-1">{label}</label>
      <input
        name={name}
        type="number"
        value={form[name as keyof typeof form]}
        onChange={handleChange}
        min="0"
        step="1"
        placeholder={placeholder}
        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
      />
      <p className="text-slate-500 text-xs mt-1">{hint}</p>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 overflow-y-auto py-8">
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 w-full max-w-md">
        <h2 className="text-white font-bold text-lg mb-5">Add / Update Site</h2>
        {error && (
          <div className="bg-red-900/40 border border-red-700 text-red-300 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1.5">Domain *</label>
            <input name="domain" value={form.domain} onChange={handleChange} required placeholder="lasvegasinjurylawyer.com"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1.5">Practice Area</label>
            <input name="practiceArea" value={form.practiceArea} onChange={handleChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-red-500 text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">City</label>
              <input name="city" value={form.city} onChange={handleChange} placeholder="Las Vegas"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">State</label>
              <input name="state" value={form.state} onChange={handleChange} placeholder="NV"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm" />
            </div>
          </div>

          <div className="bg-slate-700/40 rounded-lg p-4 space-y-3 border border-slate-600">
            <p className="text-slate-300 text-sm font-semibold">Pricing per Lead Type</p>
            {priceField("Form Fill ($)", "formFillPrice", "200", "Web form submission")}
            {priceField("AI Call ($)", "aiCallPrice", "500", "AI receptionist call with transcript")}
            {priceField("Hot Transfer ($)", "hotTransferPrice", "2000", "Live transfer to attorney")}
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1.5">Assign Attorney</label>
            <select name="attorneyId" value={form.attorneyId} onChange={handleChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-300 focus:outline-none focus:border-red-500 text-sm">
              <option value="">Unassigned</option>
              {attorneys.map((a) => (
                <option key={a.id} value={a.id}>{a.name} — {a.firmName}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={saving}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm">
              {saving ? "Saving…" : "Save Site"}
            </button>
            <button type="button" onClick={() => setOpen(false)}
              className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium px-6 py-2.5 rounded-lg transition-colors text-sm">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
