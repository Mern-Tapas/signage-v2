'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import IconBox from '../custome/IconBox'
import { Activity, Database, Info, Maximize, Monitor, TvMinimal, Wifi, WifiOff } from 'lucide-react'
import { Badge } from '../custome/Badge'
import { Card, CardHeader } from '../custome/Card'
import PlaylistListItem from '../custome/PlaylistListItem'
import { Button } from '../custome/Button'

function UserScreen() {

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
        status:"online"
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

                {/* Device Details */}
                <Container className='lg:w-130 w-full gap-6 grid relative shrink-0' variant='primary' padding='lg' radius='xl' >
                    <div className={`absolute right-6 top-6 flex items-center space-x-2 px-3 py-1.5 rounded-full ${getStatusBg(device.status)} backdrop-blur-sm`}>
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

                    <div className='flex gap-4  w-full'>
                        <div>
                            <div className="w-12 h-12 shrink-0 rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-300/50 hover:shadow-blue-400/60 transition-all duration-300 cursor-pointer group">
                                <Monitor className="w-5 h-5 text-white  transition-transform" />
                            </div>
                        </div>
                        <div className='truncate lg:w-80 w-70'>
                            <Typography className='truncate' variant='h4'>Shalimar Township Block A1</Typography>
                            <Typography variant='caption' color='muted'>Lorem ipsum dolor sit amet.</Typography>
                        </div>
                    </div>

                    <Container className='grid gap-6 lg:grid-cols-2  grid-cols-2' radius='md'>
                        {/* section 1 */}
                        <div className='flex gap-2  items-center'>
                            <Info size={24} strokeWidth={1.5} className='shrink-0 h-10 w-10 p-2' />
                            <div className='grid'>
                                <Typography variant='caption' color='muted'>DEVICE ID</Typography>
                                <Typography variant='caption' weight='bold'>WITTY12930</Typography>
                            </div>
                        </div>
                        {/* section 2 */}
                        <div className='flex gap-2  items-center'>
                            <Maximize size={24} strokeWidth={1.5} className='shrink-0 h-10 w-10 p-2' />
                            <div className='grid'>
                                <Typography variant='caption' color='muted'>RESOLUTION</Typography>
                                <Typography variant='caption' weight='bold'>8 Gb</Typography>
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className='flex gap-2  items-center'>
                            <Database size={24} strokeWidth={1.5} className='shrink-0 h-10 w-10 p-2' />
                            <div className='grid'>
                                <Typography variant='caption' color='muted'>STORAGE</Typography>
                                <Typography variant='caption' weight='bold'>8 Gb</Typography>
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className='flex gap-2  items-center'>
                            <Database size={24} strokeWidth={1.5} className='shrink-0 h-10 w-10 p-2' />
                            <div className='grid'>
                                <Typography variant='caption' color='muted'>STORAGE</Typography>
                                <Typography variant='caption' weight='bold'>8 Gb</Typography>
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
                            <Button variant='primary' className='shadow-md'>Assign Playlist</Button>
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
                </Container>
            </Card>

        </Container>
    )
}

export default UserScreen