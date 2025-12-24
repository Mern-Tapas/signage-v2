'use client'
import Container from '@/components/layout/Container';
import { Typography } from '@/components/typography/typography';
import { Download, LayoutGrid, PlusIcon, Search, Trash } from 'lucide-react';
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
import { Input } from '../custome/Input';
import DeviceCard from '../custome/DeviceCard';
import DeviceList from '../custome/DeviceList';
import Checkbox from '../custome/Checkbox';
import EmpatyState from '../custome/EmptyState';
function UserScreens() {




    const [deviceLayout, setLayout] = useState<boolean>(false)
    const [mounted, setMounted] = useState<boolean>(false)

    const changeLayout = (layout: boolean) => {
        setLayout(layout)
        localStorage.setItem("deviceLayout", JSON.stringify(layout))
    }
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


    const [devices] = useState<Device[]>([
        {
            id: 1,
            name: 'Lobby Display Phoenix Citadel',
            location: 'Main Entrance, Building A',
            status: 'online',
            lastSeen: '2 min ago',
            playlist: 'Summer Promotions 2024',
            resolution: '1920x1080',
            uptime: '45 days',
            storage: { used: 12, total: 32 }
        },
        {
            id: 2,
            name: 'Cafeteria Screen',
            location: 'Floor 2, North Wing',
            status: 'online',
            lastSeen: '5 min ago',
            playlist: 'Daily Menu & Announcements',
            resolution: '3840x2160',
            uptime: '30 days',
            storage: { used: 8, total: 16 }
        },
        {
            id: 3,
            name: 'Conference Room A',
            location: 'Floor 3, Executive Suite',
            status: 'offline',
            lastSeen: '2 hours ago',
            playlist: 'Corporate Updates Q4',
            resolution: '1920x1080',
            uptime: '0 days',
            storage: { used: 15, total: 32 }
        },
        {
            id: 4,
            name: 'Reception Display',
            location: 'Ground Floor, Main Desk',
            status: 'online',
            lastSeen: '1 min ago',
            playlist: 'Welcome & Directory',
            resolution: '1920x1080',
            uptime: '60 days',
            storage: { used: 5, total: 16 }
        },
        {
            id: 5,
            name: 'Break Room TV',
            location: 'Floor 4, West Side',
            status: 'warning',
            lastSeen: '3 min ago',
            playlist: 'News & Weather Feed',
            resolution: '1920x1080',
            uptime: '15 days',
            storage: { used: 28, total: 32 }
        },
        {
            id: 6,
            name: 'Warehouse Screen',
            location: 'Building B, Loading Bay',
            status: 'offline',
            lastSeen: '1 day ago',
            playlist: 'Safety & Procedures',
            resolution: '1280x720',
            uptime: '0 days',
            storage: { used: 10, total: 16 }
        },
        {
            id: 7,
            name: 'Parking Display',
            location: 'Garage Level 1',
            status: 'online',
            lastSeen: '4 min ago',
            playlist: 'Parking Info & Ads',
            resolution: '1920x1080',
            uptime: '90 days',
            storage: { used: 6, total: 16 }
        },
        {
            id: 8,
            name: 'Elevator Screen',
            location: 'Tower A, Main Elevator',
            status: 'online',
            lastSeen: '1 min ago',
            playlist: 'Quick Announcements',
            resolution: '1080x1920',
            uptime: '120 days',
            storage: { used: 4, total: 8 }
        },
        {
            id: 9,
            name: 'Elevator Screen',
            location: 'Tower A, Main Elevator',
            status: 'online',
            lastSeen: '1 min ago',
            playlist: 'Quick Announcements',
            resolution: '1080x1920',
            uptime: '120 days',
            storage: { used: 4, total: 8 }
        },
        {
            id: 10,
            name: 'Elevator Screen',
            location: 'Tower A, Main Elevator',
            status: 'online',
            lastSeen: '1 min ago',
            playlist: 'Quick Announcements',
            resolution: '1080x1920',
            uptime: '120 days',
            storage: { used: 4, total: 8 }
        },
        {
            id: 11,
            name: 'Elevator Screen',
            location: 'Tower A, Main Elevator',
            status: 'online',
            lastSeen: '1 min ago',
            playlist: 'Quick Announcements',
            resolution: '1080x1920',
            uptime: '120 days',
            storage: { used: 4, total: 8 }
        },
        {
            id: 12,
            name: 'Elevator Screen',
            location: 'Tower A, Main Elevator',
            status: 'online',
            lastSeen: '1 min ago',
            playlist: 'Quick Announcements',
            resolution: '1080x1920',
            uptime: '120 days',
            storage: { used: 4, total: 8 }
        },
    ]);

    useEffect(() => {

        const layout = localStorage.getItem("deviceLayout")

        if (layout != null) {
            setLayout(JSON.parse(layout))
        }
        setMounted(true)



    }, [])


    return (
        mounted ? <Container className='grid gap-6'>
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
                            <Button variant="primary" className='h-full md:flex hidden' size='md' icon={<PlusIcon size={18} strokeWidth={1.5} />}>Add Screen</Button>
                            <Button size='icon' className='block md:hidden' variant='primary' icon={<PlusIcon strokeWidth={1.2} />} />

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

                    <Button size='icon' icon={<LayoutGrid strokeWidth={1} radius={'md'} />} onClick={() => changeLayout(!deviceLayout)} />

                </Container>
            </Container>


            {deviceLayout ?
                <Container className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'  >
                    {devices.map((device, index) => (
                        <DeviceCard {...device} key={index} />
                    ))}
                </Container> :

                <Container className='grid gap-4'>

                    <Container className='px-4 flex gap-2'>
                        {/* <Checkbox
                            checked={false}
                            onChange={() => { }}
                            color="primary"
                            size="md"
                        /> */}

                        <Container variant='default' padding='sm' radius='xl' className='w-full grid grid-cols-[220px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr_1fr] items-center '>

                            <div className='flex gap-4 items-center '>
                                <Typography variant='body2' weight='bold' className='truncate '>All Devices</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>Devices Id</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>Status</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>Content</Typography>
                            </div>
                            <div className="ms-auto flex items-center">
                                <Typography variant='body2' weight='bold' className='truncate '>Action</Typography>

                            </div>
                        </Container>

                    </Container>



                    {Array.from({ length: 10 }, (_, i) => {
                        return <Container key={i} className='flex px-4 gap-2' radius='xl' variant='primary' >
                            {/* <Checkbox
                                checked={false}
                                onChange={() => { }}
                                color="primary"
                                size="md"
                                
                            /> */}
                            <DeviceList />
                        </Container>
                    })}


                    {devices.length == 0 ? <EmpatyState /> : ""}
                </Container>

            }


        </Container> : ""
    )
}

export default UserScreens