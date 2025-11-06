'use client'
import Container from '@/components/layout/Container';
import { Caption, Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import Avatar from '@/components/ui/custome/Avatar';
import IconBox from '@/components/ui/custome/IconBox';
import ProductCard from '@/components/ui/custome/ProductCard';
import { ProfileCard } from '@/components/ui/custome/ProfileCard';
import { Database, Download, File, Grid, Grid2X2, LayoutGrid, PlayIcon, PlaySquare, Plus, PlusIcon, Radio, ScreenShare, ScreenShareIcon, Search, Timer, Trash, TvMinimal, Users, WatchIcon } from 'lucide-react';
import { Metadata } from 'next';
import React, { useEffect, useState } from 'react'
import { Button } from '../custome/Button';


import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
    DialogClose,
} from "@/components/ui/custome/Dialog";
import DeviceCard from '../custome/DeviceCard';
import Link from 'next/link';
import { Input } from '../custome/Input';
import DeviceList from '../custome/DeviceList';
import Checkbox from '../custome/Checkbox';
function UserScreens() {




    const [deviceLayout, setLayout] = useState<boolean>(false)
    const [mounted, setMounted] = useState<boolean>(false)

    const changeLayout = (layout: boolean) => {
        setLayout(layout)
        localStorage.setItem("deviceLayout", JSON.stringify(layout))
    }


    useEffect(() => {

        const layout = localStorage.getItem("deviceLayout")

        if (layout != null) {
            setLayout(JSON.parse(layout))
        }
        setMounted(true)



    }, [])


    return (
        mounted ? <Container className='grid gap-4'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='medium'>Screen Manager</Typography>
                    <Typography variant='body2' color='secondary'>Manage your digital signage devices</Typography>


                </Container>

            </Container>

            <Container className='flex items-center justify-between'>
                <Container className='flex gap-4'>
                    <Input variant='filled' placeholder='Search' radius='xl' icon={<Search strokeWidth={1.5} size={20} className='' />} />

                </Container>
                <Container className='flex gap-2'>

                    <Button className='hidden' variant="outline" size='md' icon={<Download size={18} strokeWidth={1.5} />}>Export</Button>
                    <Button className='hidden' variant="danger" size='md' icon={<Trash size={18} strokeWidth={1.5} />}>Delete</Button>

                    <Dialog>
                        <DialogTrigger>
                            <Button variant="primary" className='h-full md:flex hidden' size='md' icon={<PlusIcon size={18} strokeWidth={1.5} />}>Add Device</Button>
                            <Button size='icon' className='block md:hidden' variant='primary'  icon={<PlusIcon strokeWidth={1.2}  />}  />

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

                    <Button size='icon' icon={<LayoutGrid strokeWidth={1.2} radius={'md'} />} onClick={() => changeLayout(!deviceLayout)} />

                </Container>
            </Container>


            {deviceLayout ?
                <Container className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'  >
                    {Array.from({ length: 10 }, (_, i) => {

                        return <DeviceCard key={i} />
                    })}
                </Container> :

                <Container className='grid gap-4'>

                    <Container className='px-4 flex gap-2'>
                        <Checkbox
                            checked={false}
                            onChange={() => { }}
                            color="primary"
                            size="md"
                        />

                        <Container variant='default' padding='sm' radius='xl' className='w-full grid grid-cols-[220px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr_1fr] items-center '>

                            <div className='flex gap-4 items-center '>
                                <Typography variant='body2' weight='normal' className='truncate '>All Devices</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='normal' className='truncate '>Devices Id</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='normal' className='truncate '>Status</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='normal' className='truncate '>Content</Typography>
                            </div>
                            <div className="ms-auto flex items-center">
                                <Typography variant='body2' weight='normal' className='truncate '>Action</Typography>

                            </div>
                        </Container>

                    </Container>



                    {Array.from({ length: 10 }, (_, i) => {
                        return <Container key={i} className='flex px-4 gap-2' radius='xl' variant='primary' >
                            <Checkbox
                                checked={false}
                                onChange={() => { }}
                                color="primary"
                                size="md"
                            />
                            <DeviceList />
                        </Container>
                    })}


                </Container>

            }


        </Container> : ""
    )
}

export default UserScreens