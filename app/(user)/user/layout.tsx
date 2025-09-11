import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import IconBox from '@/components/ui/custome/IconBox'
import LinkIconButton from '@/components/ui/custome/LinkIconButton'
import { ProfileCard } from '@/components/ui/custome/ProfileCard'
import { Bell, Menu, } from 'lucide-react'
import Sidebar from '@/components/ui/custome/Sidebar'
import React from 'react'
import { Button } from '@/components/ui/custome/Button'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen bg-[#f5f7fb] flex overflow-hidden dashboard'>
            <Sidebar />
            <div className='w-full overflow-y-scroll'>
                <div className='max-w-screen-2xl mx-auto'>
                    <Container padding='md' className='grid gap-8 relative'>
                        <Container className='flex justify-between items-center sticky top-0 bg-[#f5f7fb] left-o'>
                            <Container>
                                <Button size='icon' icon={<Menu />} />
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