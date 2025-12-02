'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import GeneralSettings from '@/components/ui/pages/GeneralSettings'

function page() {
  const router = useRouter()
  useEffect(() => {
    router.push("settings/general")
  }, [])
  return (
    <GeneralSettings />
  )
}

export default page