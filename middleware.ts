import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("currentUser")?.value;

    if (currentUser && !request.nextUrl.pathname.startsWith("/")) {
        return Response.redirect(new URL("/", request.url))
    }

    if (!currentUser && !request.nextUrl.pathname.startsWith("/sign")) {
        return Response.redirect(new URL("/sign-in", request.url))
    }
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.jpg$)\.svg.*)'],
  }