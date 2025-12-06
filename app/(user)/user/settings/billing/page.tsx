import Billing from '@/components/ui/pages/Billing'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Company | Billing",
    description: "Manage your user Ads",
};

function page() {
    return (
       <Billing/>
    )
}

export default page