"use client";

import React from "react";

export type FileItem = {
  id: string;
  name: string;
  type: "IMAGE" | "VIDEO";
  size: string;
  linkedScreens: number;
  linkedPlaylists: number;
  thumbnail: string;
};

interface Props {
  files: FileItem[];
}

const FilesTable: React.FC<Props> = ({ files }) => {
  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden w-full md:block bg-white   overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
            <tr>
              <th className="text-left px-6 py-4">File</th>
              <th className="text-left px-6 py-4">Type</th>
              <th className="text-left px-6 py-4">Size</th>
              <th className="text-left px-6 py-4">Linked</th>
              <th className="text-right px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {files.map((file) => (
              <tr key={file.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 flex items-center gap-4">
                  <img
                    src={file.thumbnail}
                    alt={file.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {file.name}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {file.type}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {file.size}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  Screens: {file.linkedScreens} <br />
                  Playlists: {file.linkedPlaylists}
                </td>

                <td className="px-6 py-4 text-right space-x-2">
                  <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                    View
                  </button>
                  <button className="px-4 py-2 text-sm bg-red-500 text-white hover:bg-red-600 rounded-lg transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={file.thumbnail}
                alt={file.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  {file.name}
                </p>
                <p className="text-sm text-gray-500">
                  {file.type} • {file.size}
                </p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p>Screens Linked: {file.linkedScreens}</p>
              <p>Playlists Linked: {file.linkedPlaylists}</p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition">
                View
              </button>
              <button className="flex-1 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilesTable;