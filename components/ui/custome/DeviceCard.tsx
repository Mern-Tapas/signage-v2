import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Activity, Map, MapPin, Monitor, Wifi, WifiOff } from 'lucide-react'
import React from 'react'
import { Button } from './Button'
import Link from 'next/link'

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


function DeviceCard(device: Device) {

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online': return 'from-emerald-400 to-green-500';
            case 'offline': return 'from-rose-400 to-red-500';
            case 'warning': return 'from-amber-400 to-yellow-500';
            default: return 'from-gray-400 to-gray-500';
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

    const getStatusBg = (status: string) => {
        switch (status) {
            case 'online': return 'bg-emerald-500/10';
            case 'offline': return 'bg-rose-500/10';
            case 'warning': return 'bg-amber-500/10';
            default: return 'bg-gray-500/10';
        }
    };


    return (
        <Container padding='md' variant='primary' radius='xl' className='grid grid-cols-1 gap-4' >
            <Container className='flex gap-2'>
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-300/50 hover:shadow-blue-400/60 transition-all duration-300 cursor-pointer group">
                    <Monitor className="w-5 h-5 text-white  transition-transform" />
                </div>
                <div className=' w-full truncate'>
                    <Typography weight='medium' className='text-sm truncate mb-1'>{device.name}</Typography>
                    <p className='text-xs flex items-center gap-1 text-gray-500'> <MapPin size={14} />{device.location}</p>
                </div>
            </Container>
            <Container>
                <div className="flex items-center justify-between ">
                    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full ${getStatusBg(device.status)} backdrop-blur-sm`}>
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor(device.status)} animate-pulse shadow-lg`}></span>
                        <span className={`text-xs font-bold capitalize ${getStatusText(device.status)}`}>{device.status}</span>
                        {device.status === 'online' ? (
                            <Wifi className={`w-3.5 h-3.5 ${getStatusText(device.status)}`} />
                        ) : device.status === 'offline' ? (
                            <WifiOff className={`w-3.5 h-3.5 ${getStatusText(device.status)}`} />
                        ) : (
                            <Activity className={`w-3.5 h-3.5 ${getStatusText(device.status)}`} />
                        )}
                    </div>

                </div>
            </Container>

            <Container className='grid gap-2 grid-cols-2'>
                <Container  padding='sm' radius='md' className='bg-gradient-to-br from-blue-50 to-cyan-50'>
                    <Typography color='muted' variant='caption'>Uptime</Typography>
                    <Typography variant='body2' weight='bold' className='text-sm'>15d 7h 32m</Typography>

                </Container>
                <Container  padding='sm' radius='md' className='bg-gradient-to-br from-green-50 to-emerald-50'>
                    <Typography color='muted' variant='caption'>Active Playlist</Typography>
                    <Typography variant='body2' weight='bold' className='text-sm'>02</Typography>

                </Container>
            </Container>

            <Container className='grid grid-cols-1 '>
                <Link href={'/user/screens/123'} className='text-sm w-full p-2 text-center bg-gray-200 rounded-lg hover:bg-gray-300 transition'>View Detial</Link>
            </Container>
        </Container>
    )
}

export default DeviceCard