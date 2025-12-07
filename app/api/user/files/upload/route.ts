// ============================================
// File: app/api/user/files/upload/route.ts
// Next.js App Router API Route
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, unlink, mkdir, readdir, rmdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Type definitions
interface UploadSession {
  fileName: string;
  totalChunks: number;
  receivedChunks: Set<number>;
  chunkPaths: Map<number, string>;
  uploadDir: string;
  createdAt: number;
}

// In-memory session storage
// For production, use Redis or a database
const uploadSessions = new Map<string, UploadSession>();

// Configuration
const TEMP_DIR = path.join(process.cwd(), 'uploads', 'temp');
const FINAL_DIR = path.join(process.cwd(), 'uploads', 'files');
const MAX_CHUNK_SIZE = 10 * 1024 * 1024; // 10MB
const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

// Disable body parser for this route
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to ensure directories exist
async function ensureDirectories() {
  try {
    await mkdir(TEMP_DIR, { recursive: true });
    await mkdir(FINAL_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating directories:', error);
  }
}

// Helper function to sanitize filename
function sanitizeFileName(fileName: string): string {
  return fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
}

// Helper function to merge chunks
async function mergeChunks(
  chunkPaths: Map<number, string>,
  totalChunks: number,
  outputPath: string
): Promise<void> {
  const chunks: Buffer[] = [];

  // Read all chunks in order
  for (let i = 0; i < totalChunks; i++) {
    const chunkPath = chunkPaths.get(i);
    if (!chunkPath) {
      throw new Error(`Missing chunk ${i}`);
    }
    const chunkData = await readFile(chunkPath);
    chunks.push(chunkData);
  }

  // Merge all chunks into one buffer
  const mergedBuffer = Buffer.concat(chunks);

  // Write merged file
  await writeFile(outputPath, mergedBuffer);
}

// Helper function to cleanup session
async function cleanupSession(fileId: string, session: UploadSession) {
  try {
    // Delete all chunk files
    for (const chunkPath of session.chunkPaths.values()) {
      try {
        await unlink(chunkPath);
      } catch (err) {
        console.error(`Failed to delete chunk: ${chunkPath}`, err);
      }
    }

    // Try to remove session directory
    try {
      const files = await readdir(session.uploadDir);
      if (files.length === 0) {
        await rmdir(session.uploadDir);
      }
    } catch (err) {
      console.error(`Failed to remove session directory: ${session.uploadDir}`, err);
    }

    // Remove from sessions map
    uploadSessions.delete(fileId);
  } catch (error) {
    console.error('Cleanup error:', error);
  }
}

// Background cleanup for expired sessions
async function cleanupExpiredSessions() {
  const now = Date.now();
  
  for (const [fileId, session] of uploadSessions.entries()) {
    if (now - session.createdAt > SESSION_TIMEOUT) {
      console.log(`Cleaning up expired session: ${fileId}`);
      await cleanupSession(fileId, session);
    }
  }
}

// Run cleanup every hour
setInterval(cleanupExpiredSessions, 60 * 60 * 1000);

// POST handler for chunk upload
export async function POST(request: NextRequest) {
  try {
    // Ensure upload directories exist
    await ensureDirectories();

    // Parse form data
    const formData = await request.formData();

    // Extract form fields
    const chunk = formData.get('chunk') as File | null;
    const chunkIndexStr = formData.get('chunkIndex') as string | null;
    const totalChunksStr = formData.get('totalChunks') as string | null;
    const fileName = formData.get('fileName') as string | null;
    const fileId = formData.get('fileId') as string | null;

    // Validate required fields
    if (!chunk || !chunkIndexStr || !totalChunksStr || !fileName || !fileId) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields',
          details: {
            chunk: !!chunk,
            chunkIndex: !!chunkIndexStr,
            totalChunks: !!totalChunksStr,
            fileName: !!fileName,
            fileId: !!fileId,
          }
        },
        { status: 400 }
      );
    }

    const chunkIndex = parseInt(chunkIndexStr);
    const totalChunks = parseInt(totalChunksStr);

    // Validate chunk index and total chunks
    if (isNaN(chunkIndex) || isNaN(totalChunks) || chunkIndex < 0 || chunkIndex >= totalChunks) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid chunk index or total chunks',
          chunkIndex,
          totalChunks,
        },
        { status: 400 }
      );
    }

    // Validate chunk size
    if (chunk.size > MAX_CHUNK_SIZE) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Chunk size exceeds maximum allowed size of ${MAX_CHUNK_SIZE} bytes`,
        },
        { status: 400 }
      );
    }

    // Initialize session if it doesn't exist
    if (!uploadSessions.has(fileId)) {
      const sessionDir = path.join(TEMP_DIR, fileId);
      await mkdir(sessionDir, { recursive: true });

      uploadSessions.set(fileId, {
        fileName,
        totalChunks,
        receivedChunks: new Set(),
        chunkPaths: new Map(),
        uploadDir: sessionDir,
        createdAt: Date.now(),
      });

      console.log(`Created new upload session: ${fileId} for file: ${fileName}`);
    }

    const session = uploadSessions.get(fileId)!;

    // Validate session consistency
    if (session.totalChunks !== totalChunks) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Total chunks mismatch with existing session',
        },
        { status: 400 }
      );
    }

    // Check if this chunk was already uploaded
    if (session.receivedChunks.has(chunkIndex)) {
      console.log(`Chunk ${chunkIndex} already uploaded for ${fileId}, skipping...`);
      
      // Return success but indicate it was already uploaded
      return NextResponse.json({
        success: true,
        message: 'Chunk already uploaded',
        chunkIndex,
        receivedChunks: session.receivedChunks.size,
        totalChunks: session.totalChunks,
        progress: Math.round((session.receivedChunks.size / session.totalChunks) * 100),
      });
    }

    // Save chunk to disk
    const chunkPath = path.join(session.uploadDir, `chunk-${chunkIndex}`);
    const chunkBuffer = Buffer.from(await chunk.arrayBuffer());
    await writeFile(chunkPath, chunkBuffer);

    // Update session
    session.receivedChunks.add(chunkIndex);
    session.chunkPaths.set(chunkIndex, chunkPath);

    const progress = Math.round((session.receivedChunks.size / session.totalChunks) * 100);

    console.log(
      `Received chunk ${chunkIndex + 1}/${totalChunks} (${progress}%) for file: ${fileName} [${fileId}]`
    );

    // Check if all chunks are received
    if (session.receivedChunks.size === session.totalChunks) {
      console.log(`All chunks received for ${fileName}. Starting merge...`);

      // Generate unique filename
      const sanitizedFileName = sanitizeFileName(fileName);
      const timestamp = Date.now();
      const finalFileName = `${timestamp}-${sanitizedFileName}`;
      const finalPath = path.join(FINAL_DIR, finalFileName);

      try {
        // Merge all chunks
        await mergeChunks(session.chunkPaths, session.totalChunks, finalPath);

        console.log(`Successfully merged file: ${finalPath}`);

        // Get file size
        const stats = await readFile(finalPath);
        const fileSize = stats.length;

        // Cleanup session
        await cleanupSession(fileId, session);

        // Return success with file info
        return NextResponse.json({
          success: true,
          message: 'Upload complete',
          file: {
            fileName: finalFileName,
            originalName: fileName,
            path: `/uploads/files/${finalFileName}`,
            size: fileSize,
            uploadedAt: new Date().toISOString(),
          },
          progress: 100,
        });

      } catch (mergeError) {
        console.error('Error merging chunks:', mergeError);
        
        // Cleanup on error
        await cleanupSession(fileId, session);

        return NextResponse.json(
          { 
            success: false, 
            error: 'Failed to merge chunks',
            details: mergeError instanceof Error ? mergeError.message : 'Unknown error',
          },
          { status: 500 }
        );
      }
    }

    // Return progress update
    return NextResponse.json({
      success: true,
      message: 'Chunk received',
      chunkIndex,
      receivedChunks: session.receivedChunks.size,
      totalChunks: session.totalChunks,
      progress,
    });

  } catch (error) {
    console.error('Upload error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// GET handler to check upload status
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('fileId');

    if (!fileId) {
      return NextResponse.json(
        { success: false, error: 'fileId is required' },
        { status: 400 }
      );
    }

    const session = uploadSessions.get(fileId);

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Session not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      fileName: session.fileName,
      totalChunks: session.totalChunks,
      receivedChunks: session.receivedChunks.size,
      progress: Math.round((session.receivedChunks.size / session.totalChunks) * 100),
      missingChunks: Array.from({ length: session.totalChunks }, (_, i) => i)
        .filter(i => !session.receivedChunks.has(i)),
    });

  } catch (error) {
    console.error('Status check error:', error);
    
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE handler to cancel upload
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('fileId');

    if (!fileId) {
      return NextResponse.json(
        { success: false, error: 'fileId is required' },
        { status: 400 }
      );
    }

    const session = uploadSessions.get(fileId);

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Session not found' },
        { status: 404 }
      );
    }

    // Cleanup session
    await cleanupSession(fileId, session);

    console.log(`Upload cancelled for ${fileId}`);

    return NextResponse.json({
      success: true,
      message: 'Upload cancelled and cleaned up',
    });

  } catch (error) {
    console.error('Delete error:', error);
    
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}