import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma"; 

export async function GET(req: NextRequest) {
    try {
        const allProgram = await prisma.program.findMany();
        return NextResponse.json({
            "success": true,
            "data": allProgram,
            "message": "data program kerja berhasil didapatkan"
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "error": "internal server error"
        })
    }
}
