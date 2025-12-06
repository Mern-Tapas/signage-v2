import UserFiles from '@/components/ui/pages/UserFiles'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Company | Files",
    description: "Manage your user Ads",
};


function page() {
    return (
        <UserFiles />
    )
}

export default page