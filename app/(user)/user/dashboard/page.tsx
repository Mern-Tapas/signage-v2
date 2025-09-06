import Container from '@/components/layout/Container';
import { Caption, Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import Avatar from '@/components/ui/custome/Avatar';
import IconBox from '@/components/ui/custome/IconBox';
import ProductCard from '@/components/ui/custome/ProductCard';
import { ProfileCard } from '@/components/ui/custome/ProfileCard';
import UserDashboard from '@/components/ui/pages/UserDashboard';
import { File, ScreenShare, Users } from 'lucide-react';
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