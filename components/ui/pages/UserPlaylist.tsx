'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Clock, EllipsisVertical, Monitor, PlusIcon, Upload, Video, } from 'lucide-react'
import DeviceList from '../custome/DeviceList'
import { Card, CardHeader } from '../custome/Card'
import { Button } from '../custome/Button'
import CardStack from '../custome/CardStack'

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
                <Container padding='lg' radius='xl' variant='primary' className=''>

                    <div className='flex justify-between'>

                        <Container className='flex flex-col gap-4 shrink-0 '>
                            <div className="max-w-180">
                                <Typography variant='h4' weight='bold'>Phoenix Creatives Advertisment Power point</Typography>
                                <Typography variant='body2' color='muted'>Connect playlist and manage your ads</Typography>
                            </div>

                        </Container>
                        <Container radius='md' className='bg-gray-100 w-full  border-gray-300' variant='primary'>
                            <div className="flex gap-2">
                                <Button size='md' variant='outline' icon={<Upload size={16} />}>Assign</Button>
                                <Button size='md' variant='outline' >Preview</Button>
                                <Button size='md' variant='primary' icon={<Upload size={16} />}>Publish</Button>
                                <Button size='icon' variant='outline' icon={<EllipsisVertical size={16} />}> </Button>
                            </div>
                        </Container>
                    </div>


                    {/* <Switch size='md' checked={false} onChange={() => { }} /> */}
                </Container>



            </Container>



            <Card radius='xl'>
                <CardHeader >
                    <Container className='flex justify-between' padding='sm'>
                        <div className='items-center flex'>
                            <Typography variant='h6'>Playlist Items</Typography>
                            {/* <Typography variant='body2' color='muted'>Playlist Items</Typography> */}
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