import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/AdminLayout";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SetPortalPassword } from "./SetPortalPassword";

export const dynamic = "force-dynamic";

export default async function AttorneyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const attorney = await prisma.attorney.findUnique({
    where: { id: params.id },
    include: {
      sites: {
        include: { _count: { select: { leads: true } } },
      },
      invoices: {
        orderBy: { createdAt: "desc" },
        include: { leads: true },
      },
    },
  });

  if (!attorney) notFound();

  const totalBilled = attorney.invoices.reduce(
    (sum, inv) => sum + inv.amount,
    0
  );
  const balanceDue = attorney.invoices
    .filter((inv) => inv.status === "UNPAID")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const totalLeads = attorney.sites.reduce(
    (sum, s) => sum + s._count.leads,
    0
  );

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Link href="/attorneys" className="text-slate-400 hover:text-white text-sm">
            ← Attorneys
          </Link>
          <span className="text-slate-600">/</span>
          <h1 className="text-2xl font-bold text-white">{attorney.name}</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Total Leads
            </p>
            <p className="text-white text-3xl font-black">{totalLeads}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Total Billed
            </p>
            <p className="text-green-400 text-3xl font-black">
              ${totalBilled.toFixed(0)}
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Balance Due
            </p>
            <p
              className={`text-3xl font-black ${
                balanceDue > 0 ? "text-red-400" : "text-slate-500"
              }`}
            >
              ${balanceDue.toFixed(0)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Attorney Info */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
            <h2 className="text-white font-bold mb-4">Attorney Information</h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-slate-500 text-xs uppercase tracking-wide">
                  Firm
                </dt>
                <dd className="text-white text-sm mt-0.5">
                  {attorney.firmName}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 text-xs uppercase tracking-wide">
                  Email
                </dt>
                <dd className="text-white text-sm mt-0.5">
                  <a
                    href={`mailto:${attorney.email}`}
                    className="text-blue-400 hover:underline"
                  >
                    {attorney.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500 text-xs uppercase tracking-wide">
                  Phone
                </dt>
                <dd className="text-white text-sm mt-0.5">
                  <a
                    href={`tel:${attorney.phone}`}
                    className="text-blue-400 hover:underline"
                  >
                    {attorney.phone}
                  </a>
                </dd>
              </div>
              {attorney.notes && (
                <div>
                  <dt className="text-slate-500 text-xs uppercase tracking-wide">
                    Notes
                  </dt>
                  <dd className="text-slate-300 text-sm mt-0.5">
                    {attorney.notes}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-slate-500 text-xs uppercase tracking-wide">
                  Member Since
                </dt>
                <dd className="text-white text-sm mt-0.5">
                  {new Date(attorney.createdAt).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </div>

          {/* Assigned Sites */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
            <h2 className="text-white font-bold mb-4">Assigned Sites</h2>
            {attorney.sites.length === 0 ? (
              <p className="text-slate-500 text-sm">No sites assigned yet.</p>
            ) : (
              <div className="space-y-3">
                {attorney.sites.map((site) => (
                  <div
                    key={site.id}
                    className="flex items-center justify-between bg-slate-700/50 rounded-lg px-4 py-3"
                  >
                    <div>
                      <div className="text-white text-sm font-medium">
                        {site.domain}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {site.practiceArea} · {site.city}, {site.state}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm font-bold">
                        ${site.costPerLead.toFixed(0)}/lead
                      </div>
                      <div className="text-slate-500 text-xs">
                        {site._count.leads} leads
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Portal Password */}
        <div className="mb-6">
          <SetPortalPassword attorneyId={attorney.id} hasPassword={!!attorney.portalPassword} />
        </div>

        {/* Invoice History */}
        <div className="bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            <h2 className="text-white font-bold">Invoice History</h2>
            <Link
              href="/invoices/new"
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            >
              + New Invoice
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Date
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Leads
                </th>
                <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">
                  Amount
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Status
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Paid Date
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {attorney.invoices.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-slate-500 text-sm text-center py-6"
                  >
                    No invoices yet
                  </td>
                </tr>
              )}
              {attorney.invoices.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                >
                  <td className="px-4 py-3 text-slate-300 text-sm">
                    {new Date(inv.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-slate-300 text-sm">
                    {inv.leads.length}
                  </td>
                  <td className="px-4 py-3 text-white text-sm font-bold text-right">
                    ${inv.amount.toFixed(2)}
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
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/invoices/${inv.id}`}
                      className="text-slate-400 hover:text-white text-xs underline"
                    >
                      View
                    </Link>
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
