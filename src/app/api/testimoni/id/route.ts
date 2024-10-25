import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const testimoni = await prisma.testimoni.findFirst({
            where: {
                id: Number(params.id)
            }
        })

        if (!testimoni) {
            return NextResponse.json({
                "success": false,
                "message": "data testimmoni tidak ditemukan",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": true,
            "message": "data testimoni berhasil didapatkan",
            "data": testimoni
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            "succes": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const data: TestimoniUpdateRequest = await req.json();
        const updatedTestimoni = await prisma.testimoni.update({
            where: {
                id: Number(params.id)
            },
            data: {
                ...data
            }
        })

        if (!updatedTestimoni) {
            return NextResponse.json({
                "success": false,
                "message": "data testimoni tidak ditemukan / tidak berhasil diperbarui",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": false,
            "message": "data testimoni tidak ditemukan / tidak berhasil diperbarui",
            "data": updatedTestimoni
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await prisma.testimoni.delete({
            where: {
                id: Number(params.id)
            }
        })

        return NextResponse.json({
            "success": true,
            "message": "data testimoni berhasil dihapus",
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "data testimoni tidak ditemukan / tidak berhasil di hapus",
            "error": (error as Error).message
        }, { status: 500 });
    }
}