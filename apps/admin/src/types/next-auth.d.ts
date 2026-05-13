import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
      userId?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
    userId?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    userId?: string;
  }
}
