import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/AdminLayout";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "./PrintButton";
import { MarkPaidButton } from "../MarkPaidButton";

export const dynamic = "force-dynamic";

export default async function InvoiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const invoice = await prisma.invoice.findUnique({
    where: { id: params.id },
    include: { attorney: true, leads: true },
  });

  if (!invoice) notFound();

  return (
    <AdminLayout>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6 print:hidden">
          <Link href="/invoices" className="text-slate-400 hover:text-white text-sm">
            ← Invoices
          </Link>
          <span className="text-slate-600">/</span>
          <h1 className="text-2xl font-bold text-white">Invoice Detail</h1>
        </div>

        {/* Invoice card */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-sm">LS</span>
                  </div>
                  <span className="text-white font-bold">Lawyer Sites</span>
                </div>
                <p className="text-slate-500 text-xs mt-2">
                  Invoice #{invoice.id.slice(-8).toUpperCase()}
                </p>
                <p className="text-slate-500 text-xs">
                  Issued: {new Date(invoice.createdAt).toLocaleDateString()}
                </p>
                {invoice.paidAt && (
                  <p className="text-green-400 text-xs">
                    Paid: {new Date(invoice.paidAt).toLocaleDateString()}
                  </p>
                )}
              </div>
              <span
                className={`text-sm font-bold px-3 py-1 rounded-full ${
                  invoice.status === "PAID"
                    ? "bg-green-900 text-green-300"
                    : "bg-red-900 text-red-300"
                }`}
              >
                {invoice.status}
              </span>
            </div>
          </div>

          {/* Attorney info */}
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">
              Bill To
            </h2>
            <p className="text-white font-bold">{invoice.attorney.name}</p>
            <p className="text-slate-400 text-sm">{invoice.attorney.firmName}</p>
            <p className="text-slate-400 text-sm">{invoice.attorney.email}</p>
            <p className="text-slate-400 text-sm">{invoice.attorney.phone}</p>
          </div>

          {/* Leads table */}
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">
              Leads ({invoice.leads.length})
            </h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-500 text-xs font-medium py-2">
                    Name
                  </th>
                  <th className="text-left text-slate-500 text-xs font-medium py-2">
                    Contact
                  </th>
                  <th className="text-left text-slate-500 text-xs font-medium py-2">
                    Case
                  </th>
                  <th className="text-left text-slate-500 text-xs font-medium py-2">
                    Site
                  </th>
                  <th className="text-left text-slate-500 text-xs font-medium py-2">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoice.leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-slate-700/40">
                    <td className="text-white text-sm py-2.5">{lead.name}</td>
                    <td className="py-2.5">
                      <div className="text-slate-300 text-sm">{lead.phone}</div>
                      <div className="text-slate-500 text-xs">{lead.email}</div>
                    </td>
                    <td className="text-slate-300 text-sm py-2.5">
                      {lead.caseType}
                    </td>
                    <td className="text-slate-500 text-xs py-2.5">
                      {lead.domain}
                    </td>
                    <td className="text-slate-500 text-xs py-2.5">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          {invoice.notes && (
            <div className="px-6 py-4 border-b border-slate-700">
              <h2 className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-2">
                Notes
              </h2>
              <p className="text-slate-300 text-sm">{invoice.notes}</p>
            </div>
          )}

          {/* Total */}
          <div className="p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wide">
                Total Amount Due
              </p>
              <p className="text-white text-4xl font-black">
                ${invoice.amount.toFixed(2)}
              </p>
            </div>
            <div className="flex gap-3 print:hidden">
              {invoice.status === "UNPAID" && (
                <MarkPaidButton invoiceId={invoice.id} />
              )}
              <PrintButton />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
