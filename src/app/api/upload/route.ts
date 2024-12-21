// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Tentukan tipe file yang diizinkan
const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp'
];

// Maksimum ukuran file (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: { message: 'No file received' } },
        { status: 400 }
      );
    }

    // Validasi tipe file
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: { message: 'File type not allowed' } },
        { status: 400 }
      );
    }

    // Validasi ukuran file
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: { message: 'File size exceeds 5MB limit' } },
        { status: 400 }
      );
    }

    // Buat direktori uploads jika belum ada
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Buat nama file unik
    const fileExtension = file.name.split('.').pop();
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}.${fileExtension}`;
    const filepath = join(uploadDir, filename);

    // Convert file ke buffer dan simpan
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filepath, buffer);

    // Kembalikan URL file
    return NextResponse.json({
      uploaded: true,
      url: `/uploads/${filename}`
    });

  } catch (error) {
    console.error('Upload error:', error);
    
    // Handle specific errors
    if (error instanceof Error) {
      if (error.message.includes('permission denied')) {
        return NextResponse.json(
          { error: { message: 'Permission denied when saving file' } },
          { status: 500 }
        );
      }
      
      if (error.message.includes('disk full')) {
        return NextResponse.json(
          { error: { message: 'Server storage is full' } },
          { status: 500 }
        );
      }
    }

    // Generic error
    return NextResponse.json(
      { error: { message: 'Failed to upload file' } },
      { status: 500 }
    );
  }
}