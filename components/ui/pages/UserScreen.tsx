import React from 'react'
import Container from '@/components/layout/Container'
import { Button } from '../custome/Button'
import { Caption, Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'

function UserScreen() {
    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='bold'>Screen Details</Typography>
                    <Typography variant='body2' color='secondary'>Connect playlist and manage your ads</Typography>


                </Container>

            </Container>

            <Container className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' variant='primary' padding='md' radius='xl' >
                body
            </Container>


        </Container>
    )
}

export default UserScreen