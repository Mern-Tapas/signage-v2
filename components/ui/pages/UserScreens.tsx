'use client'
import Container from '@/components/layout/Container';
import { Caption, Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import Avatar from '@/components/ui/custome/Avatar';
import IconBox from '@/components/ui/custome/IconBox';
import ProductCard from '@/components/ui/custome/ProductCard';
import { ProfileCard } from '@/components/ui/custome/ProfileCard';
import { Database, File, PlayIcon, PlaySquare, Plus, ScreenShare, Timer, Users, WatchIcon } from 'lucide-react';
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
function UserScreen() {


    return (
        <Container className='grid gap-4'>
            <Container>
                <Typography variant='h4' weight='bold'>Screen Manager</Typography>
                <Typography variant='body2' color='secondary'>Manage your Digital Signages</Typography>

            </Container>
           
            <Container className='grid gap-4 xl:grid-cols-2' >
                <DeviceTable />
                <DeviceTable />
                <DeviceTable />
                <DeviceTable />
            </Container>


        </Container>
    )
}

export default UserScreen