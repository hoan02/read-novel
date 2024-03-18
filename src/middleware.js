import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn, auth } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/truyen(.*)", "/api/novels(.*)", "/api/webhook(.*)"],
  ignoredRoutes: [],
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    if (
      auth.orgRole !== "org:admin" &&
      req.nextUrl.pathname.startsWith("/api/admin")
    ) {
      return new NextResponse(null, { status: 403 });
    }
    if (
      auth.orgRole !== "org:admin" &&
      auth.orgRole !== "org:writer" &&
      req.nextUrl.pathname.startsWith("/api/writer")
    ) {
      return new NextResponse(null, { status: 403 });
    }
    if (!auth.userId && req.nextUrl.pathname.startsWith("/api/account")) {
      return new NextResponse(null, { status: 403 });
    }
    // Allow access to all other routes
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
