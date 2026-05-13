import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { password } = body;
    if (!password || typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 12);

    const attorney = await prisma.attorney.update({
      where: { id: params.id },
      data: { portalPassword: hashed },
      select: { id: true, name: true, email: true },
    });

    return NextResponse.json({ success: true, attorney });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
