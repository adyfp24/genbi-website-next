import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
    req: NextRequest,
    {params}: { 
       params: Promise<{ id: string }>;
    }){
    try {
        const id = (await params).id;
        const program = await prisma.program.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!program) {
            return NextResponse.json({
                "success": false,
                "message": "data program kerja tidak ditemukan",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": true,
            "message": "data program kerja berhasil didapatkan",
            "data": program
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            "succes": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, { status: 500 });
    }
}

export async function PUT(
    req: NextRequest,
    {params}: { 
       params: Promise<{ id: string }>;
    }){
    try {
        const id = (await params).id;
        const data: ProgramUpdateRequest = await req.json();
        const updatedProgram = await prisma.program.update({
            where: {
                id: Number(id)
            },
            data: {
                ...data
            }
        })

        if (!updatedProgram) {
            return NextResponse.json({
                "success": false,
                "message": "data program kerja tidak ditemukan / tidak berhasil diperbarui",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": false,
            "message": "data program kerja tidak ditemukan / tidak berhasil diperbarui",
            "data": updatedProgram
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    {params}: { 
       params: Promise<{ id: string }>;
    }){
    try {
        const id = (await params).id;
        await prisma.program.delete({
            where: {
                id: Number(id)
            }
        })

        return NextResponse.json({
            "success": true,
            "message": "data program berhasil dihapus",
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "data program kerja tidak ditemukan / tidak berhasil di hapus",
            "error": (error as Error).message
        }, { status: 500 });
    }
}