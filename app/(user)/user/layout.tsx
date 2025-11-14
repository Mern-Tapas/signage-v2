'use client'
import Container from '@/components/layout/Container'
import DashboardHeader from '@/components/ui/custome/DashboardHeader'
import Sidebar from '@/components/ui/custome/Sidebar'
import React from 'react'
import { useState, useEffect } from 'react'

function Layout({ children }: { children: React.ReactNode }) {

    const [isOpen, setOpen] = useState(true)
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {

        const sidebar = localStorage.getItem("sdbr")

        if (sidebar != null) {
            setOpen(JSON.parse(sidebar))
        }


        setMounted(true)

    }, [])


    const sidebarHandler = () => {
        setOpen(!isOpen)
        localStorage.setItem("sdbr", JSON.stringify(!isOpen))
    }

    if (isMounted)
        return (
            <div className='h-screen bg-[#f0f4f7] flex overflow-hidden dashboard'>
                <Sidebar isOpen={isOpen} />
                <div className='w-full overflow-y-scroll' id='scrollable-container'>

                    <DashboardHeader isSidebarOpen={isOpen} sidebarController={() => sidebarHandler()} />
                    <div className='max-w-screen-2xl mx-auto'>
                        <Container className='grid gap-4 relative'>

                            <Container padding='md' className='pt-0'>
                                {children}
                            </Container>
                        </Container>
                    </div>
                </div>
            </div>
        )
}

export default Layout