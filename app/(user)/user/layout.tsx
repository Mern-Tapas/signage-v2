import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import LinkIconButton from '@/components/ui/custome/LinkIconButton'
import { ProfileCard } from '@/components/ui/custome/ProfileCard'
import { Bell, Github, Linkedin } from 'lucide-react'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen bg-[#f8f9fc] flex overflow-hidden dashboard'>
            <div className="sidebar h-full p-4 bg-black w-[240px] ">
                Sidebar
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