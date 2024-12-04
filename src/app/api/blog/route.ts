import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const allBlog = await prisma.blog.findMany({
            include: {
                Category: true,
                BlogKeyword: {
                    include: {
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
            "error": (error as Error).message
        })
    }
}


export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const title = formData.get("title") as string;
        const caption = formData.get("caption") as string;
        const content = formData.get("content") as string;
        const categoryId = parseInt(formData.get("categoryId") as string);
        const keywords = JSON.parse(formData.get("keywords") as string) as string[];
        const file = formData.get("bannerImg");

        if (!file || typeof file === "string" || !(file instanceof File)) {
            return NextResponse.json({ error: "No valid file received." }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
        const filePath = path.join("public", "images", "blog", filename);
        await writeFile(path.join(process.cwd(), filePath), buffer);

        const result = await prisma.$transaction(async (prisma) => {
            const newBlog = await prisma.blog.create({
                data: {
                    title,
                    caption,
                    content,
                    bannerImg: `/images/blog/${filename}`,
                    categoryId,
                },
            });

            const keywordIds = await Promise.all(
                keywords.map(async (keyword) => {
                    let existingKeyword = await prisma.keyword.findFirst({
                        where: { name: keyword },
                    });

                    if (!existingKeyword) {
                        existingKeyword = await prisma.keyword.create({
                            data: { name: keyword },
                        });
                    }
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
