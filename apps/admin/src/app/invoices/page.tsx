import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/AdminLayout";
import Link from "next/link";
import { MarkPaidButton } from "./MarkPaidButton";

export const dynamic = "force-dynamic";

export default async function InvoicesPage() {
  const invoices = await prisma.invoice.findMany({
    orderBy: { createdAt: "desc" },
    include: { attorney: true, leads: true },
  });

  const totalUnpaid = invoices
    .filter((i) => i.status === "UNPAID")
    .reduce((sum, i) => sum + i.amount, 0);
  const totalPaid = invoices
    .filter((i) => i.status === "PAID")
    .reduce((sum, i) => sum + i.amount, 0);

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Invoices</h1>
          <Link
            href="/invoices/new"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
          >
            + New Invoice
          </Link>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Total Invoices
            </p>
            <p className="text-white text-3xl font-black">{invoices.length}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Outstanding
            </p>
            <p className="text-red-400 text-3xl font-black">
              ${totalUnpaid.toFixed(0)}
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Collected
            </p>
            <p className="text-green-400 text-3xl font-black">
              ${totalPaid.toFixed(0)}
            </p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Date
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Attorney
                </th>
                <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">
                  Leads
                </th>
                <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">
                  Amount
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Status
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Paid
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {invoices.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-slate-500 text-sm text-center py-10"
                  >
                    No invoices yet.{" "}
                    <Link
                      href="/invoices/new"
                      className="text-red-400 hover:underline"
                    >
                      Create one
                    </Link>
                  </td>
                </tr>
              )}
              {invoices.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                >
                  <td className="px-4 py-3 text-slate-300 text-sm">
                    {new Date(inv.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-white text-sm font-medium">
                      {inv.attorney.name}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {inv.attorney.firmName}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-white text-sm text-right">
                    {inv.leads.length}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-white text-sm font-bold">
                      ${inv.amount.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        inv.status === "PAID"
                          ? "bg-green-900 text-green-300"
                          : "bg-red-900 text-red-300"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs">
                    {inv.paidAt
                      ? new Date(inv.paidAt).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      {inv.status === "UNPAID" && (
                        <MarkPaidButton invoiceId={inv.id} />
                      )}
                      <Link
                        href={`/invoices/${inv.id}`}
                        className="text-slate-400 hover:text-white text-xs underline"
                      >
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
