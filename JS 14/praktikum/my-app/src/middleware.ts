import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
    const isPublicPage = request.nextUrl.pathname === '/';

    if (!token && !isAuthPage && !isPublicPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/produk", "/about", "/profile", "/profile/:path*", "/setting", "/user"],
};