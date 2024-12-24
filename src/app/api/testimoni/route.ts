import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const allTestimoni = await prisma.testimoni.findMany({
            include:{
                InstansiPenerima: true
            }
        });
        if(allTestimoni.length === 0) {
            return NextResponse.json({
                "success": true,
                "message": "data testimoni belum tersedia",
                "data": null
            }, {status: 200})
        }

        return NextResponse.json({
            "success": true,
            "message": "data testimoni berhasil didapatkan",
            "data": allTestimoni
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const data : TestimoniCreateRequest = await req.json();
        const newTestimoni = await prisma.testimoni.create({
            data:{
                ...data
            }
        })

        return NextResponse.json({
            "success": true,
            "message": "Testimoni baru berhasil dibuat",
            "data": newTestimoni
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, {status: 500})
    }
}