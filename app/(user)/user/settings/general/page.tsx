import GeneralSettings from '@/components/ui/pages/GeneralSettings'
import React from 'react'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Company | General Settings",
    description: "Manage your user Ads",
};

function page() {
   
    return (
        <GeneralSettings />
    )
}

export default page