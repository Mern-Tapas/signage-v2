import React from 'react'
import Container from '@/components/layout/Container'
import IconBox from './IconBox'
import { Caption, Typography } from '@/components/typography/typography'
import { Delete, EllipsisVertical, Eye, Menu, Trash, TvMinimal, Video } from 'lucide-react'
import MarqueeText from './MarqueeText'
import { Badge } from './Badge'
import Link from 'next/link'
import Checkbox from './Checkbox'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from './Dropdown'
import { ListVideo, Volume1 } from 'lucide-react'
import Image from 'next/image'

function PlaylistListItem({ className }: { className?: string, }) {
    const [checked, setChecked] = React.useState(false);
    return (
        <Container padding='sm' radius='xl' className={`grid grid-cols-[220px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr_1fr] items-center w-full ${className}`}>


            <div className='flex gap-4 items-center '>

                {/* <IconBox className='shrink-0 border border-gray-200' size='lg' icon={ListVideo} /> */}
                <div className='border border-gray-400 h-12 w-12 overflow-hidden rounded-lg shrink-0'>
                    <Image height={300} width={300} alt='playlist' className='h-full w-full object-cover' src={"/images/creative1.jpg"} />
                </div>
                <Container className=' truncate w-full'>

                    <Link className='' href={'/user/playlists/paylist'}>
                        <Typography variant='body2' weight='normal' className='truncate '>Silver Spring Phase 2 Block A singhaprul dlfo fodf </Typography>

                    </Link>                    {/* <Typography variant='caption' weight='medium'  className='truncate '>Please type here short description mk</Typography> */}
                    <Container className='flex gap-2'>
                        <Caption color='success'>Active</Caption>
                        <Caption color='muted'>10 Videos</Caption>
                    </Container>
                </Container>
            </div>
            <div className='hidden lg:flex '>
                <Typography variant='caption'>WS123840</Typography>
            </div>
            <div className='hidden lg:flex '>
                <Badge size='sm' color='success'>Online</Badge>
            </div>
            <div className='hidden lg:flex '>
                <Container radius='md' padding='sm' className='border border-gray-300 flex justify-around gap-6 items-center '>
                    <div className='flex gap-1 items-center'>
                        <ListVideo size={16} />
                        <Caption>10</Caption>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Video size={16} />
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

export default PlaylistListItem