import UserPlaylist from '@/components/ui/pages/UserPlaylist'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <UserPlaylist />
            <div className='absolute top-0 '>
                
                {children}
            </div>
        </>
    )
}

export default layout