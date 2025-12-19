'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Select } from '../custome/Select'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'
import { Typography } from '@/components/typography/typography'

function UserDeviceReport() {

    return (
        <Container className='grid gap-4 self-start grid-cols-1'>



            <Container variant='primary' padding='lg' className='grid md:grid-cols-3 xl:grid-cols-4 gap-4 self-start items-end' radius='xl'>
                <Select
                    label="Select Device"
                    size="md"
                    options={[
                        { label: "Hotel Anjushri Lobby", value: "Hotel_Anjushri_Lobby" },
                        { label: "Phoenix Lobby", value: "Phoenix_Lobby" },

                    ]}
                    value={'Phoenix_Lobby'}
                    onChange={() => { }}
                />

                <Input
                    label="From"
                    variant="default"
                    placeholder="Email address"
                    type='date'
                />
                <Input
                    label="To"
                    variant="default"
                    placeholder="Email address"
                    type='date'

                />
                <Button variant='primary' size='md' className='py-3 rounded-lg' >Get Report</Button>


            </Container>

            <Container padding='lg' variant='primary' radius='xl'>
                <Container>
                    <Typography>Hotel Anjushri Lobby</Typography>
                </Container>

            </Container>



        </Container>

    )
}

export default UserDeviceReport