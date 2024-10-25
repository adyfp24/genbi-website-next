import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const allFaq = await prisma.fAQ.findMany();
        if(allFaq.length === 0) {
            return NextResponse.json({
                "success": true,
                "message": "data FAQ belum tersedia",
                "data": null
            }, {status: 200})
        }

        return NextResponse.json({
            "success": true,
            "message": "data FAQ berhasil didapatkan",
            "data": allFaq
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
        const data : FaqCreateRequest = await req.json();
        const newFaq = await prisma.fAQ.create({
            data:{
                ...data
            }
        })

        return NextResponse.json({
            "success": true,
            "message": "FAQ baru berhasil dibuat",
            "data": newFaq
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, {status: 500})
    }
}