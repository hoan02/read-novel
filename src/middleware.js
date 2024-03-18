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

// the list of all allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://read-novel-phi.vercel.app",
];

export function middleware(req) {
  // retrieve the current response
  const res = NextResponse.next();

  // retrieve the HTTP "Origin" header
  // from the incoming request
  req.headers.get("origin");

  // if the origin is an allowed one,
  // add it to the 'Access-Control-Allow-Origin' header
  if (allowedOrigins.includes(origin)) {
    res.headers.append("Access-Control-Allow-Origin", origin);
  }

  // add the remaining CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
