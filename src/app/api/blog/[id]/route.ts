import { NextRequest } from 'next/server';
import prisma from "@/lib/prisma";

export async function GET(
 req: NextRequest,
 {params}: { 
    params: Promise<{ id: string }>;
 }) {
 try {
   const id  = (await params).id;
   const blog = await prisma.blog.findFirst({
     where: { slug: id }
   });

   if (!blog) {
     return Response.json({
       success: false,
       message: "Data blog tidak ditemukan",
       data: null
     });
   }

   return Response.json({
     success: true, 
     message: "Data blog ditemukan",
     data: blog
   });
 } catch (error) {
   return Response.json(
     { success: false, message: `Internal server error: ${error}` },
     { status: 500 }
   );
 }
} 