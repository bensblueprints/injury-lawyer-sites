"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LEAD_PRICING, getPriceWithFee } from "@/lib/leadPricing";

type LeadType = "FORM_FILL" | "AI_CALL" | "HOT_TRANSFER";

interface CreditSummary {
  leadType: LeadType;
  purchased: number;
  received: number;
  available: number;
}

interface PendingPurchase {
  id: string;
  leadType: LeadType;
  quantity: number;
  totalCharged: number;
  status: string;
  createdAt: string;
}

interface CreditsData {
  summary: CreditSummary[];
  pending: PendingPurchase[];
  attorneyName: string;
  firmName: string;
}

const LEAD_TYPE_ORDER: LeadType[] = ["FORM_FILL", "AI_CALL", "HOT_TRANSFER"];

export default function AttorneyCreditsPage() {
  const [data, setData] = useState<CreditsData | null>(null);
  const [quantities, setQuantities] = useState<Record<LeadType, number>>({
    FORM_FILL: 1,
    AI_CALL: 1,
    HOT_TRANSFER: 1,
  });
  const [purchasing, setPurchasing] = useState<LeadType | null>(null);
  const [purchaseError, setPurchaseError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/attorney/credits/balance")
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function handlePurchase(leadType: LeadType) {
    setPurchaseError("");
    setPurchasing(leadType);
    try {
      const res = await fetch("/api/attorney/credits/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadType, quantity: quantities[leadType] }),
      });
      const result = await res.json();
      if (!res.ok) {
        setPurchaseError(result.error ?? "Purchase failed");
        return;
      }
      if (result.checkoutUrl) {
        window.location.href = result.checkoutUrl;
      } else {
        setPurchaseError(result.error ?? "Payment not configured — contact support.");
      }
    } catch {
      setPurchaseError("Network error — please try again");
    } finally {
      setPurchasing(null);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-slate-400">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">L</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Attorney Client Portal</p>
              <p className="text-slate-400 text-xs">{data?.firmName ?? ""}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/attorney/dashboard" className="text-slate-400 hover:text-white text-xs">
              ← Dashboard
            </Link>
            <Link
              href="/api/auth/signout"
              className="text-slate-400 hover:text-white text-xs underline"
            >
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-2">Lead Credits</h1>
        <p className="text-slate-400 text-sm mb-8">
          Purchase credits in advance. Credits are deducted as leads are delivered to you.
        </p>

        {purchaseError && (
          <div className="mb-6 bg-red-900/40 border border-red-700 text-red-300 text-sm px-4 py-3 rounded-lg">
            {purchaseError}
          </div>
        )}

        {/* Credit Balance Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {LEAD_TYPE_ORDER.map((lt) => {
            const summary = data?.summary.find((s) => s.leadType === lt);
            const pricing = LEAD_PRICING[lt];
            return (
              <div key={lt} className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
                  {pricing.label}
                </p>
                <p className="text-white text-3xl font-black mb-3">
                  {summary?.available ?? 0}
                  <span className="text-slate-500 text-base font-normal ml-1">available</span>
                </p>
                <div className="text-xs text-slate-500 space-y-0.5">
                  <div className="flex justify-between">
                    <span>Purchased</span>
                    <span className="text-slate-400">{summary?.purchased ?? 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Received</span>
                    <span className="text-slate-400">{summary?.received ?? 0}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Purchase Cards */}
        <h2 className="text-white font-bold text-lg mb-4">Purchase Credits</h2>
        <div className="grid grid-cols-1 gap-4 mb-10">
          {LEAD_TYPE_ORDER.map((lt) => {
            const pricing = LEAD_PRICING[lt];
            const qty = quantities[lt];
            const { subtotal, processingFee, total } = getPriceWithFee(pricing.basePrice);
            const orderTotal = Math.round(total * qty * 100) / 100;

            return (
              <div
                key={lt}
                className="bg-slate-800 rounded-xl border border-slate-700 p-5"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-white font-bold">{pricing.label}</h3>
                      <span className="text-green-400 text-sm font-bold">
                        ${(subtotal + processingFee).toFixed(0)}/lead
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{pricing.description}</p>
                    <div className="mt-2 text-xs text-slate-500">
                      ${subtotal.toFixed(0)} base + ${processingFee.toFixed(0)} processing fee (5%)
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <label className="text-slate-400 text-xs">Qty:</label>
                      <select
                        value={qty}
                        onChange={(e) =>
                          setQuantities((prev) => ({
                            ...prev,
                            [lt]: parseInt(e.target.value, 10),
                          }))
                        }
                        className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-red-500"
                      >
                        {Array.from({ length: 50 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-sm">
                        ${orderTotal.toFixed(2)}
                      </div>
                      <div className="text-slate-500 text-xs">total</div>
                    </div>
                    <button
                      onClick={() => handlePurchase(lt)}
                      disabled={purchasing === lt}
                      className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
                    >
                      {purchasing === lt ? "Processing…" : "Purchase Credits"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pending / Recent Purchases */}
        {data && data.pending.length > 0 && (
          <div>
            <h2 className="text-white font-bold text-lg mb-4">Recent Purchases</h2>
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">Date</th>
                    <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">Lead Type</th>
                    <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">Quantity</th>
                    <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">Total</th>
                    <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.pending.map((p) => (
                    <tr key={p.id} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                      <td className="px-4 py-3 text-slate-400 text-xs">
                        {new Date(p.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-white text-sm">
                        {LEAD_PRICING[p.leadType]?.label ?? p.leadType}
                      </td>
                      <td className="px-4 py-3 text-slate-300 text-sm">{p.quantity}</td>
                      <td className="px-4 py-3 text-white text-sm font-bold text-right">
                        ${p.totalCharged.toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            p.status === "PAID"
                              ? "bg-green-900 text-green-300"
                              : p.status === "FAILED"
                              ? "bg-red-900 text-red-300"
                              : "bg-yellow-900 text-yellow-300"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
