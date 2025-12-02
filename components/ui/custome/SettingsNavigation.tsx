import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import NavLink from './NavLink'
import { Settings, Shield, Palette, CreditCard, User } from "lucide-react";



function SettingsNavigation() {
    const menuItems = [
        { label: 'General', icon: User },
        { label: 'Access & User', icon: Settings },
        { label: 'Privacy & Security', icon: Shield },
        { label: 'Branding', icon: Palette },
        { label: 'Billing', icon: CreditCard },
    ];
    return (
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

    )
}

export default SettingsNavigation