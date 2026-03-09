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
            {/* profile */}
            <Container
                variant="primary"
                padding="lg"
                radius="xl"
                className="relative overflow-hidden flex flex-col gap-6"
            >

                {/* Gradient Background */}

                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

                <div className="relative flex flex-col xl:flex-row gap-6 xl:items-center">

                    {/* LEFT */}

                    <div className="flex items-center gap-4">

                        <Avatar
                            src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
                            alt="User Avatar"
                            size="lg"
                            radius="lg"
                            className="border-2 border-white shadow-md"
                        />

                        <div className="flex flex-col">

                            <Typography variant="h4">
                                Tapas Gharami
                            </Typography>

                            <Typography variant="caption" color="muted">
                                cyb6261452510@gmail.com
                            </Typography>

                            {/* small meta */}

                            <div className="flex gap-3 mt-1 text-xs text-gray-500">

                                <span>Admin</span>

                                <span>•</span>

                                <span>Last login 2h ago</span>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT ACTIONS */}

                    <div className="xl:ms-auto flex gap-2">

                        <Button
                            variant="outline"
                        >
                            Change Avatar
                        </Button>

                        <Button
                            variant="primary"
                            disabled
                        >
                            Update Profile
                        </Button>

                    </div>

                </div>

            </Container>
            {/* profile */}


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