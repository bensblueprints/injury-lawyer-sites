import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/AdminLayout";
import { LeadsTable } from "./LeadsTable";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      site: {
        select: {
          domain: true,
          practiceArea: true,
          attorney: { select: { name: true } },
        },
      },
    },
  });

  const statusFilter = searchParams.status;

  const counts = {
    ALL: leads.length,
    NEW: leads.filter((l) => l.status === "NEW").length,
    CONTACTED: leads.filter((l) => l.status === "CONTACTED").length,
    SOLD: leads.filter((l) => l.status === "SOLD").length,
    ARCHIVED: leads.filter((l) => l.status === "ARCHIVED").length,
  };

  const tabs = [
    { label: "All", value: undefined, count: counts.ALL },
    { label: "New", value: "NEW", count: counts.NEW },
    { label: "Contacted", value: "CONTACTED", count: counts.CONTACTED },
    { label: "Sold", value: "SOLD", count: counts.SOLD },
    { label: "Archived", value: "ARCHIVED", count: counts.ARCHIVED },
  ];

  // Serialize dates for client component
  const serializedLeads = leads.map((l) => ({
    ...l,
    createdAt: l.createdAt.toISOString(),
  }));

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <span className="text-slate-400 text-sm">{leads.length} total</span>
        </div>

        {/* Status filter tabs */}
        <div className="flex gap-1 mb-6 bg-slate-800 rounded-xl p-1 w-fit border border-slate-700">
          {tabs.map((tab) => {
            const active =
              statusFilter === tab.value ||
              (tab.value === undefined && !statusFilter);
            return (
              <Link
                key={tab.label}
                href={tab.value ? `/leads?status=${tab.value}` : "/leads"}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                  active
                    ? "bg-red-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                {tab.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    active ? "bg-red-700 text-red-200" : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </Link>
            );
          })}
        </div>

        <LeadsTable leads={serializedLeads} filter={statusFilter} />
      </div>
    </AdminLayout>
  );
}
