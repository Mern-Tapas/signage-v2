import { useState, useRef } from 'react';
import { Upload, X, File, CheckCircle, AlertCircle, Pause, Play, RotateCcw } from 'lucide-react';

interface FileData {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: 'pending' | 'uploading' | 'paused' | 'completed' | 'error';
  error?: string;
  uploadedChunks: number;
  totalChunks: number;
  abortController?: AbortController;
}

export default function FileUploadUI() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Configuration
  const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB chunks
  const MAX_FILE_SIZE = 5 * 1024 * 1024 * 1024; // 5GB max file size
  const MAX_CONCURRENT_UPLOADS = 3;

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
    const filesWithMetadata: FileData[] = newFiles
      .filter(file => {
        if (file.size > MAX_FILE_SIZE) {
          alert(`File "${file.name}" is too large. Maximum size is ${formatFileSize(MAX_FILE_SIZE)}`);
          return false;
        }
        return true;
      })
      .map(file => {
        const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
        return {
          id: Math.random().toString(36).substr(2, 9),
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          progress: 0,
          status: 'pending' as const,
          uploadedChunks: 0,
          totalChunks,
        };
      });

    setFiles(prev => [...prev, ...filesWithMetadata]);
  };

  const removeFile = (fileId: string) => {
    const file = files.find(f => f.id === fileId);
    if (file?.abortController) {
      file.abortController.abort();
    }
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Chunked upload with resume capability
  const uploadFileInChunks = async (fileData: FileData): Promise<boolean> => {
    const { file, id, uploadedChunks, totalChunks } = fileData;
    const abortController = new AbortController();

    // Store abort controller for pause/cancel functionality
    setFiles(prev =>
      prev.map(f =>
        f.id === id ? { ...f, abortController, status: 'uploading' } : f
      )
    );

    try {
      // Start from the last uploaded chunk (for resume functionality)
      for (let chunkIndex = uploadedChunks; chunkIndex < totalChunks; chunkIndex++) {
        // Check if upload was paused or cancelled
        if (abortController.signal.aborted) {
          return false;
        }

        const start = chunkIndex * CHUNK_SIZE;
        const end = Math.min(start + CHUNK_SIZE, file.size);
        const chunk = file.slice(start, end);

        const formData = new FormData();
        formData.append('chunk', chunk);
        formData.append('chunkIndex', chunkIndex.toString());
        formData.append('totalChunks', totalChunks.toString());
        formData.append('fileName', file.name);
        formData.append('fileId', id);

        // Simulated upload for demo - replace with actual fetch in production
        await uploadChunk(formData, abortController.signal);

        // Update progress
        const progress = Math.round(((chunkIndex + 1) / totalChunks) * 100);
        setFiles(prev =>
          prev.map(f =>
            f.id === id
              ? { ...f, progress, uploadedChunks: chunkIndex + 1 }
              : f
          )
        );
      }

      // Mark as completed
      setFiles(prev =>
        prev.map(f =>
          f.id === id
            ? { ...f, status: 'completed', progress: 100 }
            : f
        )
      );

      return true;
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        // Upload was paused
        return false;
      }

      setFiles(prev =>
        prev.map(f =>
          f.id === id
            ? { ...f, status: 'error', error: 'Upload failed' }
            : f
        )
      );
      return false;
    }
  };

  // Simulated chunk upload - replace with actual API call in production
  // const simulateChunkUpload = (formData: FormData, signal: AbortSignal): Promise<void> => {
  //   return new Promise((resolve, reject) => {
  //     const timeout = setTimeout(() => {
  //       if (signal.aborted) {
  //         reject(new Error('AbortError'));
  //       } else {
  //         resolve();
  //       }
  //     }, 200 + Math.random() * 300); // Random delay 200-500ms

  //     signal.addEventListener('abort', () => {
  //       clearTimeout(timeout);
  //       reject(new Error('AbortError'));
  //     });
  //   });
  // };

  /* Production implementation example:*/
  const uploadChunk = async (formData: FormData, signal: AbortSignal): Promise<void> => {
    const response = await fetch('/api/user/files/upload', {
      method: 'POST',
      body: formData,
      signal,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }
  };


  const pauseUpload = (fileId: string) => {
    const file = files.find(f => f.id === fileId);
    if (file?.abortController) {
      file.abortController.abort();
    }
    setFiles(prev =>
      prev.map(f =>
        f.id === fileId ? { ...f, status: 'paused', abortController: undefined } : f
      )
    );
  };

  const resumeUpload = async (fileId: string) => {
    const fileData = files.find(f => f.id === fileId);
    if (fileData) {
      await uploadFileInChunks(fileData);
    }
  };

  const retryUpload = async (fileId: string) => {
    setFiles(prev =>
      prev.map(f =>
        f.id === fileId
          ? { ...f, status: 'pending', progress: 0, uploadedChunks: 0, error: undefined }
          : f
      )
    );

    const fileData = files.find(f => f.id === fileId);
    if (fileData) {
      await uploadFileInChunks({ ...fileData, uploadedChunks: 0, progress: 0 });
    }
  };

  const handleUploadAll = async () => {
    const pendingFiles = files.filter(f => f.status === 'pending');

    // Upload files with concurrency limit
    for (let i = 0; i < pendingFiles.length; i += MAX_CONCURRENT_UPLOADS) {
      const batch = pendingFiles.slice(i, i + MAX_CONCURRENT_UPLOADS);
      await Promise.all(batch.map(fileData => uploadFileInChunks(fileData)));
    }
  };

  const hasPendingFiles = files.some(f => f.status === 'pending');
  const hasUploadingFiles = files.some(f => f.status === 'uploading');

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Upload Files</h1>
          {/* <p className="text-slate-600">Chunked uploads with pause/resume support</p> */}
          <div className="mt-2 text-sm text-slate-500">
            Max file size: {formatFileSize(MAX_FILE_SIZE)} • Chunk size: {formatFileSize(CHUNK_SIZE)}
          </div>
        </div>

        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 ${isDragging
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
                Files ({files.length})
              </h2>
              <button
                onClick={handleUploadAll}
                disabled={!hasPendingFiles || hasUploadingFiles}
                className={`px-6 py-2 rounded-lg transition-colors font-medium ${hasPendingFiles && !hasUploadingFiles
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }`}
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
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center flex-1 min-w-0">
                      <File className="text-slate-400 flex-shrink-0 mr-3" size={24} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-800 truncate">{fileData.name}</p>
                        <p className="text-sm text-slate-500">
                          {formatFileSize(fileData.size)}
                          {fileData.totalChunks > 1 && (
                            <span className="ml-2">
                              • {fileData.uploadedChunks}/{fileData.totalChunks} chunks
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      {fileData.status === 'completed' && (
                        <CheckCircle className="text-green-500" size={20} />
                      )}
                      {fileData.status === 'error' && (
                        <button
                          onClick={() => retryUpload(fileData.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                          title="Retry upload"
                        >
                          <RotateCcw size={20} />
                        </button>
                      )}
                      {fileData.status === 'uploading' && (
                        <button
                          onClick={() => pauseUpload(fileData.id)}
                          className="text-blue-500 hover:text-blue-600 transition-colors"
                          title="Pause upload"
                        >
                          <Pause size={20} />
                        </button>
                      )}
                      {fileData.status === 'paused' && (
                        <button
                          onClick={() => resumeUpload(fileData.id)}
                          className="text-green-500 hover:text-green-600 transition-colors"
                          title="Resume upload"
                        >
                          <Play size={20} />
                        </button>
                      )}
                      <button
                        onClick={() => removeFile(fileData.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        disabled={fileData.status === 'uploading'}
                        title="Remove file"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {fileData.status !== 'pending' && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-slate-600">
                          {fileData.status === 'uploading' && `Uploading... ${fileData.progress}%`}
                          {fileData.status === 'paused' && `Paused at ${fileData.progress}%`}
                          {fileData.status === 'completed' && 'Upload complete'}
                          {fileData.status === 'error' && (fileData.error || 'Upload failed')}
                        </span>
                        {fileData.status === 'uploading' && (
                          <span className="text-xs text-slate-500">
                            {formatFileSize(fileData.uploadedChunks * CHUNK_SIZE)} / {formatFileSize(fileData.size)}
                          </span>
                        )}
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${fileData.status === 'completed'
                            ? 'bg-green-500'
                            : fileData.status === 'error'
                              ? 'bg-red-500'
                              : fileData.status === 'paused'
                                ? 'bg-yellow-500'
                                : 'bg-blue-500'
                            }`}
                          style={{ width: `${fileData.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Information Panel */}
        {/* <div className="mt-8 space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Features:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Chunked uploads for files of any size</li>
              <li>✓ Pause and resume capability</li>
              <li>✓ Retry failed uploads</li>
              <li>✓ Concurrent upload limit ({MAX_CONCURRENT_UPLOADS} files at once)</li>
              <li>✓ Progress tracking per chunk</li>
              <li>✓ File size validation</li>
            </ul>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-semibold text-amber-900 mb-2">Server Implementation Required:</h3>
            <pre className="text-xs text-amber-800 bg-amber-100 p-3 rounded overflow-x-auto">
              {`// POST /api/upload-chunk
// Required fields in FormData:
// - chunk: File blob
// - chunkIndex: number
// - totalChunks: number
// - fileName: string
// - fileId: string (unique identifier)

// Server should:
// 1. Store chunks temporarily
// 2. When all chunks received, merge them
// 3. Save final file
// 4. Clean up temporary chunks`}
            </pre>
          </div>
        </div> */}
      </div>
    </div>
  );
}