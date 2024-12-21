import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest){
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const protectedPaths = ["/dashboard/admin"];
    const pathname = new URL(req.url).pathname;

    if (protectedPaths.some((path) => pathname.startsWith(path))) {
        if (!token) {
          return NextResponse.redirect(new URL("/login", req.url));
        }
    
        if (token.role !== "superadmin") { 
          return NextResponse.redirect(new URL("/403", req.url));
        }
      }
    
      return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/admin/:path*"]
}