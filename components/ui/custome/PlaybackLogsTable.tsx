"use client";

import React from "react";

export type PlaybackLog = {
  id: string;
  filename: string;
  playlist: string;
  startTime: string;
  endTime: string;
  duration: string;
};

interface Props {
  logs: PlaybackLog[];
}

const PlaybackLogsTable: React.FC<Props> = ({ logs }) => {
  return (
    <div className="w-full">

      {/* Desktop Table */}

      <div className="hidden md:block bg-white overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
            <tr>
              <th className="text-left px-6 py-4">Resource</th>
              <th className="text-left px-6 py-4">Playlist</th>
              <th className="text-left px-6 py-4">Start Time</th>
              <th className="text-left px-6 py-4">End Time</th>
              <th className="text-left px-6 py-4">Duration</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {logs.map((log) => (

              <tr
                key={log.id}
                className="hover:bg-gray-50 transition"
              >

                <td className="px-6 py-4 font-medium text-gray-800">
                  {log.filename}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {log.playlist}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {log.startTime}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {log.endTime}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {log.duration}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>



      {/* Mobile Card Layout */}

      <div className="md:hidden space-y-4">

        {logs.map((log) => (

          <div
            key={log.id}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
          >

            <p className="font-semibold text-gray-800">
              {log.filename}
            </p>

            <p className="text-sm text-gray-500">
              Playlist: {log.playlist}
            </p>

            <div className="mt-3 text-sm text-gray-600 space-y-1">

              <p>
                <span className="font-medium">Start:</span> {log.startTime}
              </p>

              <p>
                <span className="font-medium">End:</span> {log.endTime}
              </p>

              <p>
                <span className="font-medium">Duration:</span> {log.duration}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default PlaybackLogsTable;