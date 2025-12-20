'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Clock, EllipsisVertical, ListVideo, Monitor, PlusIcon, Upload, Video, } from 'lucide-react'
import DeviceList from '../custome/DeviceList'
import { Card, CardHeader } from '../custome/Card'
import { Button } from '../custome/Button'
import CardStack from '../custome/CardStack'
import { Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../custome/Dialog'

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

                    <div className='flex lg:flex-row flex-col justify-between gap-4 lg:items-center '>

                        <Container className='flex gap-4  '>
                            <div className='flex bg-pink-100 rounded-lg p-2 h-14 w-14 shrink-0'>

                                <ListVideo className='m-auto text-pink-600' size={24} />

                            </div>
                            <div className="max-w-180">
                                <Typography variant='h4' weight='bold'>Phoenix Creatives Advertisment Power point</Typography>
                                <Typography variant='body2' color='muted'>Connect playlist and manage your ads</Typography>
                            </div>

                        </Container>

                        <Container radius='md' className='bg-gray-100 border-gray-300' variant='primary'>
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



                            <Dialog>
                                <DialogTrigger>
                                    <Button variant="primary" className='shadow-md md:flex hidden' size='md' icon={<PlusIcon size={18} strokeWidth={1.5} />}>Add Content</Button>
                                    <Button variant="primary" className='shadow-md md:hidden flex' size='icon' icon={<PlusIcon size={18} strokeWidth={1.5} />}></Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Create User</DialogTitle>
                                        <DialogDescription>
                                            Fill in the details below to create a new user.
                                        </DialogDescription>
                                    </DialogHeader>

                                    <DialogBody>
                                        <form className="space-y-4">
                                            <div>
                                                <Typography variant='body2' className="">Name</Typography >
                                                <input
                                                    type="text"
                                                    className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
                                                />
                                            </div>
                                            <div>
                                                <Typography variant='body2' className="">Email</Typography>
                                                <input
                                                    type="email"
                                                    className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
                                                />
                                            </div>
                                        </form>
                                    </DialogBody>

                                    <DialogFooter>
                                        <DialogClose>Cancel</DialogClose>
                                        <Button variant="primary">Save</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>



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