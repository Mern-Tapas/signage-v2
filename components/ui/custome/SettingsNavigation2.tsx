import Container from '@/components/layout/Container'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SettingsNavigation2() {
    const pathname = usePathname()

    const navItems = [
        { href: '/user/settings/general', label: 'General' },
        { href: '/user/settings/security', label: 'Security' },
        { href: '/user/settings/billing', label: 'Billing' },
        { href: '/user/settings/notifications', label: 'Notifications' },
        { href: '/user/settings/integrations', label: 'Integrations' },
        { href: '/user/settings/api', label: 'API Keys' },
        { href: '/user/settings/team', label: 'Team' }
    ]

    const isActive = (path: string) => pathname === path

    return (
        <Container className='gap-2 flex overflow-x-scroll setting_navigation'>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    className={`shrink-0 p-2 text-sm rounded-lg px-4 transition-colors ${isActive(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                    href={item.href}
                >
                    {item.label}
                </Link>
            ))}
        </Container>
    )
}

export default SettingsNavigation2