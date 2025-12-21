import UserPlaylist from '@/components/ui/pages/UserPlaylist'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <UserPlaylist />
            {children}
        </>
    )
}

export default layout