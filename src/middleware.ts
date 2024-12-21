import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { authMiddleware, roleMiddleware } from "./middleware/index";

export async function middleware(req: NextRequest){
    const authCheck = await authMiddleware(req);
    if(authCheck !== NextResponse.next()) return authCheck;

    const roleCheck = await roleMiddleware(req);
    if(roleCheck !== NextResponse.next()) return roleCheck;
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/admin/:path*"]
}