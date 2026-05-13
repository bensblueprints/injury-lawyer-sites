"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LEAD_TYPES = [
  { value: "FORM_FILL", label: "Form Fill", color: "text-slate-300", defaultPrice: 200 },
  { value: "AI_CALL", label: "AI Call", color: "text-purple-300", defaultPrice: 500 },
  { value: "HOT_TRANSFER", label: "Hot Transfer", color: "text-orange-300", defaultPrice: 2000 },
] as const;

export function AddCreditsForm({
  attorneyId,
  sitePricing,
}: {
  attorneyId: string;
  sitePricing: { formFillPrice: number; aiCallPrice: number; hotTransferPrice: number } | null;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [leadType, setLeadType] = useState<"FORM_FILL" | "AI_CALL" | "HOT_TRANSFER">("FORM_FILL");
  const [quantity, setQuantity] = useState("1");
  const [unitPrice, setUnitPrice] = useState(() => {
    return sitePricing?.formFillPrice.toString() ?? "200";
  });
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleLeadTypeChange(lt: typeof leadType) {
    setLeadType(lt);
    if (sitePricing) {
      const prices = { FORM_FILL: sitePricing.formFillPrice, AI_CALL: sitePricing.aiCallPrice, HOT_TRANSFER: sitePricing.hotTransferPrice };
      setUnitPrice(prices[lt].toString());
    } else {
      const defaults = { FORM_FILL: 200, AI_CALL: 500, HOT_TRANSFER: 2000 };
      setUnitPrice(defaults[lt].toString());
    }
  }

  const total = (parseFloat(unitPrice) || 0) * (parseInt(quantity) || 0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/credits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attorneyId, leadType, quantity: parseInt(quantity), unitPrice: parseFloat(unitPrice), notes }),
      });
      if (!res.ok) {
        const d = await res.json();
        setError(d.error ?? "Failed to add credits");
        return;
      }
      setOpen(false);
      setQuantity("1");
      setNotes("");
      router.refresh();
    } catch {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  }

  if (!open) {
    return (
      <button onClick={() => setOpen(true)}
        className="bg-green-700 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
        + Add Credits
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 w-full max-w-sm">
        <h3 className="text-white font-bold text-lg mb-4">Add Prepaid Credits</h3>
        {error && (
          <div className="text-red-300 text-xs bg-red-900/30 border border-red-700 rounded px-3 py-2 mb-4">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-slate-300 text-sm font-medium block mb-2">Lead Type</label>
            <div className="grid grid-cols-3 gap-2">
              {LEAD_TYPES.map((lt) => (
                <button key={lt.value} type="button"
                  onClick={() => handleLeadTypeChange(lt.value)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${leadType === lt.value ? "bg-red-600 border-red-500 text-white" : "bg-slate-700 border-slate-600 text-slate-400 hover:text-white"}`}>
                  {lt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-slate-300 text-sm font-medium block mb-1.5">Quantity</label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500 text-sm" />
            </div>
            <div>
              <label className="text-slate-300 text-sm font-medium block mb-1.5">Unit Price ($)</label>
              <input type="number" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} min="0" step="1" required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500 text-sm" />
            </div>
          </div>

          <div className="bg-slate-700/50 rounded-lg px-4 py-3 flex items-center justify-between">
            <span className="text-slate-400 text-sm">Total Prepaid</span>
            <span className="text-green-400 text-xl font-black">${total.toLocaleString()}</span>
          </div>

          <div>
            <label className="text-slate-300 text-sm font-medium block mb-1.5">Notes (optional)</label>
            <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Invoice #, payment method, etc."
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm" />
          </div>

          <div className="flex gap-3 pt-1">
            <button type="submit" disabled={saving}
              className="flex-1 bg-green-700 hover:bg-green-600 disabled:opacity-50 text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
              {saving ? "Saving…" : "Record Payment"}
            </button>
            <button type="button" onClick={() => setOpen(false)}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2.5 rounded-lg transition-colors text-sm">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
