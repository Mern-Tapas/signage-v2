import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import {
  Monitor,
  MapPin,
  WifiOff,
  EllipsisVertical,
  Eye,
  Trash
} from 'lucide-react'
import Link from 'next/link'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from './Dropdown'
import { Button } from './Button'

function RecentOfflineItem({ className }: { className?: string }) {

  const device = {
    status: "offline"
  }

  return (
    <Container
      padding='sm'
      radius='xl'
      className={`grid grid-cols-[220px_1fr_auto] items-center gap-4 w-full border border-gray-100 hover:bg-gray-50 transition-all duration-200 ${className}`}
    >

      {/* Left Section */}
      <div className='flex gap-4 items-center w-full'>

        {/* Icon */}
        <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-rose-500 via-rose-600 to-red-600 flex items-center justify-center shadow-lg shadow-rose-200/50">
          <Monitor className="w-5 h-5 text-white" />
        </div>

        <Container className='truncate'>

          <Link href={'/user/screens/device'}>
            <Typography weight='medium' className='text-sm truncate mb-1'>
              Silver Spring Phase 2 Block A
            </Typography>
          </Link>

          <Container className='flex gap-3 items-center text-xs text-gray-500'>

            <span className='flex items-center gap-1'>
              <MapPin size={13} />
              Location
            </span>

            <span className='flex items-center gap-1 text-rose-600 font-medium'>
              <WifiOff size={13} />
              Offline
            </span>

          </Container>
        </Container>
      </div>

      {/* Desktop Actions */}
      <div className='justify-end md:flex gap-2 hidden'>
        <Button size='sm' variant='outline'>View</Button>
      </div>

      {/* Mobile Dropdown */}
      <div className="ms-auto flex items-center md:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Container padding='sm' radius='xl'>
              <EllipsisVertical size={16} />
            </Container>
          </DropdownTrigger>

          <DropdownContent align="right" className='p-1 rounded-lg'>
            <DropdownItem>
              <div className='flex gap-2 items-center'>
                <Eye size={16} /> View
              </div>
            </DropdownItem>
            <DropdownItem>
              <div className='flex gap-2 items-center'>
                <Trash size={16} /> Delete
              </div>
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>

    </Container>
  )
}

export default RecentOfflineItem