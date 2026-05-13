"use client";
import { useState } from "react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  caseType: string;
  domain: string;
  status: "NEW" | "CONTACTED" | "SOLD" | "ARCHIVED";
  createdAt: string;
  message: string | null;
  site: {
    domain: string;
    practiceArea: string;
    attorney: { name: string } | null;
  } | null;
};

const STATUS_OPTIONS = ["NEW", "CONTACTED", "SOLD", "ARCHIVED"] as const;

function statusBadgeClass(status: string) {
  switch (status) {
    case "NEW":
      return "bg-blue-900 text-blue-300";
    case "CONTACTED":
      return "bg-yellow-900 text-yellow-300";
    case "SOLD":
      return "bg-green-900 text-green-300";
    case "ARCHIVED":
      return "bg-slate-700 text-slate-400";
    default:
      return "bg-slate-700 text-slate-400";
  }
}

function StatusSelect({
  leadId,
  initialStatus,
}: {
  leadId: string;
  initialStatus: string;
}) {
  const [status, setStatus] = useState(initialStatus);
  const [saving, setSaving] = useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    setSaving(true);
    try {
      await fetch(`/api/leads/${leadId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setStatus(newStatus);
    } catch {
      // revert on error
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusBadgeClass(
          status
        )}`}
      >
        {status}
      </span>
      <select
        value={status}
        onChange={handleChange}
        disabled={saving}
        className="bg-slate-700 border border-slate-600 text-slate-300 text-xs rounded px-1.5 py-1 focus:outline-none focus:border-red-500 disabled:opacity-50"
      >
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}

export function LeadsTable({
  leads,
  filter,
}: {
  leads: Lead[];
  filter?: string;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = filter
    ? leads.filter((l) => l.status === filter)
    : leads;

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
              Name
            </th>
            <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
              Contact
            </th>
            <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
              Case Type
            </th>
            <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
              Site
            </th>
            <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
              Attorney
            </th>
            <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
              Status
            </th>
            <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
              Date
            </th>
            <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
              Msg
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 && (
            <tr>
              <td
                colSpan={8}
                className="text-slate-500 text-sm text-center py-10"
              >
                No leads found
              </td>
            </tr>
          )}
          {filtered.map((lead) => (
            <>
              <tr
                key={lead.id}
                className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
              >
                <td className="px-4 py-3 text-white text-sm font-medium">
                  {lead.name}
                </td>
                <td className="px-4 py-3">
                  <div className="text-slate-300 text-sm">{lead.phone}</div>
                  <div className="text-slate-500 text-xs">{lead.email}</div>
                </td>
                <td className="px-4 py-3 text-slate-300 text-sm">
                  {lead.caseType}
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs">
                  {lead.domain}
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs">
                  {lead.site?.attorney?.name ?? (
                    <span className="text-slate-600">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <StatusSelect
                    leadId={lead.id}
                    initialStatus={lead.status}
                  />
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  {lead.message ? (
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === lead.id ? null : lead.id
                        )
                      }
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      {expandedId === lead.id ? "hide" : "view"}
                    </button>
                  ) : (
                    <span className="text-slate-600 text-xs">—</span>
                  )}
                </td>
              </tr>
              {expandedId === lead.id && lead.message && (
                <tr
                  key={`${lead.id}-msg`}
                  className="border-b border-slate-700/50 bg-slate-700/30"
                >
                  <td colSpan={8} className="px-4 py-3">
                    <p className="text-slate-300 text-sm italic">
                      {lead.message}
                    </p>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
