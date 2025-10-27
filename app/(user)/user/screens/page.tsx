
import UserScreen from '@/components/ui/pages/UserScreens';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Screens",
    description: "Manage your user Screens and settings",
};


function page() {
    return <UserScreen />
}

export default page