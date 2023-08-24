import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get("adminToken")?.value;

  const userToken = request.cookies.get("userToken")?.value;

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    request.nextUrl.pathname !== "/admin/login" &&
    !adminToken
  ) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (
    request.nextUrl.pathname.startsWith("/user") &&
    request.nextUrl.pathname !== "/user/login" &&
    request.nextUrl.pathname !== "/user/signup" &&
    !userToken
  ) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  return NextResponse.next();
}
