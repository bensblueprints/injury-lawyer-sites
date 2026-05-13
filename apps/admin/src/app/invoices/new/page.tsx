"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminLayout } from "@/components/AdminLayout";

type Attorney = {
  id: string;
  name: string;
  firmName: string;
  sites: { domain: string; costPerLead: number }[];
};

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  caseType: string;
  domain: string;
  status: string;
  createdAt: string;
};

export default function NewInvoicePage() {
  const router = useRouter();
  const [attorneys, setAttorneys] = useState<Attorney[]>([]);
  const [selectedAttorneyId, setSelectedAttorneyId] = useState("");
  const [availableLeads, setAvailableLeads] = useState<Lead[]>([]);
  const [selectedLeadIds, setSelectedLeadIds] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingLeads, setFetchingLeads] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/attorneys")
      .then((r) => r.json())
      .then(setAttorneys)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!selectedAttorneyId) {
      setAvailableLeads([]);
      setSelectedLeadIds(new Set());
      return;
    }
    setFetchingLeads(true);
    // Fetch leads for this attorney's sites that are CONTACTED but not yet invoiced
    fetch("/api/leads")
      .then((r) => r.json())
      .then((leads: Lead[]) => {
        const attorney = attorneys.find((a) => a.id === selectedAttorneyId);
        const attorneyDomains = attorney?.sites.map((s) => s.domain) ?? [];
        const filtered = leads.filter(
          (l) =>
            attorneyDomains.includes(l.domain) &&
            (l.status === "CONTACTED" || l.status === "NEW")
        );
        setAvailableLeads(filtered);
        setSelectedLeadIds(new Set(filtered.map((l) => l.id)));
      })
      .finally(() => setFetchingLeads(false));
  }, [selectedAttorneyId, attorneys]);

  const selectedAttorney = attorneys.find((a) => a.id === selectedAttorneyId);

  function getCostForLead(lead: Lead): number {
    const site = selectedAttorney?.sites.find((s) => s.domain === lead.domain);
    return site?.costPerLead ?? 0;
  }

  const totalAmount = Array.from(selectedLeadIds).reduce((sum, id) => {
    const lead = availableLeads.find((l) => l.id === id);
    if (!lead) return sum;
    return sum + getCostForLead(lead);
  }, 0);

  function toggleLead(id: string) {
    setSelectedLeadIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (selectedLeadIds.size === availableLeads.length) {
      setSelectedLeadIds(new Set());
    } else {
      setSelectedLeadIds(new Set(availableLeads.map((l) => l.id)));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedAttorneyId) return;
    if (selectedLeadIds.size === 0) {
      setError("Select at least one lead");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attorneyId: selectedAttorneyId,
          leadIds: Array.from(selectedLeadIds),
          notes: notes || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Failed to create invoice");
        return;
      }
      const invoice = await res.json();
      router.push(`/invoices/${invoice.id}`);
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminLayout>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => router.back()}
            className="text-slate-400 hover:text-white text-sm"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-white">New Invoice</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-900/40 border border-red-700 text-red-300 text-sm px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Attorney select */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
            <label className="block text-white font-bold mb-3">
              Select Attorney
            </label>
            <select
              value={selectedAttorneyId}
              onChange={(e) => setSelectedAttorneyId(e.target.value)}
              required
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-300 focus:outline-none focus:border-red-500 text-sm"
            >
              <option value="">Choose attorney…</option>
              {attorneys.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name} — {a.firmName}
                </option>
              ))}
            </select>
          </div>

          {/* Leads selection */}
          {selectedAttorneyId && (
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
              <div className="flex items-center justify-between mb-3">
                <label className="text-white font-bold">
                  Select Leads to Invoice
                </label>
                {availableLeads.length > 0 && (
                  <button
                    type="button"
                    onClick={toggleAll}
                    className="text-slate-400 hover:text-white text-xs underline"
                  >
                    {selectedLeadIds.size === availableLeads.length
                      ? "Deselect All"
                      : "Select All"}
                  </button>
                )}
              </div>

              {fetchingLeads && (
                <p className="text-slate-500 text-sm">Loading leads…</p>
              )}

              {!fetchingLeads && availableLeads.length === 0 && (
                <p className="text-slate-500 text-sm">
                  No uninvoiced leads found for this attorney&apos;s sites. Leads
                  with status NEW or CONTACTED are eligible.
                </p>
              )}

              {!fetchingLeads && availableLeads.length > 0 && (
                <div className="space-y-2">
                  {availableLeads.map((lead) => {
                    const cost = getCostForLead(lead);
                    const checked = selectedLeadIds.has(lead.id);
                    return (
                      <label
                        key={lead.id}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          checked
                            ? "bg-slate-700 border border-slate-600"
                            : "bg-slate-700/30 border border-transparent hover:bg-slate-700/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleLead(lead.id)}
                          className="w-4 h-4 rounded accent-red-600"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-white text-sm font-medium">
                              {lead.name}
                            </span>
                            <span className="text-slate-500 text-xs">
                              {lead.domain}
                            </span>
                            <span
                              className={`text-xs px-1.5 py-0.5 rounded-full ${
                                lead.status === "NEW"
                                  ? "bg-blue-900 text-blue-300"
                                  : "bg-yellow-900 text-yellow-300"
                              }`}
                            >
                              {lead.status}
                            </span>
                          </div>
                          <div className="text-slate-400 text-xs mt-0.5">
                            {lead.phone} · {lead.caseType} ·{" "}
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <span className="text-green-400 text-sm font-bold ml-auto">
                          ${cost.toFixed(0)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Notes */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
            <label className="block text-white font-bold mb-3">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm resize-none"
              placeholder="Payment terms, reference number, etc."
            />
          </div>

          {/* Total + Submit */}
          {selectedAttorneyId && (
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide">
                  Invoice Total
                </p>
                <p className="text-white text-3xl font-black">
                  ${totalAmount.toFixed(2)}
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  {selectedLeadIds.size} lead
                  {selectedLeadIds.size !== 1 ? "s" : ""} selected
                </p>
              </div>
              <button
                type="submit"
                disabled={loading || selectedLeadIds.size === 0}
                className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                {loading ? "Creating…" : "Create Invoice"}
              </button>
            </div>
          )}
        </form>
      </div>
    </AdminLayout>
  );
}
