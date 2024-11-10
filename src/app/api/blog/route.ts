import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const allBlog = await prisma.blog.findMany({
            include:{
                Category:true,
                BlogKeyword: {
                    include:{
                        Keyword: true
                    }
                }
            }
        });
        if (allBlog.length === 0) {
            return NextResponse.json({
                "success": true,
                "message": "data blog belum tersedia",
                "data": null
            }, { status: 200 })
        }
        return NextResponse.json({
            "success": true,
            "message": "data blog berhasil didapatkan",
            "data": allBlog
        })
    } catch (error) {
        return NextResponse.json({
            "success": false,
            "message": "internal server error",
            "error" : (error as Error).message
        })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { title, caption, content, categoryId, keywords } = await req.json();
        const bannerImg = 'statis-sementara.jpg'
        const result = await prisma.$transaction(async (prisma) => {
            
            const newBlog = await prisma.blog.create({
                data: {
                    title,
                    caption,
                    content,
                    bannerImg,
                    categoryId,
                },
            });

            const keywordIds = await Promise.all(
                keywords.map(async (keyword: string) => {
                    let existingKeyword = await prisma.keyword.findFirst({
                        where: { name: keyword },
                    });

                    if (!existingKeyword) {
                        existingKeyword = await prisma.keyword.create({
                            data: { name: keyword },
                        });
                    };
                    return existingKeyword.id;
                })
            );

            await prisma.blogKeyword.createMany({
                data: keywordIds.map((keywordId) => ({
                    blogId: newBlog.id,
                    keywordId: keywordId,
                })),
            });

            return newBlog; 
        });

        return NextResponse.json(
            {
                success: true,
                message: "New blog successfully created",
                data: result,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
                error: (error as Error).message,
            },
            { status: 500 }
        );
    }
}
