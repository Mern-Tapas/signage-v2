import React from 'react'
import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import { Activity, EllipsisVertical, Eye, MapPin, Monitor, Trash, Volume1, Wifi, WifiOff } from 'lucide-react'
import { Badge } from './Badge'
import Link from 'next/link'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from './Dropdown'
import {  ListVideo, } from 'lucide-react'
import Image from 'next/image'
import { Button } from './Button'


function PlaylistItem({ className, detailedView = true }: { className?: string, detailedView?: boolean }) {

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online': return 'from-emerald-400 to-green-500';
            case 'offline': return 'from-rose-400 to-red-500';
            case 'warning': return 'from-amber-400 to-yellow-500';
            default: return 'from-gray-400 to-gray-500';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'online': return 'text-emerald-600';
            case 'offline': return 'text-rose-600';
            case 'warning': return 'text-amber-600';
            default: return 'text-gray-600';
        }
    };

    const getStatusBg = (status: string) => {
        switch (status) {
            case 'online': return 'bg-emerald-500/10';
            case 'offline': return 'bg-rose-500/10';
            case 'warning': return 'bg-amber-500/10';
            default: return 'bg-gray-500/10';
        }
    };

    const device = {
        status: "online"
    }

    return (
        <Container padding='sm' radius='xl' className={`grid grid-cols-[220px_1fr] gap-4 ${detailedView ? "lg:grid-cols-[350px_1fr_1fr_1fr_1fr]" : ""} items-center w-full ${className}`}>


            <div className='flex gap-4 items-center w-full  '>

                <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br overflow-hidden from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-l shadow-blue-300/50 hover:shadow-blue-400/60 transition-all duration-300 cursor-pointer group">
                    <Image src={'https://i.pinimg.com/1200x/ad/cd/d1/adcdd107f773d0155042159aafdc40e3.jpg'} height={100} width={100} alt='files'/>
                </div>
                <Container className='truncate'>

                    <Link className='' href={'/user/screens/device'}>
                        <Typography weight='medium' className='text-sm truncate mb-1 w-full'>Phoenix Shuttel Sirvice.jpeg</Typography>
                    </Link>                   
                    {/* <Container className='flex gap-2 items-center'>
                        <p className='text-xs flex items-center gap-1 text-gray-500'> <MapPin size={14} />Location</p>
                    </Container> */}
                </Container>
            </div>
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>
                <Typography variant='caption'>IMAGE</Typography>
            </div>
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>
                <Typography variant='caption'>10 MB</Typography>
            </div>
           
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>

                <Container radius='md' padding='sm' className='border border-gray-300 flex justify-around gap-6 items-center '>
                    <div className='flex gap-1 items-center'>
                        <ListVideo size={16} />
                        <Caption>10</Caption>
                    </div>
                   
                    <div className='flex gap-1 items-center'>
                        <Volume1 size={16} />
                        <Caption>0</Caption>
                    </div>
                </Container>

            </div>
            <div className="ms-auto flex items-center md:hidden">
                <Dropdown >
                    <DropdownTrigger>
                        <Container variant='primary' padding='sm' radius='xl'  >
                            <EllipsisVertical size={16} />
                        </Container>
                    </DropdownTrigger>

                    <DropdownContent align="right" className='p-1 rounded-lg'>
                        <DropdownItem >
                            <div className='flex gap-2 items-center'><Eye size={16} /> View</div>
                        </DropdownItem>
                        <DropdownItem>
                            <div className='flex gap-2 items-center'><Trash size={16} /> Remove</div>
                        </DropdownItem>

                    </DropdownContent>
                </Dropdown>
            </div>
            <div className='justify-end md:flex gap-2 hidden '>
                <Button size='sm' variant='danger'>Remove</Button>
            </div>
        </Container>
    )
}

export default PlaylistItem