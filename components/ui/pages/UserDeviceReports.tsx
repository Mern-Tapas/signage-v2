'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Select } from '../custome/Select'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'
import { Caption, Typography } from '@/components/typography/typography'
import { Sheet } from 'lucide-react'

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

            <Container padding='lg' variant='primary' radius='xl' className='grid grid-cols-1 gap-4'>
                <Container className='flex justify-between items-center'>
                    <div>
                        <Typography>Hotel Anjushri Lobby</Typography>
                        <Caption>Here is the detailed report of Screen</Caption>
                    </div>
                    <div>
                        <Button className='bg-[#1d6f42] text-white' icon={<Sheet size={16} />}>Download</Button>
                    </div>
                </Container>
                <Container>
                    <table className='border-separate border-spacing-2 border border-gray-400 dark:border-gray-500  w-full'>
                        <thead>
                            <tr className=''>
                                <td className='border'>Sr </td>
                                <td className='border'>Media Name</td>
                                <td className='border'>Date</td>
                                <td className='border'>Start Time</td>
                                <td className='border'>End Time</td>
                            </tr>
                        </thead>
                    </table>
                </Container>

            </Container>



        </Container>

    )
}

export default UserDeviceReport