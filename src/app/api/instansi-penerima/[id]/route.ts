import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server"

export async function GET(
    req: NextRequest,
    { params }: {
        params: Promise<{ id: string }>;
    }) {
    try {
        const instansiId = (await params).id;
        const instansi = await prisma.instansi.findFirst({
            where: {
                id: Number(instansiId)
            }
        })

        if (!instansi) {
            return NextResponse.json({
                "success": false,
                "message": "Id tidak valid, instansi tidak tersedia",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": true,
            "message": "Data instansi penerima berhasil didapatkan",
            "data": instansi
        }, { status: 500 })

    } catch (err) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (err as Error).message
        }, { status: 500 })
    }
}

export async function PUT(
    req: NextRequest,
    { params }: {
        params: Promise<{ id: string }>;
    }) {
    try {
        const instansiId = (await params).id;
        const data = await req.json();
        const updatedInstansi = await prisma.instansi.update({
            where: {
                id: Number(instansiId)
            },
            data: {
                ...data
            }
        })

        if (!updatedInstansi) {
            return NextResponse.json({
                "success": false,
                "message": "Id tidak valid, instansi tidak tersedia",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": true,
            "message": "data instansi berhasil diperbaru",
            "data": updatedInstansi
        })
    } catch (err) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (err as Error).message
        }, { status: 500 })
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: {
        params: Promise<{ id: string }>;
    }) {
    try {
        const instansiId = (await params).id;
        const deletedInstansi = await prisma.instansi.delete({
            where: {
                id: Number(instansiId)
            }
        })

        if (!deletedInstansi) {
            return NextResponse.json({
                "success": false,
                "message": "Id tidak valid, instansi tidak tersedia",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": true,
            "message": "data instansi berhasil diperbaru"
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (err as Error).message
        }, { status: 500 })
    }
}