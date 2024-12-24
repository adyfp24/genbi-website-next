import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    try {
        const data: RegisterRequest = await req.json();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = await prisma?.user.create({
            data: {
                ...data,
                password: hashedPassword
            }
        })

        return NextResponse.json({
            "success": true,
            "message": "user baru berhasil terdaftar",
            "data": newUser
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error": (error as Error).message
        }, { status: 500 })
    }
}
