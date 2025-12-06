import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename to prevent overwrites
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name}`;
    
    // Save to uploads directory that will be mounted as volume
    // Use /app/uploads for Docker volume persistence
    const uploadDir = process.env.UPLOAD_DIR || join(process.cwd(), 'public', 'uploads');
    const filepath = join(uploadDir, filename);

    // Write the file
    await writeFile(filepath, buffer);

    // Return success response with file info
    return NextResponse.json({
      success: true,
      filename: filename,
      originalName: file.name,
      size: file.size,
      type: file.type,
      url: `/uploads/${filename}` // Public URL to access the file
    });

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}