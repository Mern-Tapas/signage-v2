'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/custome/Button'
import { Menu, Bell } from 'lucide-react'
import { ProfileCard } from '@/components/ui/custome/ProfileCard'
import LinkIconButton from '@/components/ui/custome/LinkIconButton'
import { useEffect, useState } from 'react'

function DashboardHeader() {

    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        const container = document.getElementById("scrollable-container");

        if (!container) return; // guard in case element not found

        const handleScroll = () => {
            setScrollPosition(container.scrollTop);
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container padding='md' className={`flex  justify-between items-center sticky top-0 bg-[#f5f7fb] transition-all  ${scrollPosition > 10 ? 'bg-black/50 backdrop-blur-sm ' : ''}  z-10    `}>
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
                <Container variant='primary' padding='sm' radius='xl'  >
                    <ProfileCard variant='right' />
                </Container>
            </Container>
        </Container>
    )
}

export default DashboardHeader