
import UserDashboard from '@/components/ui/pages/UserDashboard';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Manage your user dashboard and settings",
};


function page() {
  return <UserDashboard />
}

export default page