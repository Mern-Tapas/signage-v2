import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import { Edit2Icon, ListVideo, PlaySquare } from 'lucide-react'
import React from 'react'
import { Badge } from './Badge'
import Image from 'next/image'
import { Button } from './Button'
import LinkIconButton from './LinkIconButton'
import Link from 'next/link'

function PlaylistCard() {
    return (
        <Container padding='md' variant='primary' radius='xl' className='relative  overflow-hidden grid grid-cols-1 gap-6' >
            <div className='flex gap-3'>
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-pink-500 via-pink-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-300/50 hover:shadow-blue-400/60 transition-all duration-300 cursor-pointer group">
                <ListVideo className="w-5 h-5 text-white  transition-transform" />
            </div>
            <div>
                <Typography variant='h6' weight='normal'> Foods Creatives & Phoenix creative</Typography>
            </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <Typography variant='h3'>04</Typography>
                    <Caption>Total Files</Caption>
                </div>
                <div>
                    <Typography variant='h3'>200</Typography>
                    <Caption>Connected Devices</Caption>
                </div>
            </div>
                <Link href={'/user/playlists/123'} className='text-sm w-full p-2 text-center bg-gray-200 rounded-lg hover:bg-gray-300 transition'>View Detial</Link>
           
        </Container>
    )
}

export default PlaylistCard