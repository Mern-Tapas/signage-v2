'use client'
import Container from '@/components/layout/Container';
import {  Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';

import { Database, File,  PlaySquare, ScreenShare, Timer, } from 'lucide-react';
import React from 'react'
import DeviceTable from '../custome/DeviceTable';

function UserDashboard() {


  return (
    <Container className='grid gap-4'>
      <Container>
        <Typography variant='h4' weight='medium'>Dashboard</Typography>
        <Typography variant='body2' color='secondary'>Welcome to your dashboard</Typography>

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