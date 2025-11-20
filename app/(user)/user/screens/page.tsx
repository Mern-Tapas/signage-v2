
import UserScreen from '@/components/ui/pages/UserScreens';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Comanany | Screens",
    description: "Manage your user Ads",
};


function page() {
    return <UserScreen />
}

export default page