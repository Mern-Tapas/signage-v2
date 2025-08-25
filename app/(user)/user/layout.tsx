import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen bg-[#f8f9fc] flex overflow-hidden dashboard'>
            <div className="sidebar h-full p-2 bg-white w-[220px]"></div>
            <div className='w-full'>
                <div className='max-w-screen-2xl mx-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout