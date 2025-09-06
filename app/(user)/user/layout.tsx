import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import IconBox from '@/components/ui/custome/IconBox'
import LinkIconButton from '@/components/ui/custome/LinkIconButton'
import { ProfileCard } from '@/components/ui/custome/ProfileCard'
import { Bell, ScreenShare } from 'lucide-react'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen bg-[#f5f7fb] flex overflow-hidden dashboard'>
            <div className="sidebar h-full p-4 bg-white w-[240px] lg:block hidden">
                <Container className='flex items-center justify-center mb-8'>
                    <IconBox size='md' variant='transparant' icon={ScreenShare} />
                    <Typography variant='h4' weight='extrabold'>Screen </Typography>
                </Container>
                <Typography variant='overline' >OVERVIEW</Typography>
            </div>
            <div className='w-full '>
                <div className='max-w-screen-2xl mx-auto'>
                    <Container padding='md' className='grid gap-4'>
                        <Container className='flex justify-between items-center'>
                            <Container>
                                <Typography variant='h3'>Dashboard</Typography>
                                <Typography variant='body2' color='muted'>Welcome to your dashboard</Typography>
                            </Container>
                            <Container className='flex gap-2 items-center' >
                                {/* <Container variant='primary' padding='sm' className='rounded-full' > */}
                                <LinkIconButton
                                    href="https://github.com"
                                    icon={Bell}
                                    variant="primary"
                                    size="md"
                                    radius="full"
                                    iconColor="primary"
                                />
                                {/* </Container> */}
                                <Container variant='primary' padding='sm' className='rounded-full' >
                                    <ProfileCard variant='right' />
                                </Container>
                            </Container>
                        </Container>
                        {children}
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default layout