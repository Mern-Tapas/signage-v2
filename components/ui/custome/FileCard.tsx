'use client'
import React, { useState } from 'react';
import { FileText, Image, Film, Music, Archive, File, Download, Trash2, Share2, Eye, MoreVertical } from 'lucide-react';

interface FileCardProps {
  fileName: string;
  fileType: string;
  fileSize: string;
  uploadDate: string;
  previewUrl?: string;
  onDownload?: () => void;
  onDelete?: () => void;
  onShare?: () => void;
  onPreview?: () => void;
}

export const FileCard: React.FC<FileCardProps> = ({
  fileName,
  fileType,
  fileSize,
  uploadDate,
  previewUrl,
  onDownload,
  onDelete,
  onShare,
  onPreview,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const getFileIcon = () => {
    const type = fileType.toLowerCase();
    if (type.includes('image') || ['jpg', 'png', 'gif', 'svg', 'jpeg'].includes(type)) {
      return <Image className="w-8 h-8" />;
    } else if (type.includes('video') || ['mp4', 'avi', 'mov'].includes(type)) {
      return <Film className="w-8 h-8" />;
    } else if (type.includes('audio') || ['mp3', 'wav', 'ogg'].includes(type)) {
      return <Music className="w-8 h-8" />;
    } else if (['zip', 'rar', '7z', 'tar'].includes(type)) {
      return <Archive className="w-8 h-8" />;
    } else if (['pdf', 'doc', 'docx', 'txt'].includes(type)) {
      return <FileText className="w-8 h-8" />;
    }
    return <File className="w-8 h-8" />;
  };

  const getFileColor = () => {
    const type = fileType.toLowerCase();
    if (type.includes('image') || ['jpg', 'png', 'gif', 'svg', 'jpeg'].includes(type)) {
      return 'bg-blue-500';
    } else if (type.includes('video') || ['mp4', 'avi', 'mov'].includes(type)) {
      return 'bg-purple-500';
    } else if (type.includes('audio') || ['mp3', 'wav', 'ogg'].includes(type)) {
      return 'bg-pink-500';
    } else if (['zip', 'rar', '7z', 'tar'].includes(type)) {
      return 'bg-yellow-500';
    } else if (['pdf', 'doc', 'docx', 'txt'].includes(type)) {
      return 'bg-red-500';
    }
    return 'bg-gray-500';
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Preview Section */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt={fileName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`${getFileColor()} rounded-2xl p-6 text-white group-hover:scale-110 transition-transform duration-300`}>
            {getFileIcon()}
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={onPreview}
            className="bg-white text-gray-900 rounded-full p-3 hover:bg-gray-100 transition-colors transform scale-90 hover:scale-100"
            aria-label="Preview file"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* File Type Badge */}
        <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
          {fileType.toUpperCase()}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate mb-1 group-hover:text-blue-600 transition-colors">
          {fileName}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{fileSize}</span>
          <span>{uploadDate}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onDownload}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          
          <button
            onClick={onShare}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg p-2 transition-colors"
            aria-label="Share file"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg p-2 transition-colors"
              aria-label="More options"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10 min-w-[120px]">
                <button
                  onClick={() => {
                    onDelete?.();
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};