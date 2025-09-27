import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import { Search } from 'lucide-react'
import Link from 'next/link'
import IconBox from '../custome/IconBox'
import { Settings } from 'lucide-react'
function UserSettings() {
    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='bold'>Settings</Typography>
                    <Typography variant='body2' color='secondary'>Customize your signage preference</Typography>


                </Container>

            </Container>
            <Container className='grid gap-4 grid-cols-[1fr_3.5fr]'>
                <Container padding='lg' variant='primary' className='grid gap-2 self-start' radius='xl'>
                    <Typography variant='overline' weight='medium' className="">Menu</Typography>

                    <Container className='grid gap-2'>
                        <Link href={'/user/components'} className="p-2 flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                            {/* <IconBox size='md' variant='transparant' icon={Settings} /> */}
                            <Typography variant='body2' color='secondary' className="">General</Typography>
                        </Link>
                        <Link href={'/user/components'} className="p-2 flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                            {/* <IconBox size='md' variant='transparant' icon={Settings} /> */}
                            <Typography variant='body2' color='secondary' className="">Access & User</Typography>
                        </Link>
                        <Link href={'/user/components'} className="p-2 flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                            {/* <IconBox size='md' variant='transparant' icon={Settings} /> */}
                            <Typography variant='body2' color='secondary' className="">Privacy & Security</Typography>
                        </Link>
                        <Link href={'/user/components'} className="p-2 flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                            {/* <IconBox size='md' variant='transparant' icon={Settings} /> */}
                            <Typography variant='body2' color='secondary' className="">Branding</Typography>
                        </Link>
                        <Link href={'/user/components'} className="p-2 flex items-center cursor-pointer gap-1 hover:bg-gray-100 rounded-md transition-bg">
                            {/* <IconBox size='md' variant='transparant' icon={Settings} /> */}
                            <Typography variant='body2' color='secondary' className="">Billing</Typography>
                        </Link>
                    </Container>
                </Container>
                <Container padding='lg' variant='primary' className='flex flex-col gap-4' radius='xl'>
                    <Container >
                        <Typography variant='h6' weight='medium'>General Settings</Typography>
                        <Typography variant='body2' color='secondary'>Update generale settings from here</Typography>

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
                    <Container variant='outline' padding='md' radius='md' className='flex gap-4 items-center'>
                        <Container>
                            <Typography variant='h6' weight='medium'>Private profile</Typography>
                            <Typography variant='body2' color='secondary'>When your profile is private, only the people you approve can see your profile, Pins, boards, followers and following lists.</Typography>
                        </Container>
                        <Container className='w-10'>
                            d
                        </Container>
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
                    <Container variant='outline' padding='md' radius='md' className='flex gap-4 items-center'>
                        <Container>
                            <Typography variant='h6' weight='medium'>Private profile</Typography>
                            <Typography variant='body2' color='secondary'>When your profile is private, only the people you approve can see your profile, Pins, boards, followers and following lists.</Typography>
                        </Container>
                        <Container className='w-10'>
                            d
                        </Container>
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
                    <Container variant='outline' padding='md' radius='md' className='flex gap-4 items-center'>
                        <Container>
                            <Typography variant='h6' weight='medium'>Private profile</Typography>
                            <Typography variant='body2' color='secondary'>When your profile is private, only the people you approve can see your profile, Pins, boards, followers and following lists.</Typography>
                        </Container>
                        <Container className='w-10'>
                            d
                        </Container>
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