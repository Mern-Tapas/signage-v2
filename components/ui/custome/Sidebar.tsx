'use client'
import React from "react";
import Container from "@/components/layout/Container";
import IconBox from "./IconBox";
import { Typography } from "@/components/typography/typography";
import { CalendarClock, CreditCard, Files, FileText, FolderOpen, Grid, LayoutGrid, LifeBuoy, ListVideo, Monitor, PlaySquare, ScreenShare, Settings, Settings2 } from "lucide-react";
import ImageBox from "./ImageBox";
import Link from "next/link";

interface SidebarProps {
    isOpen: boolean
}

export default function Sidebar({ isOpen }: SidebarProps) {


    const menuItems = [
        { href: '/user/dashboard', label: 'Dashboard', icon: LayoutGrid },
        { href: '/user/screens', label: 'Screens', icon: Monitor },
        { href: '/user/playlists', label: 'Playlist', icon: PlaySquare },
        { href: '/user/scheduler', label: 'Scheduler', icon: CalendarClock },
        { href: '/user/files', label: 'Files', icon: FolderOpen },
        { href: '/user/components', label: 'Reports', icon: FileText },
        { href: '/user/settings', label: 'Settings', icon: Settings },
    ];
    const menuItems2 = [
        { href: '/user/dashboard', label: 'Plan', icon: CreditCard },
        { href: '/user/screens', label: 'Help', icon: LifeBuoy },

    ];

    return <Container className={`${isOpen ? "w-[270px]" : ""} h-full bg-white xl:flex flex-col hidden gap-10`} padding="md">
        <Container className='flex items-center mt-4 justify-center gap-2 '>
            {isOpen ?
                // <ImageBox height={400} width={400} src={"https://i.pinimg.com/736x/f6/26/47/f62647f23f4eb78d1b9d267c92ee1521.jpg"} size="xs" radius="none" className="" variant="transparent" />
                <Typography weight="bold">Logo</Typography>
                :
                <Typography weight="bold">L</Typography>
                // <ImageBox height={400} width={400} src={"https://i.pinimg.com/736x/f6/26/47/f62647f23f4eb78d1b9d267c92ee1521.jpg"} size="xs" radius="none" className="" variant="transparent" />
            }
        </Container>
        <Container className="flex flex-col">
            {isOpen ?
                // <Typography variant='overline' weight='medium' className="mb-4">Menu</Typography>
                ''
                :
                ""
            }
            <Container className="flex flex-col gap-2">


                {menuItems.map(({ href, label, icon: Icon }, index) => (
                    <Link key={index} href={href} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                        <IconBox size='md' variant='transparant' icon={Icon} />
                        {isOpen ? <Typography variant='body2' className="">{label}</Typography> : ""}
                    </Link>
                ))}


            </Container>
        </Container>
        <Container className="flex flex-col ">
            {isOpen ?
                // <Typography variant='overline' weight='medium' className="mb-4">Others</Typography>
                ""
                :
                ""}
            <Container className="flex flex-col gap-2">


                {menuItems2.map(({ href, label, icon: Icon }, index) => (
                    <Link key={index} href={href} className="flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                        <IconBox size='md' variant='transparant' icon={Icon} />
                        {isOpen ? <Typography variant='body2' className="">{label}</Typography> : ""}
                    </Link>
                ))}

            </Container>

            
        </Container>
    </Container>
};