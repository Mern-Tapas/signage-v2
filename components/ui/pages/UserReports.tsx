'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import Avatar from '../custome/Avatar'
import { Typography } from '@/components/typography/typography'
import { Button } from '../custome/Button'

function UserReports() {

    return (
        <Container className='grid gap-4 self-start grid-cols-1'>

            <Container>
                <Typography variant='h4' weight='medium'>General Settings</Typography>
                <Typography variant='body2' color='secondary'>You can find all settings here.</Typography>
            </Container>

            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
              d
            </Container>


           

        </Container>

    )
}

export default UserReports