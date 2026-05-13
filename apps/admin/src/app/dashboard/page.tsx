import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/AdminLayout";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [totalLeads, newToday, soldLeads, sites, recentLeads, revenue] =
    await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      prisma.lead.count({ where: { status: "SOLD" } }),
      prisma.site.findMany({
        include: { _count: { select: { leads: true } }, attorney: true },
      }),
      prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
        include: { site: true },
      }),
      prisma.invoice.aggregate({
        where: { status: "PAID" },
        _sum: { amount: true },
      }),
    ]);

  const stats = [
    { label: "Total Leads", value: totalLeads, color: "text-blue-400" },
    { label: "New Today", value: newToday, color: "text-green-400" },
    { label: "Sold Leads", value: soldLeads, color: "text-yellow-400" },
    {
      label: "Revenue (Paid)",
      value: `$${(revenue._sum.amount ?? 0).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}`,
      color: "text-red-400",
    },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-slate-800 rounded-xl p-5 border border-slate-700"
            >
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
                {s.label}
              </p>
              <p className={`${s.color} text-3xl font-black`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Per-site table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 mb-8">
          <div className="p-4 border-b border-slate-700">
            <h2 className="text-white font-bold">Sites Overview</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Domain
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Attorney
                </th>
                <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">
                  Leads
                </th>
                <th className="text-right text-slate-400 text-xs font-medium px-4 py-3">
                  $/Lead
                </th>
              </tr>
            </thead>
            <tbody>
              {sites.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="text-slate-500 text-sm text-center py-6"
                  >
                    No sites yet
                  </td>
                </tr>
              )}
              {sites.map((site) => (
                <tr
                  key={site.id}
                  className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                >
                  <td className="px-4 py-3 text-white text-sm font-medium">
                    {site.domain}
                  </td>
                  <td className="px-4 py-3 text-slate-300 text-sm">
                    {site.attorney?.name ?? (
                      <span className="text-slate-500">Unassigned</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-white text-sm text-right">
                    {site._count.leads}
                  </td>
                  <td className="px-4 py-3 text-green-400 text-sm text-right">
                    ${site.costPerLead.toFixed(0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent leads */}
        <div className="bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            <h2 className="text-white font-bold">Recent Leads</h2>
            <a
              href="/leads"
              className="text-red-400 hover:text-red-300 text-sm"
            >
              View all →
            </a>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Name
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Site
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Case
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Status
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-slate-500 text-sm text-center py-6"
                  >
                    No leads yet
                  </td>
                </tr>
              )}
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-slate-700/50">
                  <td className="px-4 py-3 text-white text-sm">{lead.name}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">
                    {lead.domain}
                  </td>
                  <td className="px-4 py-3 text-slate-300 text-sm">
                    {lead.caseType}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        lead.status === "NEW"
                          ? "bg-blue-900 text-blue-300"
                          : lead.status === "CONTACTED"
                          ? "bg-yellow-900 text-yellow-300"
                          : lead.status === "SOLD"
                          ? "bg-green-900 text-green-300"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs">
                    {new Date(lead.createdAt).toLocaleDateString()}
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
