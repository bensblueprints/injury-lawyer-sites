import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Attorney portal routes require role="attorney" OR role="admin"
    if (pathname.startsWith("/attorney/")) {
      if (token?.role === "attorney" || token?.role === "admin") {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/attorney/login", req.url));
    }

    // All other protected routes require role="admin"
    if (token?.role !== "admin") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl?.pathname ?? "";
        if (pathname.startsWith("/api/public/") || pathname.startsWith("/api/elevenlabs/")) return true;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!$|login|attorney/login|register|api/auth|api/leads|api/attorney/register|api/public|api/elevenlabs|_next/static|_next/image|favicon.ico).*)",
  ],
};
