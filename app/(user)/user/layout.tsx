import Container from '@/components/layout/Container'
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
                        <Container className='flex justify-end items-center'>
                            Header
                        </Container>
                        {children}
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default layout