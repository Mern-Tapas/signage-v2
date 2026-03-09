'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import IconBox from '../custome/IconBox'
import { Activity, Database, Info, Maximize, Monitor, PlusIcon, TvMinimal, Wifi, WifiOff } from 'lucide-react'
import { Badge } from '../custome/Badge'
import { Card, CardHeader } from '../custome/Card'
import PlaylistListItem from '../custome/PlaylistListItem'
import { Button } from '../custome/Button'
import { useRouter } from 'next/navigation'

function UserScreen() {

    const router = useRouter()

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

    const device = {
        status: "online"
    }

    return (
        <Container className='grid gap-6'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='medium'>Screen Details</Typography>
                    <Typography variant='body2' color='secondary'>Connect playlist and manage your ads</Typography>
                </Container>

            </Container>

            <Container className='flex gap-4 flex-col lg:flex-row' variant='default' padding='none'>

                <Container
                    className=' w-full relative overflow-hidden'
                    variant='primary'
                    padding='lg'
                    radius='xl'
                >

                    {/* HEADER GRADIENT */}

                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />

                    {/* STATUS BADGE */}

                    <div
                        className={`absolute right-6 top-6 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusBg(device.status)}`}
                    >
                        <span
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor(device.status)} animate-pulse`}
                        />

                        {device.status}

                        {device.status === "online" ? (
                            <Wifi size={14} />
                        ) : device.status === "offline" ? (
                            <WifiOff size={14} />
                        ) : (
                            <Activity size={14} />
                        )}
                    </div>


                    {/* DEVICE HEADER */}

                    <div className='flex gap-4 items-center mb-6'>

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">

                            <Monitor className="w-6 h-6 text-white" />

                        </div>

                        <div className='truncate'>

                            <Typography className='truncate' variant='h4'>
                                Shalimar Township Block A1
                            </Typography>

                            <Typography variant='caption' color='muted'>
                                Android Player • Last active 2 min ago
                            </Typography>

                        </div>

                    </div>


                    {/* DEVICE STATS */}
                    <Container className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* Device ID */}

                        <div className="bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white transition rounded-xl p-4 flex items-start gap-3">

                            <Info size={20} className="text-gray-500 mt-0.5 shrink-0" />

                            <div className="flex flex-col min-w-0">

                                <Typography variant="caption" color="muted">
                                    Device ID
                                </Typography>

                                <Typography weight="bold" className="text-sm whitespace-nowrap">
                                    WITTY12930
                                </Typography>

                            </div>

                        </div>


                        {/* Resolution */}

                        <div className="bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white transition rounded-xl p-4 flex items-start gap-3">

                            <Maximize size={20} className="text-gray-500 mt-0.5 shrink-0" />

                            <div className="flex flex-col min-w-0">

                                <Typography variant="caption" color="muted">
                                    Resolution
                                </Typography>

                                <Typography weight="bold" className="text-sm whitespace-nowrap">
                                    1920 × 1080
                                </Typography>

                            </div>

                        </div>


                        {/* Storage */}

                        <div className="bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white transition rounded-xl p-4 flex items-start gap-3">

                            <Database size={20} className="text-gray-500 mt-0.5 shrink-0" />

                            <div className="flex flex-col min-w-0">

                                <Typography variant="caption" color="muted">
                                    Storage
                                </Typography>

                                <Typography weight="bold" className="text-sm whitespace-nowrap">
                                    8 GB / 16 GB
                                </Typography>

                            </div>

                        </div>


                        {/* Uptime */}

                        <div className="bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white transition rounded-xl p-4 flex items-start gap-3">

                            <Activity size={20} className="text-gray-500 mt-0.5 shrink-0" />

                            <div className="flex flex-col min-w-0">

                                <Typography variant="caption" color="muted">
                                    Uptime
                                </Typography>

                                <Typography weight="bold" className="text-sm whitespace-nowrap">
                                    3 Days
                                </Typography>

                            </div>

                        </div>

                    </Container>
                </Container>

            </Container>



            <Card radius='xl'>
                <CardHeader >
                    <Container className='flex justify-between' padding='sm'>
                        <div className='flex items-center'>
                            <Typography variant='h6'>Playlists</Typography>
                            {/* <Typography variant='body2' color='muted'>Connected Playlists </Typography> */}
                        </div>
                        <Container className='flex items-center'>
                            <Button variant="primary" onClick={() => { router.push('device/assign') }} className='shadow-md md:flex hidden' size='md' icon={<PlusIcon size={18} strokeWidth={1.5} />}>Add Content</Button>

                        </Container>
                    </Container>
                </CardHeader>

                <Container variant='primary' padding='md' radius='xl' className='flex flex-col gap-2'>



                    <Container variant='default' padding='sm' radius='xl' className='grid grid-cols-[220px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr_1fr] items-center '>


                        <div className='flex gap-4 items-center '>

                            <Container className=''>

                                <Typography variant='body2' weight='normal' className='truncate '>All Devices</Typography>

                            </Container>
                        </div>
                        <div className='hidden lg:flex '>
                            <Typography variant='body2' weight='normal' className='truncate '>Devices Id</Typography>
                        </div>
                        <div className='hidden lg:flex '>
                            <Typography variant='body2' weight='normal' className='truncate '>Status</Typography>
                        </div>
                        <div className='hidden lg:flex '>
                            <Typography variant='body2' weight='normal' className='truncate '>Status</Typography>
                        </div>
                        <div className="ms-auto flex items-center">
                            <Typography variant='body2' weight='normal' className='truncate '>Action</Typography>

                        </div>
                    </Container>

                    <PlaylistListItem />
                    <PlaylistListItem />
                </Container>
            </Card>

        </Container>
    )
}

export default UserScreen