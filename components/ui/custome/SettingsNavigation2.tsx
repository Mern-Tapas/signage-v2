import Container from '@/components/layout/Container'
import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'

function SettingsNavigation2() {
    return (
        <Container className='gap-2 flex overflow-x-scroll setting_navigation'>
            <Link className='p-2 bg-white text-sm text-gray-700 rounded-lg px-4 ' href={'/user/settings/general'}>General</Link>
            <Link className='p-2 bg-white text-sm text-gray-700 rounded-lg px-4 ' href={'/user/settings/notifications'}>Notification</Link>
            <Link className='p-2 bg-white text-sm text-gray-700 rounded-lg px-4 ' href={'/user/settings/security'}>Password</Link>
        </Container>
    )
}

export default SettingsNavigation2