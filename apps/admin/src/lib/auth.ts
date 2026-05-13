import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        if (credentials.email !== "ben@advancedmarketing.co") return null;
        if (credentials.password !== process.env.ADMIN_PASSWORD) return null;
        return { id: "1", email: "ben@advancedmarketing.co", name: "Ben", role: "admin" };
      },
    }),
    CredentialsProvider({
      id: "attorney",
      name: "Attorney Portal",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const attorney = await prisma.attorney.findUnique({
          where: { email: credentials.email },
        });
        if (!attorney || !attorney.portalPassword) return null;
        const valid = await bcrypt.compare(credentials.password, attorney.portalPassword);
        if (!valid) return null;
        return {
          id: attorney.id,
          email: attorney.email,
          name: attorney.name,
          role: "attorney",
          userId: attorney.id,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.userId = (user as any).userId ?? (user as any).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.userId = token.userId;
      }
      return session;
    },
  },
};
