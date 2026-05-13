import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LEAD_PRICING } from "@/lib/leadPricing";

export const dynamic = "force-dynamic";

function statusBadgeClass(status: string) {
  switch (status) {
    case "NEW":
      return "bg-blue-900 text-blue-300";
    case "CONTACTED":
      return "bg-yellow-900 text-yellow-300";
    case "SOLD":
      return "bg-green-900 text-green-300";
    case "ARCHIVED":
      return "bg-slate-700 text-slate-400";
    default:
      return "bg-slate-700 text-slate-400";
  }
}

export default async function AttorneyDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.userId) {
    redirect("/attorney/login");
  }

  const attorneyId = session.user.userId;

  const [attorney, leads, creditPurchases] = await Promise.all([
    prisma.attorney.findUnique({ where: { id: attorneyId } }),
    prisma.lead.findMany({
      where: { site: { attorneyId } },
      orderBy: { createdAt: "desc" },
      include: { site: true },
    }),
    prisma.leadCreditPurchase.findMany({
      where: { attorneyId, status: "PAID" },
      select: { leadType: true, quantity: true },
    }),
  ]);

  if (!attorney) {
    redirect("/attorney/login");
  }

  const newCount = leads.filter((l) => l.status === "NEW").length;
  const soldCount = leads.filter((l) => l.status === "SOLD").length;
  const withCall = leads.filter((l) => l.conversationId).length;

  // Credit balance per type
  const leadTypes = ["FORM_FILL", "AI_CALL", "HOT_TRANSFER"] as const;
  const creditBalance = leadTypes.map((lt) => {
    const purchased = creditPurchases
      .filter((p) => p.leadType === lt)
      .reduce((sum, p) => sum + p.quantity, 0);
    const received = leads.filter((l) => (l as any).leadType === lt).length;
    return { leadType: lt, purchased, received, available: Math.max(0, purchased - received) };
  });

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
              <p className="text-slate-400 text-xs">{attorney.firmName}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-sm">{attorney.name}</span>
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
        <h1 className="text-2xl font-bold text-white mb-6">Your Leads</h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Total Leads
            </p>
            <p className="text-white text-3xl font-black">{leads.length}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              New
            </p>
            <p className="text-blue-400 text-3xl font-black">{newCount}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              With Call Recording
            </p>
            <p className="text-green-400 text-3xl font-black">{withCall}</p>
          </div>
        </div>

        {/* Credit Balance */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold">Credit Balance</h2>
            <Link
              href="/attorney/credits"
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            >
              Purchase More Credits
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {creditBalance.map(({ leadType, purchased, received, available }) => (
              <div key={leadType} className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
                  {LEAD_PRICING[leadType].label}
                </p>
                <p className="text-white text-2xl font-black mb-2">
                  {available}
                  <span className="text-slate-500 text-sm font-normal ml-1">available</span>
                </p>
                <div className="text-xs text-slate-500 space-y-0.5">
                  <div className="flex justify-between">
                    <span>Purchased</span>
                    <span className="text-slate-400">{purchased}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Received</span>
                    <span className="text-slate-400">{received}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Lead Preferences */}
          {attorney.acceptedLeadTypes && attorney.acceptedLeadTypes.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-2">
                Lead Preferences
              </p>
              <div className="flex flex-wrap gap-2">
                {(attorney.acceptedLeadTypes as string[]).map((lt) => (
                  <span
                    key={lt}
                    className="bg-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {LEAD_PRICING[lt as keyof typeof LEAD_PRICING]?.label ?? lt}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Leads table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Date
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Name
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Phone
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Case Type
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Status
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Site
                </th>
                <th className="text-left text-slate-400 text-xs font-medium px-4 py-3">
                  Call
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-slate-500 text-sm text-center py-10"
                  >
                    No leads yet
                  </td>
                </tr>
              )}
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                >
                  <td className="px-4 py-3 text-slate-400 text-xs">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-white text-sm font-medium">
                    {lead.name}
                  </td>
                  <td className="px-4 py-3 text-slate-300 text-sm">
                    <a
                      href={`tel:${lead.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {lead.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-slate-300 text-sm">
                    {lead.caseType}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusBadgeClass(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs">
                    {lead.site?.domain ?? lead.domain}
                  </td>
                  <td className="px-4 py-3">
                    {lead.conversationId ? (
                      <Link
                        href={`/attorney/conversation/${lead.conversationId}`}
                        className="inline-flex items-center gap-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 px-2.5 py-1 rounded-lg transition-colors font-medium"
                      >
                        View Call
                      </Link>
                    ) : (
                      <span className="text-slate-600 text-xs">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
