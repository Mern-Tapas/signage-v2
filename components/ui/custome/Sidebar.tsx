import React from "react";
import Container from "@/components/layout/Container";
import IconBox from "./IconBox";
import { Typography } from "@/components/typography/typography";
import { CalendarClock, Files, Grid, LayoutGrid, ListVideo, ScreenShare, Settings, Settings2 } from "lucide-react";
import ImageBox from "./ImageBox";
import Link from "next/link";

export default function Sidebar() {
    return <Container className=" h-full bg-white w-[270px] xl:flex flex-col hidden gap-8" padding="md">
        <Container className='flex items-center justify-center gap-2'>
            <ImageBox src="https://cdn.dribbble.com/userupload/14906809/file/original-2a2a97fb303244180a928ecbe40b4e7a.png?resize=1024x768&vertical=center" size="xs" radius="full" />
            <Typography variant='h4' weight='extrabold'>Screen </Typography>
        </Container>
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
                <IconBox size='md' variant='transparant' icon={ListVideo} />
                <Typography variant='body2' className="">Playlist</Typography>
            </Link>
            <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                <IconBox size='md' variant='transparant' icon={CalendarClock} />
                <Typography variant='body2' className="">Sheduler</Typography>
            </Link>
            <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                <IconBox size='md' variant='transparant' icon={Files} />
                <Typography variant='body2' className="">Files</Typography>
            </Link>
            <Link href={'/user/dashboard'} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                <IconBox size='md' variant='transparant' icon={Settings} />
                <Typography variant='body2' className="">Settings</Typography>
            </Link>
        </Container>
    </Container>
};