import React from 'react'
import Container from '@/components/layout/Container'
import IconBox from './IconBox'
import { Caption, Typography } from '@/components/typography/typography'
import { Image, List, ListVideo, MapPin, Monitor, TvMinimal, Volume1 } from 'lucide-react'
import MarqueeText from './MarqueeText'
import { Badge } from './Badge'
import Link from 'next/link'

function DeviceCard() {
    return (
        <Link href={'/user/screens/deviceid'}>
            <Container variant='primary' padding='sm' radius='xl' className='grid gap-2'>
                <Container className='flex gap-2 items-center'>
                    <div className=' border-gray-400 h-12 w-12 overflow-hidden flex rounded-lg shrink-0'>
                    <Monitor strokeWidth={1.3} size={24} className='text-blue-600 m-auto' />
                    </div>
                    <Container className='w-[70%]'>
                        <Typography variant='body2' weight='normal' className='truncate '>Shalimar Towshipt kanadia road</Typography>
                        {/* <Typography variant='caption' weight='medium'  className='truncate '>Please type here short description mk</Typography> */}
                        <Container className='flex gap-2 items-center'>
                            <MapPin className='text-gray-500' size={14} strokeWidth={1.5}/>
                            <Caption color='muted'>Main Entrance</Caption>
                        </Container>
                    </Container>
                </Container>
                <Container radius='md' padding='sm' className='border border-gray-300 flex justify-around gap-2 items-center'>
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
            </Container>
        </Link>
    )
}

export default DeviceCard