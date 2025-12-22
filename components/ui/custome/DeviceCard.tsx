import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Map, MapPin, Monitor } from 'lucide-react'
import React from 'react'

function DeviceCard() {
    return (
        <Container padding='md' variant='primary' radius='xl' >
            <Container className='flex gap-2'>
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-300/50 hover:shadow-blue-400/60 hover:scale-110 transition-all duration-300 cursor-pointer group">
                    <Monitor className="w-5 h-5 text-white group-hover:scale-125 transition-transform" />
                </div>
                <div className=' w-full truncate'>
                    <Typography weight='medium'  className='text-sm truncate mb-1'>Phoenix Citadel Main Entrance andofldfl</Typography>
                    <p className='text-xs flex items-center gap-1 text-gray-500'> <MapPin size={14}/> Lorem, ipsum dolor.</p>
                </div>
            </Container>
        </Container>
    )
}

export default DeviceCard