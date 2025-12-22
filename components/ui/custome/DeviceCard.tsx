import React, { useState } from 'react';
import { Monitor, MoreVertical, Settings, Power, Wifi, WifiOff, Activity, Clock } from 'lucide-react';
import { Button } from './Button';

interface Device {
    id: number;
    name: string;
    location: string;
    status: 'online' | 'offline' | 'warning';
    lastSeen: string;
    playlist: string;
    resolution: string;
    uptime: string;
    storage: {
        used: number;
        total: number;
    };
}

export const DeviceCard: React.FC<{ device: Device }> = ({ device }) => {
    const [showMenu, setShowMenu] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online': return 'from-emerald-400 to-green-500';
            case 'offline': return 'from-rose-400 to-red-500';
            case 'warning': return 'from-amber-400 to-yellow-500';
            default: return 'from-gray-400 to-gray-500';
        }
    };

    const getStatusBg = (status: string) => {
        switch (status) {
            case 'online': return 'bg-emerald-500/10';
            case 'offline': return 'bg-rose-500/10';
            case 'warning': return 'bg-amber-500/10';
            default: return 'bg-gray-500/10';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'online': return 'text-emerald-600';
            case 'offline': return 'text-rose-600';
            case 'warning': return 'text-amber-600';
            default: return 'text-gray-600';
        }
    };

    return (
        <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden transition-all duration-500 border border-gray-200/50 backdrop-blur-sm">
            {/* Gradient Overlay */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${getStatusColor(device.status)} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

            <div className="relative p-5 grid gap-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 ">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <div className={`relative p-3 rounded-xl bg-gradient-to-br ${getStatusColor(device.status)}  group-hover:scale-110 transition-transform duration-300`}>
                            <Monitor className="w-5 h-5 text-white" />
                            {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-current animate-pulse"></div> */}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-sm truncate mb-0.5">{device.name}</h3>
                            <p className="text-gray-500 text-xs truncate flex items-center">
                                <span className="w-1 h-1 bg-gray-400 rounded-full mr-1.5"></span>
                                {device.location}
                            </p>
                        </div>
                    </div>
                    <div className="relative ml-2">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="bg-white p-2 rounded-xl transition-all duration-300 hover:rotate-90"
                        >
                            <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                        {showMenu && (
                            <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 z-10 backdrop-blur-lg">
                                <button className="w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 flex items-center space-x-3 text-sm transition-all">
                                    <Settings className="w-4 h-4 text-blue-500" />
                                    <span>Settings</span>
                                </button>
                                <button className="w-full rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 flex items-center space-x-3 text-sm transition-all">
                                    <Power className="w-4 h-4 text-purple-500" />
                                    <span>Restart</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full ${getStatusBg(device.status)} backdrop-blur-sm`}>
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor(device.status)} animate-pulse `}></span>
                        <span className={`text-xs font-bold capitalize ${getStatusText(device.status)}`}>{device.status}</span>
                        {device.status === 'online' ? (
                            <Wifi className={`w-3.5 h-3.5 ${getStatusText(device.status)}`} />
                        ) : device.status === 'offline' ? (
                            <WifiOff className={`w-3.5 h-3.5 ${getStatusText(device.status)}`} />
                        ) : (
                            <Activity className={`w-3.5 h-3.5 ${getStatusText(device.status)}`} />
                        )}
                    </div>
                    <div className="flex items-center space-x-1.5 text-gray-400 text-xs bg-white px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        <span>{device.lastSeen}</span>
                    </div>
                </div>



                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 ">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50">
                        <p className="text-xs text-gray-500 mb-1 font-medium">Resolution</p>
                        <p className="text-sm font-bold text-gray-900">{device.resolution}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100/50">
                        <p className="text-xs text-gray-500 mb-1 font-medium">Uptime</p>
                        <p className="text-sm font-bold text-gray-900">{device.uptime}</p>
                    </div>
                </div>

                {/* Storage */}
                <div className="mb-2 p-3 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100/50">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-500">Storage Usage</span>
                        <span className="text-xs font-bold text-gray-900">
                            {device.storage.used}GB / {device.storage.total}GB
                        </span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            className={`h-2 rounded-full transition-all duration-500 bg-gradient-to-r ${device.storage.used / device.storage.total > 0.8 ? 'from-rose-400 to-red-500' : 'from-blue-400 to-purple-500'}`}
                            style={{ width: `${(device.storage.used / device.storage.total) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Action Button */}
                <Button  className='w-full' size='md' variant='secondary'>View Details</Button>
            </div>
        </div>
    );
};
