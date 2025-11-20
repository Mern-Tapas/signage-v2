'use client'
import React, { JSX, useState } from "react";
import {
    File,
    Folder,
    Image,
    Video,
    Music,
    FileText,
    Archive,
    Code,
    MoreVertical,
    Download,
    Trash2,
    Edit,
    Share2,
    Clock,
} from "lucide-react";

type FileType =
    | "document"
    | "folder"
    | "image"
    | "video"
    | "audio"
    | "pdf"
    | "archive"
    | "code"
    | "other";

interface FileItem {
    id: number;
    name: string;
    type: FileType;
    size: string;
    modified: string;
    selected: boolean;
}

type ViewMode = "list" | "grid";
type SortBy = "name" | "size" | "modified";

export default function UserFiles(): JSX.Element {
    const [files, setFiles] = useState<FileItem[]>([
        { id: 1, name: "Project Presentation.pptx", type: "document", size: "2.4 MB", modified: "2 hours ago", selected: false },
        { id: 2, name: "Summer Vacation", type: "folder", size: "15 items", modified: "1 day ago", selected: false },
        { id: 3, name: "Profile Picture.jpg", type: "image", size: "1.2 MB", modified: "3 days ago", selected: false },
        { id: 4, name: "Demo Video.mp4", type: "video", size: "45.8 MB", modified: "5 days ago", selected: false },
        { id: 5, name: "Background Music.mp3", type: "audio", size: "3.5 MB", modified: "1 week ago", selected: false },
        { id: 6, name: "Report.pdf", type: "pdf", size: "856 KB", modified: "2 weeks ago", selected: false },
        { id: 7, name: "Archive.zip", type: "archive", size: "12.3 MB", modified: "3 weeks ago", selected: false },
        { id: 8, name: "index.js", type: "code", size: "4.2 KB", modified: "1 month ago", selected: false },
    ]);

    const [viewMode, setViewMode] = useState<ViewMode>("list");
    const [sortBy, setSortBy] = useState<SortBy>("name");
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const getFileIcon = (type: FileType): JSX.Element => {
        const iconProps = { size: 20, strokeWidth: 2 } as const;
        switch (type) {
            case "folder":
                return <Folder {...iconProps} className="text-yellow-500" />;
            case "image":
                return <Image {...iconProps} className="text-purple-500" />;
            case "video":
                return <Video {...iconProps} className="text-red-500" />;
            case "audio":
                return <Music {...iconProps} className="text-green-500" />;
            case "pdf":
                return <FileText {...iconProps} className="text-red-600" />;
            case "archive":
                return <Archive {...iconProps} className="text-orange-500" />;
            case "code":
                return <Code {...iconProps} className="text-blue-500" />;
            default:
                return <File {...iconProps} className="text-gray-500" />;
        }
    };

    const toggleSelection = (id: number) => {
        setFiles((prev) => prev.map((file) => (file.id === id ? { ...file, selected: !file.selected } : file)));
    };

    const toggleSelectAll = () => {
        setFiles((prev) => {
            const allSelected = prev.every((file) => file.selected);
            return prev.map((file) => ({ ...file, selected: !allSelected }));
        });
    };

    const deleteFile = (id: number) => {
        setFiles((prev) => prev.filter((file) => file.id !== id));
        setActiveMenu(null);
    };

    const selectedCount = files.filter((f) => f.selected).length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">My Files</h1>
                            <p className="text-gray-500 mt-1">{files.length} items • {selectedCount} selected</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                                Upload Files
                            </button>
                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
                                New Folder
                            </button>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <button onClick={toggleSelectAll} className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
                                {files.every((f) => f.selected) ? "Deselect All" : "Select All"}
                            </button>

                            {selectedCount > 0 && (
                                <button className="px-3 py-2 text-sm bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all">
                                    Delete Selected ({selectedCount})
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <select
                                value={sortBy}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as SortBy)}
                                className="px-3 py-2 text-sm bg-gray-100 rounded-lg border-none outline-none cursor-pointer"
                            >
                                <option value="name">Sort by Name</option>
                                <option value="size">Sort by Size</option>
                                <option value="modified">Sort by Modified</option>
                            </select>

                            <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                                <button onClick={() => setViewMode("list")} className={`px-3 py-1 rounded ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}>
                                    List
                                </button>
                                <button onClick={() => setViewMode("grid")} className={`px-3 py-1 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}>
                                    Grid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* File List */}
                {viewMode === "list" ? (
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 w-12"></th>
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Name</th>
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Size</th>
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Modified</th>
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 w-12"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file) => (
                                    <tr key={file.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${file.selected ? "bg-blue-50" : ""}`}>
                                        <td className="py-4 px-6">
                                            <input type="checkbox" checked={file.selected} onChange={() => toggleSelection(file.id)} className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    {getFileIcon(file.type)}
                                                </div>
                                                <span className="font-medium text-gray-900">{file.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-gray-600 text-sm">{file.size}</td>
                                        <td className="py-4 px-6 text-gray-600 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} />
                                                {file.modified}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 relative">
                                            <button onClick={() => setActiveMenu(activeMenu === file.id ? null : file.id)} className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                                                <MoreVertical size={18} className="text-gray-600" />
                                            </button>

                                            {activeMenu === file.id && (
                                                <div className="absolute right-12 top-8 bg-white shadow-lg rounded-lg py-2 z-10 w-48 border border-gray-200">
                                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm">
                                                        <Download size={16} /> Download
                                                    </button>
                                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm">
                                                        <Share2 size={16} /> Share
                                                    </button>
                                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm">
                                                        <Edit size={16} /> Rename
                                                    </button>
                                                    <button onClick={() => deleteFile(file.id)} className="w-full px-4 py-2 text-left hover:bg-red-50 flex items-center gap-3 text-sm text-red-600">
                                                        <Trash2 size={16} /> Delete
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {files.map((file) => (
                            <div key={file.id} className={`bg-white rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer ${file.selected ? "ring-2 ring-blue-500" : ""}`} onClick={() => toggleSelection(file.id)}>
                                <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3">
                                    {getFileIcon(file.type)}
                                </div>
                                <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">{file.name}</h3>
                                <p className="text-xs text-gray-500">{file.size}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Storage Info */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Storage Used</span>
                        <span className="text-sm text-gray-600">68.2 GB of 100 GB</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600" style={{ width: "68.2%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
