'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import { CreditCard, Link2, Palette, PlusCircle, Search, Shield } from 'lucide-react'
import Link from 'next/link'
import IconBox from '../custome/IconBox'
import { Settings } from 'lucide-react'
import NavLink from '../custome/NavLink'
import HorizontalScrollMenu from '../custome/HorizontalScrollMenu'
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
                    <Typography variant='h4' weight='bold'>Settings</Typography>
                    <Typography variant='body2' color='secondary'>Customize your signage preference</Typography>
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

                <HorizontalScrollMenu className='lg:hidden' />


                <Container padding='lg' variant='primary' className='flex flex-col gap-4' radius='xl'>
                    <Container >
                        <Typography variant='h6' weight='medium'>General Information</Typography>
                        <Typography variant='body2' color='secondary'>Update generale settings from here</Typography>

                    </Container>

                    <Container className='grid grid-cols-2 gap-4'>
                        <Input
                            label="default Input"
                            variant="default"
                            placeholder="Email address"
                        />
                        <Input
                            label="default Input"
                            variant="default"
                            placeholder="Email address"
                        />
                        <Input
                            label="default Input"
                            variant="default"
                            placeholder="Email address"
                        />
                        <Input
                            label="default Input"
                            variant="default"
                            placeholder="Email address"
                        />
                    </Container>

                    <Container variant='outline' padding='md' radius='md' className='flex gap-4 items-center'>
                        <Container>
                            <Typography variant='h6' weight='medium'>Private profile</Typography>
                            <Typography variant='body2' color='secondary'>When your profile is private, only the people you approve can see your profile, Pins, boards, followers and following lists.</Typography>
                        </Container>
                        <Container className='w-10'>
                            d
                        </Container>
                    </Container>
                </Container>

            </Container>


        </Container>
    )
}

export default UserSettings