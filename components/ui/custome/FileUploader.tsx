'use client';

import { useState, useRef } from 'react';
import { Upload, X, File } from 'lucide-react';

interface FileData {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
}

export default function FileUploadUI() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);
    }
  };

  const addFiles = (newFiles: File[]) => {
    const filesWithMetadata: FileData[] = newFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      name: file.name,
      size: file.size,
      type: file.type
    }));
    
    setFiles(prev => [...prev, ...filesWithMetadata]);
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach(fileData => {
      formData.append('files', fileData.file);
    });

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Upload successful:', result);
        setFiles([]);
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className=" to-slate-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">File Upload</h1>
        <p className="text-slate-600 mb-8">Upload your files with drag and drop</p>

        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 ${
            isDragging
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-300 bg-white hover:border-slate-400'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileInput}
            className="hidden"
          />
          
          <Upload className={`mx-auto mb-4 ${isDragging ? 'text-blue-500' : 'text-slate-400'}`} size={48} />
          
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            {isDragging ? 'Drop files here' : 'Drag and drop files here'}
          </h3>
          
          <p className="text-slate-500 mb-4">or</p>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Browse Files
          </button>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">
                Selected Files ({files.length})
              </h2>
              <button
                onClick={handleUpload}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Upload All
              </button>
            </div>
            
            <div className="space-y-3">
              {files.map(fileData => (
                <div
                  key={fileData.id}
                  className="bg-white rounded-lg p-4 shadow-sm border border-slate-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center flex-1 min-w-0">
                      <File className="text-slate-400 flex-shrink-0 mr-3" size={24} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-800 truncate">{fileData.name}</p>
                        <p className="text-sm text-slate-500">{formatFileSize(fileData.size)}</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeFile(fileData.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors ml-4"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}