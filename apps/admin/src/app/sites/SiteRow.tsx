"use client";
import { useState } from "react";

type Attorney = {
  id: string;
  name: string;
  firmName: string;
};

type Site = {
  id: string;
  domain: string;
  practiceArea: string;
  city: string;
  state: string;
  costPerLead: number;
  attorneyId: string | null;
  attorney: Attorney | null;
  _count: { leads: number };
  createdAt: string;
};

export function SiteRow({
  site,
  attorneys,
}: {
  site: Site;
  attorneys: Attorney[];
}) {
  const [editing, setEditing] = useState(false);
  const [costPerLead, setCostPerLead] = useState(site.costPerLead.toString());
  const [attorneyId, setAttorneyId] = useState(site.attorneyId ?? "");
  const [saving, setSaving] = useState(false);
  const [currentSite, setCurrentSite] = useState(site);

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
          costPerLead: parseFloat(costPerLead) || 0,
          attorneyId: attorneyId || null,
        }),
      });
      if (res.ok) {
        const updated = await res.json();
        setCurrentSite((prev) => ({
          ...prev,
          costPerLead: updated.costPerLead,
          attorneyId: updated.attorneyId,
          attorney:
            attorneys.find((a) => a.id === updated.attorneyId) ?? null,
        }));
        setEditing(false);
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <tr className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
      <td className="px-4 py-3 text-white text-sm font-medium">
        {currentSite.domain}
      </td>
      <td className="px-4 py-3 text-slate-300 text-sm">
        {currentSite.practiceArea}
      </td>
      <td className="px-4 py-3 text-slate-400 text-sm">
        {currentSite.city}, {currentSite.state}
      </td>
      <td className="px-4 py-3 text-center text-white text-sm">
        {currentSite._count.leads}
      </td>
      <td className="px-4 py-3">
        {editing ? (
          <input
            type="number"
            value={costPerLead}
            onChange={(e) => setCostPerLead(e.target.value)}
            className="w-20 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-red-500"
            min="0"
            step="1"
          />
        ) : (
          <span className="text-green-400 text-sm font-medium">
            ${currentSite.costPerLead.toFixed(0)}
          </span>
        )}
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
            {currentSite.attorney?.name ?? (
              <span className="text-slate-600">Unassigned</span>
            )}
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
          <button
            onClick={() => setEditing(true)}
            className="text-slate-400 hover:text-white text-xs underline"
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  );
}
