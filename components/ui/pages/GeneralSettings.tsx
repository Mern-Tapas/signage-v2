'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import Avatar from '../custome/Avatar'
import { Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'
import Textarea from '../custome/TextArea'
import { Select } from '../custome/Select'

function GeneralSettings() {

    return (
        <Container className='grid gap-4 self-start'>

            <Container>
                <Typography variant='h4' weight='medium'>General Settings</Typography>
                <Typography variant='body2' color='secondary'>You can find all settings here.</Typography>
            </Container>

            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                <Container className='flex items-center '>
                    <div className="flex items-center gap-4">
                        <Avatar
                            src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
                            alt="User Avatar"
                            size="lg"
                            radius="lg"
                            className="border-white"
                        />
                        <div>
                            <Typography variant='h4' className=''>Tapas Gharami</Typography>
                            <Typography variant="caption" color="muted">cyb6261452510@gmail.com</Typography>

                        </div>
                    </div>
                    <div className="ms-auto flex gap-4">
                        <Button variant='outline' >Change</Button>
                        <Button variant='primary' disabled >Update</Button>
                    </div>
                </Container>
            </Container>


            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                <Typography variant='h6'>Personal Information</Typography>

                <Container className='grid grid-cols-2 gap-4'>
                    <Input
                        label="First Name"
                        variant="default"
                        placeholder="Email address"
                    />
                    <Input
                        label="Last Name"
                        variant="default"
                        placeholder="Email address"
                    />
                    <Input
                        label="Date of Birth"
                        variant="default"
                        placeholder="Email address"
                        type='date'
                    />
                    <Select
                        label="Country"
                        helperText="Choose your country"
                        size="md"
                        options={[
                            { label: "Male", value: "male" },
                            { label: "Female", value: "female" },
                        ]}
                        value={'male'}
                        onChange={() => { }}
                    />


                </Container>

                <div className='flex justify-end'>
                    <Button variant='primary' className=''>Update</Button>

                </div>
            </Container>


            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                <Typography variant='h6'>Contact Details</Typography>

                <Container className='grid grid-cols-2 gap-4'>
                    <Input
                        label="Mobile Number"
                        variant="default"
                        placeholder="Password"
                    />
                    <Input
                        label="Whatsapp Number"
                        variant="default"
                        placeholder="Confirm Password"
                    />
                    <Input
                        label="Email Address"
                        variant="default"
                        placeholder="Password"
                    />
                    <Textarea
                        label="Address"
                        textareaSize="sm"
                        variant="default"
                        radius="md"
                        resize="none"
                        className=""

                    />



                </Container>
                <div className='flex justify-end'>
                    <Button variant='primary' disabled className=''>Update</Button>

                </div>

            </Container>

        </Container>

    )
}

export default GeneralSettings