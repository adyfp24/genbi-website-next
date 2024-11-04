import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    try {
        const allInstansi = await prisma.instansi.findMany();
        if(allInstansi.length === 0) {
            NextResponse.json({
                "success" : true,
                "message" : "data instansi penerima belum ada",
            }, {status: 200})
        }

        NextResponse.json({
            "success": true,
            "message": "data instansi penerima berhasil didapatkan"
        }, {status: 200})
    } catch (err) {
        NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (err as Error).message
        }, {status: 500})
    }
}

export async function POST(req: NextRequest){
    try {
        const data = await req.json();
        const newInstansi = await prisma.instansi.create({
            data: {
                ...data
            }
        });
        return NextResponse.json({
            "success": true,
            "message": "Data instansi baru berhasil dibuat",
            "data": newInstansi
        })
    } catch (err) {
        NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (err as Error).message
        }, {status: 500})
    }
}