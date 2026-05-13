"use client";
import { useState } from "react";

type Attorney = { id: string; name: string; firmName: string };

type Site = {
  id: string;
  domain: string;
  practiceArea: string;
  city: string;
  state: string;
  formFillPrice: number;
  aiCallPrice: number;
  hotTransferPrice: number;
  attorneyId: string | null;
  attorney: Attorney | null;
  _count: { leads: number };
  createdAt: string;
};

export function SiteRow({ site, attorneys }: { site: Site; attorneys: Attorney[] }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    domain: site.domain,
    practiceArea: site.practiceArea,
    city: site.city,
    state: site.state,
    formFillPrice: site.formFillPrice.toString(),
    aiCallPrice: site.aiCallPrice.toString(),
    hotTransferPrice: site.hotTransferPrice.toString(),
    attorneyId: site.attorneyId ?? "",
  });
  const [saving, setSaving] = useState(false);
  const [current, setCurrent] = useState(site);
  const [error, setError] = useState("");

  function set(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/sites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: site.id,
          domain: form.domain.trim(),
          practiceArea: form.practiceArea.trim(),
          city: form.city.trim(),
          state: form.state.trim(),
          formFillPrice: parseFloat(form.formFillPrice) || 0,
          aiCallPrice: parseFloat(form.aiCallPrice) || 0,
          hotTransferPrice: parseFloat(form.hotTransferPrice) || 0,
          attorneyId: form.attorneyId || null,
        }),
      });
      if (res.ok) {
        const updated = await res.json();
        setCurrent({
          ...current,
          domain: updated.domain,
          practiceArea: updated.practiceArea,
          city: updated.city,
          state: updated.state,
          formFillPrice: updated.formFillPrice,
          aiCallPrice: updated.aiCallPrice,
          hotTransferPrice: updated.hotTransferPrice,
          attorneyId: updated.attorneyId,
          attorney: attorneys.find((a) => a.id === updated.attorneyId) ?? null,
        });
        setEditing(false);
      } else {
        const data = await res.json();
        setError(data.error ?? "Save failed");
      }
    } finally {
      setSaving(false);
    }
  }

  const inputCls = "w-full bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-red-500";
  const priceCls = "w-20 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-red-500";

  if (editing) {
    return (
      <>
        <tr className="border-b border-slate-600 bg-slate-700/40">
          <td className="px-4 py-3" colSpan={7}>
            <div className="space-y-3">
              {error && (
                <div className="text-red-400 text-xs bg-red-900/30 border border-red-700 rounded px-3 py-2">{error}</div>
              )}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1">Domain</label>
                  <input value={form.domain} onChange={(e) => set("domain", e.target.value)} className={inputCls} placeholder="example.com" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1">Practice Area</label>
                  <input value={form.practiceArea} onChange={(e) => set("practiceArea", e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1">City</label>
                  <input value={form.city} onChange={(e) => set("city", e.target.value)} className={inputCls} placeholder="Las Vegas" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1">State</label>
                  <input value={form.state} onChange={(e) => set("state", e.target.value)} className={inputCls} placeholder="NV" />
                </div>
              </div>
              <div className="flex gap-6 flex-wrap">
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1">Form Fill ($)</label>
                  <input type="number" value={form.formFillPrice} onChange={(e) => set("formFillPrice", e.target.value)} className={priceCls} min="0" step="1" />
                </div>
                <div>
                  <label className="text-purple-400 text-xs font-medium block mb-1">AI Call ($)</label>
                  <input type="number" value={form.aiCallPrice} onChange={(e) => set("aiCallPrice", e.target.value)} className={priceCls} min="0" step="1" />
                </div>
                <div>
                  <label className="text-orange-400 text-xs font-medium block mb-1">Hot Transfer ($)</label>
                  <input type="number" value={form.hotTransferPrice} onChange={(e) => set("hotTransferPrice", e.target.value)} className={priceCls} min="0" step="1" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1">Attorney</label>
                  <select value={form.attorneyId} onChange={(e) => set("attorneyId", e.target.value)}
                    className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-slate-300 text-sm focus:outline-none focus:border-red-500 w-44">
                    <option value="">Unassigned</option>
                    {attorneys.map((a) => (
                      <option key={a.id} value={a.id}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={handleSave} disabled={saving}
                  className="bg-green-700 hover:bg-green-600 disabled:opacity-50 text-white text-xs font-bold px-4 py-1.5 rounded transition-colors">
                  {saving ? "Saving…" : "Save Changes"}
                </button>
                <button onClick={() => { setEditing(false); setError(""); }}
                  className="bg-slate-600 hover:bg-slate-500 text-slate-300 text-xs font-medium px-4 py-1.5 rounded transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  }

  return (
    <tr className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
      <td className="px-4 py-3">
        <div className="text-white text-sm font-medium">{current.domain}</div>
      </td>
      <td className="px-4 py-3 text-slate-300 text-sm">{current.practiceArea}</td>
      <td className="px-4 py-3 text-slate-400 text-sm">{current.city}, {current.state}</td>
      <td className="px-4 py-3 text-center text-white text-sm">{current._count.leads}</td>
      <td className="px-4 py-3">
        <div className="space-y-1">
          <div className="text-xs"><span className="text-slate-500">FF</span> <span className="text-white font-medium">${current.formFillPrice.toFixed(0)}</span></div>
          <div className="text-xs"><span className="text-slate-500">AI</span> <span className="text-purple-300 font-medium">${current.aiCallPrice.toFixed(0)}</span></div>
          <div className="text-xs"><span className="text-slate-500">HT</span> <span className="text-orange-300 font-medium">${current.hotTransferPrice.toFixed(0)}</span></div>
        </div>
      </td>
      <td className="px-4 py-3 text-slate-300 text-sm">
        {current.attorney?.name ?? <span className="text-slate-600">Unassigned</span>}
      </td>
      <td className="px-4 py-3 text-right">
        <button onClick={() => setEditing(true)} className="text-slate-400 hover:text-white text-xs underline">
          Edit
        </button>
      </td>
    </tr>
  );
}
