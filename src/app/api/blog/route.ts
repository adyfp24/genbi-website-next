import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response){
    try {
        const allBlog = await prisma.blog.findMany();
        return NextResponse.json({
            "success": true,
            "data": allBlog,
            "message": "data blog berhasil didapatkan"
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "error": "internal server error"
        })
    }
}

