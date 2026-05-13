"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function MarkPaidButton({ invoiceId }: { invoiceId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleClick() {
    if (!confirm("Mark this invoice as PAID?")) return;
    setLoading(true);
    try {
      await fetch(`/api/invoices/${invoiceId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "PAID" }),
      });
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-green-700 hover:bg-green-600 disabled:opacity-50 text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
    >
      {loading ? "…" : "Mark Paid"}
    </button>
  );
}
