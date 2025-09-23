'use client'
import Container from '@/components/layout/Container';
import { Caption, Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import Avatar from '@/components/ui/custome/Avatar';
import IconBox from '@/components/ui/custome/IconBox';
import ProductCard from '@/components/ui/custome/ProductCard';
import { ProfileCard } from '@/components/ui/custome/ProfileCard';
import { Database, File, PlayIcon, PlaySquare, Plus, PlusIcon, ScreenShare, ScreenShareIcon, Timer, Users, WatchIcon } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react'
import DeviceTable from '../custome/DeviceTable';
import { Button } from '../custome/Button';


import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/custome/AlertDialog';

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
function UserScreen() {


    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='bold'>Screen Manager</Typography>
                    <Typography variant='body2' color='secondary'>Manage your Digital Signages</Typography>

                </Container>
                <Container>

                    <Dialog>
                        <DialogTrigger>
                            <Button variant="primary" icon={<PlusIcon size={16} strokeWidth={1.5} />}>Add Device</Button>
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

            <Container className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'  >
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
                <DeviceCard />
            </Container>


        </Container>
    )
}

export default UserScreen