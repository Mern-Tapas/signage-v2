'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import { CreditCard, Palette, Shield } from 'lucide-react'
import { Settings } from 'lucide-react'
import NavLink from '../custome/NavLink'
import HorizontalScrollMenu from '../custome/HorizontalScrollMenu'
import { Separator } from '../custome/Seprator'
import { Button } from '../custome/Button'
function UserSettings() {

    const menuItems = [
        { label: 'Access & User', icon: Settings },
        { label: 'Privacy & Security', icon: Shield },
        { label: 'Branding', icon: Palette },
        { label: 'Billing', icon: CreditCard },
    ];



    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between '>
                <Container>
                    <Typography variant='h4' weight='medium'>Settings</Typography>
                    <Typography variant='body2' color='secondary'>You can find all settings here.</Typography>
                </Container>

            </Container>
            <Container className='grid gap-4 lg:grid-cols-[270px_auto]'>

                <Container padding='lg' variant='primary' className='hidden gap-8 self-start lg:grid' radius='xl'>
                    <Container className='grid gap-4'>
                        <Typography variant='overline' weight='medium' className="">YOUR ACCOUNT</Typography>
                        <Container className='grid gap-1'>



                            {menuItems.map(({ label, icon: Icon }, index) => (

                                <NavLink key={index} href={"/"} icon={Icon} label={label} />
                            ))}


                        </Container>
                    </Container>
                    <Container className='grid gap-4'>
                        <Typography variant='overline' weight='medium' className="">YOUR ACCOUNT</Typography>
                        <Container className='grid gap-1'>

                            {menuItems.map(({ label, icon: Icon }, index) => (

                                <NavLink key={index} href={"/"} icon={Icon} label={label} />
                            ))}


                        </Container>
                    </Container>
                </Container>

                {/* <HorizontalScrollMenu className='lg:hidden' /> */}


                <Container className='grid gap-4'>
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
                                label="First Name"
                                variant="default"
                                placeholder="Email address"
                            />
                            <Input
                                label="Last Name"
                                variant="default"
                                placeholder="Email address"
                            />

                        </Container>

                        <div className='flex justify-end'>
                            <Button variant='primary' className=''>Update</Button>

                        </div>
                    </Container>

                    <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                        <Typography variant='h6'>Security Information</Typography>

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


            </Container>


        </Container>
    )
}

export default UserSettings