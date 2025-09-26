import React from 'react'
import Container from '@/components/layout/Container'
import IconBox from './IconBox'
import { Caption, Typography } from '@/components/typography/typography'
import {  TvMinimal } from 'lucide-react'

function DeviceCard() {
    return (
        <Container variant='primary' padding='sm' radius='xl' className='flex gap-2 items-center'>
            <IconBox className='shrink-0' size='lg' icon={TvMinimal} />
            <Container className='w-[70%]'>
                <Typography variant='h6' weight='medium' className='truncate m-0'>Shalimar Towshipt kanadia road</Typography>
                <Typography variant='caption' weight='light' className='truncate m-0'>Shalimar Towshipt kanadia road</Typography>
            </Container>
        </Container>
    )
}

export default DeviceCard