import Container from '@/components/layout/Container'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function ReportsTab() {
    const pathname = usePathname()

    const navItems = [
        { href: '/user/reports/device', label: 'Device Log Report' },
        { href: '/user/reports/media', label: 'Media Log Report' },
    ]

    const isActive = (path: string) => pathname === path

    return (
        <Container className='gap-2 flex overflow-x-scroll setting_navigation bg-white w-fit rounded-xl p-2'>
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

export default ReportsTab