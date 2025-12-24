import React from 'react'
import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import { EllipsisVertical, Eye, MapPin, Monitor, Trash, Volume1 } from 'lucide-react'
import { Badge } from './Badge'
import Link from 'next/link'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from './Dropdown'
import { Image, ListVideo, } from 'lucide-react'


function DeviceList({ className, detailedView = true }: { className?: string, detailedView?: boolean }) {
    return (
        <Container padding='sm' radius='xl' className={`grid grid-cols-[220px_1fr] gap-4 ${detailedView ? "lg:grid-cols-[350px_1fr_1fr_1fr_1fr]" : ""} items-center w-full ${className}`}>


            <div className='flex gap-4 items-center w-full  '>

                <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-300/50 hover:shadow-blue-400/60 transition-all duration-300 cursor-pointer group">
                    <Monitor className="w-5 h-5 text-white  transition-transform" />
                </div>
                <Container className='truncate'>

                    <Link className='' href={'/user/screens/device'}>
                        <Typography weight='medium' className='text-sm truncate mb-1 w-full'>Silver Spring Phase 2 Block A dfhfhfhh</Typography>
                    </Link>                    {/* <Typography variant='caption' weight='medium'  className='truncate '>Please type here short description mk</Typography> */}
                    <Container className='flex gap-2 items-center'>
                        <p className='text-xs flex items-center gap-1 text-gray-500'> <MapPin size={14} />Location</p>
                    </Container>
                </Container>
            </div>
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>
                <Typography variant='caption'>WS123840</Typography>
            </div>
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>
                <Badge size='sm' color='success'>Online</Badge>
            </div>
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>

                <Container radius='md' padding='sm' className='border border-gray-300 flex justify-around gap-6 items-center '>
                    <div className='flex gap-1 items-center'>
                        <ListVideo size={16} />
                        <Caption>10</Caption>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Image size={16} />
                        <Caption>10</Caption>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Volume1 size={16} />
                        <Caption>0</Caption>
                    </div>
                </Container>

            </div>
            <div className="ms-auto flex items-center">
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
        </Container>
    )
}

export default DeviceList