'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'

function PasswordSettings() {
    return (
        <Container className='grid gap-4 self-start'>

            <Container>
                <Typography variant='h4' weight='medium'>Security Settings</Typography>
                <Typography variant='body2' color='secondary'>You can find all settings here.</Typography>
            </Container>


            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                <Typography variant='h6'>Password Information</Typography>

                <Container className='grid grid-cols-2 gap-4'>
                    <Input
                        label="Password"
                        variant="default"
                        placeholder="Password"
                        helperText='Password must be 8–12 characters long and include at least one lowercase and one uppercase letter.'
                    />
                    <Input
                        label="Confirm Password"
                        variant="default"
                        placeholder="Confirm Password"
                        helperText='Confirm Password must match the Password exactly and follow the same password rules.'
                    />


                </Container>
                <div className='flex justify-end'>
                    <Button variant='primary' className=''>Update</Button>

                </div>

            </Container>

        </Container>
    )
}

export default PasswordSettings