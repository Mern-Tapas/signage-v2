'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import IconBox from '../custome/IconBox'
import { Clock, Database, ExternalLink, Icon, Info, Maximize, Monitor, Pen, PlusIcon, ScreenShare, TvMinimal, Video, Watch } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../custome/Badge'
import AnalyticsCard from '../custome/AnalyticsCard'
import DeviceList from '../custome/DeviceList'
import { Card, CardHeader } from '../custome/Card'
import { Button } from '../custome/Button'
import Image from 'next/image'
import CardStack from '../custome/CardStack'
import { Switch } from '../custome/Switch'

function UserPlaylist() {
    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='medium'>Playlist Details</Typography>
                    <Typography variant='body2' color='secondary'>Manage your digital signage content playlist</Typography>
                </Container>

            </Container>

            <Container className='grid' variant='default' radius='xl'>

                {/* Playlist Details */}
                <Container padding='lg' radius='xl' variant='primary' className='flex flex-col lg:flex-row lg:gap-6 gap-4'>
                    <Container className='w-60 shrink-0'>
                        <div className="box aspect-[9/16] w-35">
                            <CardStack />
                        </div>
                    </Container>
                    <Container className='flex flex-col gap-4 py-4 shrink-0'>
                        <div className="max-w-90">
                            <Typography variant='h4' weight='bold'>Phoenix Creatives Advertisment Power point</Typography>
                            <Typography variant='body2' color='muted'>Connect playlist and manage your ads</Typography>
                        </div>
                        <div className='flex flex-col gap-3 border border-gray-400 p-4 rounded-xl border-dashed'>
                            <div className='grid items-center grid-cols-[30px_60px_20px_100px]'>
                                <div className='flex items-center'>
                                    <Clock className='text-yellow-600' strokeWidth={1.5} size={18} />
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>  Duration</Typography>
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>:</Typography>
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>21 Min</Typography>
                                </div>
                            </div>

                            <div className='grid items-center grid-cols-[30px_60px_20px_100px]'>
                                <div className='flex items-center'>
                                    <Video className='text-purple-600' strokeWidth={1.5} size={18} />
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>Content</Typography>
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>:</Typography>
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>27 Files</Typography>
                                </div>
                            </div>

                            <div className='grid items-center grid-cols-[30px_60px_20px_100px]'>
                                <div className='flex items-center'>
                                    <Monitor className='text-blue-600' strokeWidth={1.5} size={18} />
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>Screens</Typography>
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>:</Typography>
                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='caption'>11</Typography>
                                </div>
                            </div>


                        </div>
                    </Container>
                    <Container radius='md' padding='md' className='bg-gray-100 w-full' variant='secondary'>
                        d
                    </Container>
                    {/* <Switch size='md' checked={false} onChange={() => { }} /> */}
                </Container>



            </Container>



            <Card radius='xl'>
                <CardHeader >
                    <Container className='flex justify-between' padding='sm'>
                        <div>
                            <Typography variant='h6'>Playlist Items</Typography>
                            <Typography variant='body2' color='muted'>Playlist Items</Typography>
                        </div>
                        <Container className='flex items-center'>
                            <Button variant="primary" className='shadow-md md:flex hidden' size='md' icon={<PlusIcon size={18} strokeWidth={1.5} />}>Add Content</Button>
                            <Button variant="primary" className='shadow-md md:hidden flex' size='icon' icon={<PlusIcon size={18} strokeWidth={1.5} />}></Button>
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

                    <DeviceList className={''} />
                    <DeviceList className={''} />
                    <DeviceList className={''} />
                    <DeviceList className={''} />
                    <DeviceList className={''} />
                </Container>
            </Card>

        </Container>
    )
}

export default UserPlaylist