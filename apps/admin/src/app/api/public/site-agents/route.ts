import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Public (no auth) — returns site domain → attorney phone for agent configuration
export async function GET() {
  const sites = await prisma.site.findMany({
    where: { attorneyId: { not: null } },
    include: { attorney: true },
    select: {
      domain: true,
      attorney: {
        select: { phone: true, name: true },
      },
    },
  });

  const result: Record<string, { phone: string; name: string }> = {};
  for (const site of sites) {
    if (site.attorney) {
      result[site.domain] = {
        phone: site.attorney.phone,
        name: site.attorney.name,
      };
    }
  }

  return NextResponse.json(result);
}
