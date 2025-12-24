import UserScreen from '@/components/ui/pages/UserScreen'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <UserScreen />
            <div className='absolute top-0 '>
                
                {children}
            </div>
        </>
    )
}

export default layout