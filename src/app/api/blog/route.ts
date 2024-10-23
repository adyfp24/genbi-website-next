import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    try {
        const allBlog = await prisma.blog.findMany();
        if (allBlog.length === 0) {
            return NextResponse.json({
                "success": true,
                "message": "data blog belum tersedia",
                "data": null
            }, { status: 200 })
        }
        return NextResponse.json({
            "success": true,
            "message": "data blog berhasil didapatkan",
            "data": allBlog
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error" : (error as Error).message
        })
    }
}

