import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/AdminLayout";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AttorneysPage() {
  const attorneys = await prisma.attorney.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      sites: { include: { _count: { select: { leads: true } } } },
      invoices: true,
      _count: { select: { invoices: true } },
    },
  });

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Attorneys</h1>
          <Link
            href="/attorneys/new"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
          >
            + Add Attorney
          </Link>
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Name / Firm
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Contact
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Sites
                </th>
                <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">
                  Total Leads
                </th>
                <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">
                  Total Billed
                </th>
                <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">
                  Balance Due
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {attorneys.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-slate-500 text-sm text-center py-10"
                  >
                    No attorneys yet.{" "}
                    <Link
                      href="/attorneys/new"
                      className="text-red-400 hover:underline"
                    >
                      Add one
                    </Link>
                  </td>
                </tr>
              )}
              {attorneys.map((attorney) => {
                const totalLeads = attorney.sites.reduce(
                  (sum, s) => sum + s._count.leads,
                  0
                );
                const totalBilled = attorney.invoices.reduce(
                  (sum, inv) => sum + inv.amount,
                  0
                );
                const balanceDue = attorney.invoices
                  .filter((inv) => inv.status === "UNPAID")
                  .reduce((sum, inv) => sum + inv.amount, 0);
                return (
                  <tr
                    key={attorney.id}
                    className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="text-white text-sm font-medium">
                        {attorney.name}
                      </div>
                      <div className="text-slate-500 text-xs">
                        {attorney.firmName}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-slate-300 text-sm">
                        {attorney.email}
                      </div>
                      <div className="text-slate-500 text-xs">
                        {attorney.phone}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {attorney.sites.length === 0 ? (
                          <span className="text-slate-600 text-xs">—</span>
                        ) : (
                          attorney.sites.map((s) => (
                            <span
                              key={s.id}
                              className="bg-slate-700 text-slate-300 text-xs px-2 py-0.5 rounded"
                            >
                              {s.domain}
                            </span>
                          ))
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-white text-sm text-right">
                      {totalLeads}
                    </td>
                    <td className="px-4 py-3 text-green-400 text-sm text-right">
                      ${totalBilled.toFixed(0)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className={
                          balanceDue > 0
                            ? "text-red-400 text-sm font-bold"
                            : "text-slate-500 text-sm"
                        }
                      >
                        ${balanceDue.toFixed(0)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/attorneys/${attorney.id}`}
                        className="text-slate-400 hover:text-white text-xs underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
