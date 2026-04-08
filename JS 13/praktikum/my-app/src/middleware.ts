import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get("isLogin");
    const isLogin = cookie?.value === "true";

    if (isLogin) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/auth/login", request.url));
//   return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/produk", "/about"],
};