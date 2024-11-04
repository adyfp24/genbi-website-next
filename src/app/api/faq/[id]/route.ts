import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const faq = await prisma.fAQ.findFirst({
            where: {
                id: Number(params.id)
            }
        })

        if (!faq) {
            return NextResponse.json({
                "success": false,
                "message": "data FAQ tidak ditemukan",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": true,
            "message": "data FAQ berhasil didapatkan",
            "data": faq
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
        const data: FaqUpdateRequest = await req.json();
        const updatedFaq = await prisma.fAQ.update({
            where: {
                id: Number(params.id)
            },
            data: {
                ...data
            }
        })

        if (!updatedFaq) {
            return NextResponse.json({
                "success": false,
                "message": "data FAQ tidak ditemukan / tidak berhasil diperbarui",
            }, { status: 404 })
        }

        return NextResponse.json({
            "success": false,
            "message": "data FAQ berhasil diperbarui",
            "data": updatedFaq
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
        await prisma.fAQ.delete({
            where: {
                id: Number(params.id)
            }
        })

        return NextResponse.json({
            "success": true,
            "message": "data FAQ berhasil dihapus",
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "data FAQ tidak ditemukan / tidak berhasil di hapus",
            "error": (error as Error).message
        }, { status: 500 });
    }
}