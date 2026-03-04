import Plan from '@/components/ui/pages/Plan';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Comanany | Playlists",
    description: "Manage your user Ads",
};

function page() {
  return (
    <Plan/>
  )
}

export default page