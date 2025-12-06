import UserSheduler from '@/components/ui/pages/UserSheduler'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Company | Shedulers",
    description: "Manage your user Ads",
};

function page() {
  return (
   <UserSheduler/>
  )
}

export default page