'use client'
import Container from '@/components/layout/Container';
import { Caption, Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import Avatar from '@/components/ui/custome/Avatar';
import IconBox from '@/components/ui/custome/IconBox';
import ProductCard from '@/components/ui/custome/ProductCard';
import { ProfileCard } from '@/components/ui/custome/ProfileCard';
import { Database, File, PlayIcon, PlaySquare, Plus, ScreenShare, Timer, Users, WatchIcon } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react'
import DeviceTable from '../custome/DeviceTable';
import { Button } from '../custome/Button';


import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/custome/AlertDialog';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@/components/ui/custome/Dialog";
function UserDashboard() {


  return (
    <Container className='grid gap-4'>
      <Container>
        <Typography variant='h4' weight='bold'>Dashboard</Typography>
        <Typography variant='body2'>Welcome to your dashboard</Typography>

      </Container>
      <Container className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>

        <AnalyticsCard
          title="Total Screens"
          value="2,567"
          subtitle="45 online currently"
          icon={ScreenShare}
          iconVariant="transparant"
          iconColor="secondary"

        />
        <AnalyticsCard
          title="Playlists"
          value="2,567"
          subtitle="New Users"
          icon={PlaySquare}
          iconVariant="transparant"
          iconColor="primary"
        />

        <AnalyticsCard
          title="Scheduled Events"
          value="2,567"
          subtitle="New Users"
          icon={Timer}
          iconVariant="transparant"
          iconColor="primary"
        />

        <AnalyticsCard
          title="Files"
          value="267"
          subtitle="2 New Uploads"
          icon={File}
          iconVariant="transparant"
          iconColor="primary"
        />

        <AnalyticsCard
          title="Used Storage"
          value="2,567"
          subtitle="New Users"
          icon={Database}
          iconVariant="transparant"
          iconColor="primary"
        />

      </Container>
      <Container className='grid gap-4 xl:grid-cols-2' >
        <DeviceTable />
        <DeviceTable />
        <DeviceTable />
        <DeviceTable />
      </Container>
    

    </Container>
  )
}

export default UserDashboard