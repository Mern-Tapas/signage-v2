import Container from '@/components/layout/Container'
import DashboardHeader from '@/components/ui/custome/DashboardHeader'
import Sidebar from '@/components/ui/custome/Sidebar'
import React from 'react'
function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen bg-[#f5f7fb] flex overflow-hidden dashboard'>
            <Sidebar />
            <div className='w-full overflow-y-scroll' id='scrollable-container'>
                <div className='max-w-screen-2xl mx-auto'>
                    <Container className='grid gap-4 relative'>
                        <DashboardHeader />
                        <Container padding='md' className='pt-0'>
                            {children}
                        </Container>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default layout