'use client'
import React, { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import IconBox from "./IconBox";
import { Typography } from "@/components/typography/typography";
import { CalendarClock, CreditCard, Files, FolderOpen, Grid, LayoutGrid, LifeBuoy, ListVideo, PlaySquare, ScreenShare, Settings, Settings2 } from "lucide-react";
import ImageBox from "./ImageBox";
import Link from "next/link";
import logo from '@/assets/images/brand/LOGO.jpg'

export default function Sidebar() {







    return <Container className=" h-full bg-white w-[270px] xl:flex flex-col hidden gap-10" padding="md">
        <Container className='flex items-center justify-center gap-2 '>
            <ImageBox height={400} width={400} src={"https://i.pinimg.com/736x/f6/26/47/f62647f23f4eb78d1b9d267c92ee1521.jpg"} size="xs" radius="none" className="" variant="transparent" />
            <Typography variant='h5' weight='extrabold'>Signage V2</Typography>
        </Container>
        <Container className="flex flex-col">
            <Typography variant='overline' weight='medium' className="mb-4">Menu</Typography>
            <Container className="flex flex-col gap-2">
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={LayoutGrid} />
                    <Typography variant='body2' className="">Dashboard</Typography>
                </Link>
                <Link href={'/user/screens'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={ScreenShare} />
                    <Typography variant='body2' className="">Screens</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={PlaySquare} />
                    <Typography variant='body2' className="">Playlist</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={CalendarClock} />
                    <Typography variant='body2' className="">Scheduler</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={FolderOpen} />
                    <Typography variant='body2' className="">Files</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={Settings} />
                    <Typography variant='body2' className="">Settings</Typography>
                </Link>
                <Link href={'/user/components'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={Settings} />
                    <Typography variant='body2' className="">Components</Typography>
                </Link>
            </Container>
        </Container>
        <Container className="flex flex-col ">
            <Typography variant='overline' weight='medium' className="mb-4">Others</Typography>
            <Container className="flex flex-col gap-2">
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={CreditCard} />
                    <Typography variant='body2' className="">Upgrade Plan</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={LifeBuoy} />
                    <Typography variant='body2' className="">Help</Typography>
                </Link>


            </Container>
        </Container>
    </Container>
};