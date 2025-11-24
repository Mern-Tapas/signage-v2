import React from 'react'
import Container from '@/components/layout/Container'
import IconBox from './IconBox'
import { Caption, Typography } from '@/components/typography/typography'
import { Video, List, ListVideo, TvMinimal, Volume1, PlaySquare,File } from 'lucide-react'
import MarqueeText from './MarqueeText'
import { Badge } from './Badge'
import Link from 'next/link'
import ImageBox from './ImageBox'
import Image from 'next/image'

function PlaylistCard() {
    return (
        <Container variant='primary' padding='sm' radius='xl' className='gap-2'>
            <Container className='flex gap-2 items-center'>
                <div className=' border-gray-400 h-12 w-12 overflow-hidden flex rounded-lg shrink-0'>
                    <PlaySquare strokeWidth={1.3} size={24} className='text-pink-600 m-auto' />
                </div>
                <Container className='w-[70%]'>
                    <Link href={'/user/playlists/123'}>

                        <Typography variant='body2' weight='normal' className='truncate '>Shalimar Towshipt kanadia road</Typography>
                    </Link>
                    {/* <Typography variant='caption' weight='medium'  className='truncate '>Please type here short description mk</Typography> */}
                    <Container className='flex gap-2'>
                        <Caption color='success'>Online</Caption>
                        <Caption color='muted'>10 Videos</Caption>
                    </Container>
                </Container>
            </Container>
            <Container radius='md' padding='sm' className='border border-gray-300 grid grid-cols-2 justify-items-center items-center '>
                <div className='flex gap-1 items-center'>
                    <ListVideo size={16} />
                    <Caption>10</Caption>
                </div>
                <div className='flex gap-1 items-center'>
                    <File size={16} />
                    <Caption>10</Caption>
                </div>

            </Container>
        </Container>
    )
}

export default PlaylistCard