'use client'
import UserReports from '@/components/ui/pages/UserDeviceReports'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function page() {

   const router = useRouter()
    useEffect(() => {
      router.push("reports/device")
    }, [])
  return (
    <UserReports/>
  )
}

export default page