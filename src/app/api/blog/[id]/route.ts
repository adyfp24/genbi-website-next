import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const blogSlug = params.id;

        const blog = await prisma.blog.findFirst({
            where: {
                slug: blogSlug,
            }
        })

        if (!blog) {
            return NextResponse.json({
                "success": false,
                "message": "data blog dengan id tersebut tidak ditemukan",
                "data": null
            })
        }

        return NextResponse.json({
            "success": true,
            "message": "data blog berhasil diapatkan",
            "data": blog
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error " + error
        }, { status: 500 })
    }
}