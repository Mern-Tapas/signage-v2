import UserPlaylists from '@/components/ui/pages/UserPlaylists'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Comanany | Playlists",
    description: "Manage your user Ads",
};

function page() {
  return (
    <UserPlaylists/>
  )
}

export default page