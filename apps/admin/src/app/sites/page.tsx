import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/AdminLayout";
import { SiteRow } from "./SiteRow";
import { AddSiteForm } from "./AddSiteForm";

export const dynamic = "force-dynamic";

export default async function SitesPage() {
  const [sites, attorneys] = await Promise.all([
    prisma.site.findMany({
      orderBy: { createdAt: "desc" },
      include: { attorney: true, _count: { select: { leads: true } } },
    }),
    prisma.attorney.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true, firmName: true },
    }),
  ]);

  // Serialize dates for client components
  const serializedSites = sites.map((s) => ({
    ...s,
    createdAt: s.createdAt.toISOString(),
  }));

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Sites</h1>
          <AddSiteForm attorneys={attorneys} />
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Domain
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Practice Area
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Location
                </th>
                <th className="text-center text-slate-400 text-xs font-medium px-4 py-3">
                  Leads
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Cost/Lead
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Attorney
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {serializedSites.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-slate-500 text-sm text-center py-10"
                  >
                    No sites yet. Click &ldquo;Add Site&rdquo; to get started.
                  </td>
                </tr>
              )}
              {serializedSites.map((site) => (
                <SiteRow key={site.id} site={site} attorneys={attorneys} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
