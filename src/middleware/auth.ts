import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function authMiddleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}