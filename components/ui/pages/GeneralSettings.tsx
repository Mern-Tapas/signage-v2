'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import Avatar from '../custome/Avatar'
import { Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'
import Textarea from '../custome/TextArea'
import { Select } from '../custome/Select'
import { Key, User } from 'lucide-react'

function GeneralSettings() {

    return (
        <Container className='grid gap-4 self-start grid-cols-1'>

             <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
                <p className="text-gray-600">Manage your subscription, payment methods, and billing history</p>
            </div>

            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                <Container className='flex gap-4 xl:items-center flex-col xl:flex-row'>
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
                <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                        <User className="text-purple-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Personal Details</h2>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                </div>

                <Container className='grid lg:grid-cols-2 gap-4'>
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
               <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                        <User className="text-green-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Contact Details</h2>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                </div>

                <Container className='grid lg:grid-cols-2 gap-4'>
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