"use client";
import { Button } from "./Button";
import { Card } from "./Card";
import { Upload, FolderOpen } from "lucide-react";

export default function MyFilesPage() {
  const files = []; // empty state

  return (
    <div className="min-h-screen bg-gray-50 p-6">
     
      {/* Content */}
      {files.length === 0 ? (
        <Card className="rounded-3xl border-dashed border-2 border-gray-200 bg-white">
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
            <div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg transition-transform duration-300 ease-out hover:scale-105"
            >
              <FolderOpen className="w-8 h-8" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              No files uploaded yet
            </h3>
            <p className="mt-2 text-sm text-gray-500 max-w-sm">
              Upload images and videos to start creating playlists for your
              digital signage screens.
            </p>

            <Button className="mt-6 rounded-xl px-6">
              <Upload className="w-4 h-4 mr-2" />
              Upload your first file
            </Button>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Files grid goes here */}
        </div>
      )}
    </div>
  );
}
