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
  const [prices, setPrices] = useState({
    formFill: site.formFillPrice.toString(),
    aiCall: site.aiCallPrice.toString(),
    hotTransfer: site.hotTransferPrice.toString(),
  });
  const [attorneyId, setAttorneyId] = useState(site.attorneyId ?? "");
  const [saving, setSaving] = useState(false);
  const [current, setCurrent] = useState(site);

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/sites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: site.domain,
          practiceArea: site.practiceArea,
          city: site.city,
          state: site.state,
          formFillPrice: parseFloat(prices.formFill) || 0,
          aiCallPrice: parseFloat(prices.aiCall) || 0,
          hotTransferPrice: parseFloat(prices.hotTransfer) || 0,
          attorneyId: attorneyId || null,
        }),
      });
      if (res.ok) {
        const updated = await res.json();
        setCurrent((prev) => ({
          ...prev,
          formFillPrice: updated.formFillPrice,
          aiCallPrice: updated.aiCallPrice,
          hotTransferPrice: updated.hotTransferPrice,
          attorneyId: updated.attorneyId,
          attorney: attorneys.find((a) => a.id === updated.attorneyId) ?? null,
        }));
        setEditing(false);
      }
    } finally {
      setSaving(false);
    }
  }

  const priceInput = (label: string, key: keyof typeof prices, color: string) => (
    <div className="flex items-center gap-1.5">
      <span className={`text-xs font-medium ${color} w-20 shrink-0`}>{label}</span>
      {editing ? (
        <input
          type="number"
          value={prices[key]}
          onChange={(e) => setPrices((p) => ({ ...p, [key]: e.target.value }))}
          className="w-20 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-red-500"
          min="0"
          step="1"
        />
      ) : (
        <span className="text-white text-sm font-medium">
          ${Number(current[key === "formFill" ? "formFillPrice" : key === "aiCall" ? "aiCallPrice" : "hotTransferPrice"]).toFixed(0)}
        </span>
      )}
    </div>
  );

  return (
    <tr className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
      <td className="px-4 py-3">
        <div className="text-white text-sm font-medium">{current.domain}</div>
      </td>
      <td className="px-4 py-3 text-slate-300 text-sm">{current.practiceArea}</td>
      <td className="px-4 py-3 text-slate-400 text-sm">
        {current.city}, {current.state}
      </td>
      <td className="px-4 py-3 text-center text-white text-sm">{current._count.leads}</td>
      <td className="px-4 py-3">
        <div className="space-y-1.5">
          {priceInput("Form Fill", "formFill", "text-slate-400")}
          {priceInput("AI Call", "aiCall", "text-purple-400")}
          {priceInput("Hot Transfer", "hotTransfer", "text-orange-400")}
        </div>
      </td>
      <td className="px-4 py-3">
        {editing ? (
          <select
            value={attorneyId}
            onChange={(e) => setAttorneyId(e.target.value)}
            className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-slate-300 text-sm focus:outline-none focus:border-red-500 w-40"
          >
            <option value="">Unassigned</option>
            {attorneys.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        ) : (
          <span className="text-slate-300 text-sm">
            {current.attorney?.name ?? <span className="text-slate-600">Unassigned</span>}
          </span>
        )}
      </td>
      <td className="px-4 py-3 text-right">
        {editing ? (
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-green-700 hover:bg-green-600 disabled:opacity-50 text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
            >
              {saving ? "…" : "Save"}
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-medium px-3 py-1.5 rounded transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button onClick={() => setEditing(true)} className="text-slate-400 hover:text-white text-xs underline">
            Edit
          </button>
        )}
      </td>
    </tr>
  );
}
