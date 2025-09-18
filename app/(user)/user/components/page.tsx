'use client'
import React from 'react'
import Container from '@/components/layout/Container';
import { Caption, Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import Avatar from '@/components/ui/custome/Avatar';
import IconBox from '@/components/ui/custome/IconBox';
import ProductCard from '@/components/ui/custome/ProductCard';
import { ProfileCard } from '@/components/ui/custome/ProfileCard';
import { Database, File, PlayIcon, PlaySquare, Plus, ScreenShare, Timer, Users, WatchIcon } from 'lucide-react';
import { Metadata } from 'next';
import DeviceTable from '@/components/ui/custome/DeviceTable';
import { Button } from '@/components/ui/custome/Button';


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
import { Input } from '@/components/ui/custome/Input';

function page() {
    return (
        <Container className='grid gap-4'>
            <Container>
                <Typography variant='h4' weight='bold'>Components</Typography>
                <Typography variant='body2'>Welcome to your dashboard</Typography>

            </Container>

            <Container className='flex gap-4'>



                <AlertDialog>
                    <AlertDialogTrigger>
                        <Button variant="danger">Revoke New</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Revoke access</AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure? This application will no longer be accessible and any
                                existing sessions will be expired.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction >Revoke</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

                <Dialog>
                    <DialogTrigger>
                        <Button variant="primary">Open Form</Button>
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

            <Container className='flex items-center gap-2'>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Delete</Button>

                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg" icon={<Plus />}>Large</Button>
            </Container>
            <Container className='flex items-center gap-2'>
                <Input label="Default Input" placeholder="Enter text..." />

                <Input
                    label="Outlined Input"
                    variant="outlined"
                    placeholder="Email address"
                />

                <Input
                    label="Filled Input"
                    variant="filled"
                    placeholder="Username"
                    helperText="This will be visible to others"
                />

                <Input
                    label="Input with Error"
                    placeholder="Enter password"
                    type="password"
                    error="Password is too short"
                />
            </Container>
        </Container>
    )
}

export default page