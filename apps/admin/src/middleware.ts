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
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/((?!login|attorney/login|api/auth|api/leads|_next/static|_next/image|favicon.ico).*)",
  ],
};
