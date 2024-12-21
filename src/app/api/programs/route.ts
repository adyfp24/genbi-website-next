import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const allProgram = await prisma.program.findMany();
        if(allProgram.length === 0) {
            return NextResponse.json({
                "success": true,
                "message": "data program kerja belum tersedia",
                "data": null
            }, {status: 200})
        }

        return NextResponse.json({
            "success": true,
            "message": "data program kerja berhasil didapatkan",
            "data": allProgram
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
        const data : ProgramCreateRequest = await req.json();
        const newProgram = await prisma.program.create({
            data:{
                ...data
            }
        })

        return NextResponse.json({
            "success": true,
            "message": "Program baru berhasil dibuat",
            "data": newProgram
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, {status: 500})
    }
}