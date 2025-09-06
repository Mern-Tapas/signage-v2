import React from "react";
import Container from "@/components/layout/Container";
import IconBox from "./IconBox";
import { Typography } from "@/components/typography/typography";
import { CalendarClock, CreditCard, Files, FolderOpen, Grid, LayoutGrid, LifeBuoy, ListVideo, PlaySquare, ScreenShare, Settings, Settings2 } from "lucide-react";
import ImageBox from "./ImageBox";
import Link from "next/link";

export default function Sidebar() {
    return <Container className=" h-full bg-white w-[270px] xl:flex flex-col hidden gap-10" padding="md">
        <Container className='flex items-center justify-center gap-2 my-4'>
            <ImageBox src="https://cdn.dribbble.com/userupload/14906809/file/original-2a2a97fb303244180a928ecbe40b4e7a.png?resize=1024x768&vertical=center" size="xs" radius="lg" />
            <Typography variant='h5' weight='extrabold'>Nova Signage</Typography>
        </Container>
        <Container className="flex flex-col">
            <Typography variant='overline' weight='medium' className="mb-4">Menu</Typography>
            <Container className="flex flex-col gap-2">
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={LayoutGrid} />
                    <Typography variant='body2' className="">Dashboard</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={ScreenShare} />
                    <Typography variant='body2' className="">Screens</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={PlaySquare} />
                    <Typography variant='body2' className="">Playlist</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={CalendarClock} />
                    <Typography variant='body2' className="">Sheduler</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={FolderOpen} />
                    <Typography variant='body2' className="">Files</Typography>
                </Link>
                <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                    <IconBox size='md' variant='transparant' icon={Settings} />
                    <Typography variant='body2' className="">Settings</Typography>
                </Link>
            </Container>
        </Container>
        <Container className="flex flex-col">
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