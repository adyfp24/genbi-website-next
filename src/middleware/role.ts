import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function roleMiddleware(req: NextRequest){
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const pathname = new URL(req.url).pathname;
    const protectedPaths = ["/dashboard/admin"];

    if(protectedPaths.some((path) => pathname.startsWith(path))){
        if(!token){
            return NextResponse.redirect(new URL("/login", req.url));
        }
        if(token.role !== "superadmin"){
            return NextResponse.redirect(new URL("/informasi", req.url));
        }
    }
}
