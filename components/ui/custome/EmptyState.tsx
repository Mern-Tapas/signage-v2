'use client';

import React, { JSX, useState } from 'react';
import { Plus, Smartphone, Wifi, Settings, Activity } from 'lucide-react';

interface Device {
  id: number;
  name: string;
  type: 'smartphone' | 'tablet' | 'tv';
  status: 'online' | 'offline';
  lastSeen: string;
}

export default function EmpatyState(): JSX.Element {
  const [showAddDevice, setShowAddDevice] = useState<boolean>(false);
  const [devices, setDevices] = useState<Device[]>([]);
  const [deviceName, setDeviceName] = useState<string>('');
  const [deviceType, setDeviceType] = useState<'smartphone' | 'tablet' | 'tv'>('smartphone');

  const handleAddDevice = (): void => {
    if (deviceName.trim()) {
      const newDevice: Device = {
        id: Date.now(),
        name: deviceName,
        type: deviceType,
        status: 'offline',
        lastSeen: 'Never'
      };
      setDevices([...devices, newDevice]);
      setDeviceName('');
      setDeviceType('smartphone');
      setShowAddDevice(false);
    }
  };

  const getDeviceIcon = (type: 'smartphone' | 'tablet' | 'tv'): string => {
    switch(type) {
      case 'tablet':
        return '📱';
      case 'tv':
        return '📺';
      default:
        return '📱';
    }
  };

  const getStatusClass = (status: 'online' | 'offline'): string => {
    return status === 'online' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50">
     

      <main className="max-w-7xl mx-auto px-6 py-12">
        {devices.length === 0 ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center max-w-md">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-2xl opacity-15 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl border border-blue-200">
                    <Smartphone size={48} className="text-blue-600 mx-auto" />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">No devices connected</h2>
              <p className="text-gray-600 mb-8">
                Start by adding your first device. You can connect smartphones, tablets, and displays to manage content remotely.
              </p>
              <button
                onClick={() => setShowAddDevice(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md mb-8"
              >
                <Plus size={20} />
                Add Your First Device
              </button>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left">
                  <div className="flex items-start gap-3">
                    <Wifi size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Real-time Monitoring</h3>
                      <p className="text-gray-600 text-xs mt-1">Track device status and connectivity instantly</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left">
                  <div className="flex items-start gap-3">
                    <Activity size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Performance Insights</h3>
                      <p className="text-gray-600 text-xs mt-1">Monitor battery, storage, and health metrics</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left">
                  <div className="flex items-start gap-3">
                    <Settings size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Remote Control</h3>
                      <p className="text-gray-600 text-xs mt-1">Manage settings and deploy updates remotely</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Connected Devices ({devices.length})</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devices.map((device: Device) => (
                <div key={device.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{getDeviceIcon(device.type)}</div>
                    <div className={'px-3 py-1 rounded-full text-xs font-medium ' + getStatusClass(device.status)}>
                      {device.status}
                    </div>
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-1">{device.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">Last seen: {device.lastSeen}</p>
                  <button className="w-full text-gray-700 hover:text-blue-600 text-sm font-medium py-2 rounded transition-colors">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {showAddDevice && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-gray-200 rounded-xl shadow-xl max-w-md w-full">
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="text-xl font-bold text-gray-900">Add New Device</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Device Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Lobby Display 1"
                  value={deviceName}
                  onChange={(e) => setDeviceName(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Device Type
                </label>
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value as 'smartphone' | 'tablet' | 'tv')}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  <option value="smartphone">Smartphone</option>
                  <option value="tablet">Tablet</option>
                  <option value="tv">TV Display</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddDevice(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddDevice}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
                >
                  Add Device
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}