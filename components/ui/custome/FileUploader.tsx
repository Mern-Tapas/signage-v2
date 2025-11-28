import React, { useState, ChangeEvent, DragEvent } from 'react';
import { Upload, X, FileVideo, FileImage, File, Check } from 'lucide-react';

interface UploadedFile {
    id: string;
    name: string;
    size: string;
    type: 'image' | 'video' | 'file';
    file: File;
    preview: string | null;
    uploading: boolean;
    progress: number;
}

const FileUploadLayout: React.FC = () => {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    };

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>): void => {
        const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
        handleFiles(selectedFiles);
    };

    const handleFiles = (newFiles: File[]): void => {
        const processedFiles: UploadedFile[] = newFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            size: formatFileSize(file.size),
            type: getFileType(file.type),
            file: file,
            preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
            uploading: true,
            progress: 0
        }));

        setFiles(prev => [...prev, ...processedFiles]);

        // Simulate upload progress
        processedFiles.forEach(file => {
            simulateUpload(file.id);
        });
    };

    const simulateUpload = (fileId: string): void => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setFiles(prev => prev.map(f =>
                    f.id === fileId ? { ...f, uploading: false, progress: 100 } : f
                ));
            } else {
                setFiles(prev => prev.map(f =>
                    f.id === fileId ? { ...f, progress: Math.min(progress, 100) } : f
                ));
            }
        }, 500);
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    const getFileType = (mimeType: string): 'image' | 'video' | 'file' => {
        if (mimeType.startsWith('image/')) return 'image';
        if (mimeType.startsWith('video/')) return 'video';
        return 'file';
    };

    const removeFile = (fileId: string): void => {
        setFiles(prev => prev.filter(f => f.id !== fileId));
    };

    const FileIcon: React.FC<{ type: 'image' | 'video' | 'file' }> = ({ type }) => {
        switch (type) {
            case 'video':
                return <FileVideo className="w-5 h-5 text-blue-600" />;
            case 'image':
                return <FileImage className="w-5 h-5 text-green-600" />;
            default:
                return <File className="w-5 h-5 text-gray-600" />;
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Files</h1>
                <p className="text-gray-600 mb-8">Upload your images and videos</p>

                {/* Drop Zone */}
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${isDragging
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                >
                    <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isDragging ? 'bg-blue-100' : 'bg-gray-100'
                            }`}>
                            <Upload className={`w-8 h-8 ${isDragging ? 'text-blue-600' : 'text-gray-600'}`} />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {isDragging ? 'Drop files here' : 'Drag & drop files here'}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                            or click to browse from your computer
                        </p>

                        <label className="cursor-pointer">
                            <input
                                type="file"
                                multiple
                                accept="image/*,video/*"
                                onChange={handleFileInput}
                                className="hidden"
                            />
                            <span className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Browse Files
                            </span>
                        </label>

                        <p className="text-xs text-gray-400 mt-4">
                            Supports: JPG, PNG, GIF, MP4, MOV (Max 100MB)
                        </p>
                    </div>
                </div>

                {/* Uploaded Files List */}
                {files.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">
                            Uploaded Files ({files.length})
                        </h2>

                        <div className="space-y-3">
                            {files.map((file) => (
                                <div
                                    key={file.id}
                                    className="bg-white rounded-lg p-4 border border-gray-200"
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Preview/Icon */}
                                        <div className="flex-shrink-0">
                                            {file.preview ? (
                                                <img
                                                    src={file.preview}
                                                    alt={file.name}
                                                    className="w-12 h-12 rounded object-cover"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center">
                                                    <FileIcon type={file.type} />
                                                </div>
                                            )}
                                        </div>

                                        {/* File Info */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium text-gray-900 truncate">
                                                {file.name}
                                            </h3>
                                            <p className="text-xs text-gray-500">{file.size}</p>

                                            {/* Progress Bar */}
                                            {file.uploading && (
                                                <div className="mt-2">
                                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                        <div
                                                            className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                                                            style={{ width: `${file.progress}%` }}
                                                        />
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        Uploading... {Math.round(file.progress)}%
                                                    </p>
                                                </div>
                                            )}

                                            {!file.uploading && (
                                                <div className="flex items-center gap-1 mt-1">
                                                    <Check className="w-3 h-3 text-green-600" />
                                                    <span className="text-xs text-green-600">Uploaded</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeFile(file.id)}
                                            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-6">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                Upload All
                            </button>
                            <button
                                onClick={() => setFiles([])}
                                className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-gray-300"
                            >
                                Clear All
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUploadLayout;