import Container from '@/components/layout/Container';
import { Caption, Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import Avatar from '@/components/ui/custome/Avatar';
import IconBox from '@/components/ui/custome/IconBox';
import ProductCard from '@/components/ui/custome/ProductCard';
import { ProfileCard } from '@/components/ui/custome/ProfileCard';
import { File, PlayIcon, PlaySquare, ScreenShare, Users } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react'


function UserDashboard() {
  return (
    <Container className='grid gap-4'>
      <Container className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>

        <AnalyticsCard
          title="Screen"
          value="2,567"
          subtitle="New Users"
          icon={ScreenShare}
          iconVariant="transparant"
          iconColor="secondary"

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
          title="Playlists"
          value="2,567"
          subtitle="New Users"
          icon={PlaySquare}
          iconVariant="transparant"
          iconColor="primary"
        />
        <AnalyticsCard
          title="Shared Playlists"
          value="2,567"
          subtitle="New Users"
          icon={Users}
          iconVariant="transparant"
          iconColor="primary"
        />
        <AnalyticsCard
          title="Users"
          value="2,567"
          subtitle="New Users"
          icon={Users}
          iconVariant="transparant"
          iconColor="primary"
        />

      </Container>
      <Container className='grid gap-4 xl:grid-cols-2' >
        <Container variant='primary' padding='md' radius='xl'>
          <Container >
            <Typography variant="h5" >Recent Files</Typography>
            <Typography variant="body2" color='muted'>Recent Files</Typography>
          </Container>
        </Container>
        <Container variant='primary' padding='md' radius='xl'>
          <Container >
            <Typography variant="h5" >Recent Files</Typography>
            <Typography variant="body2" color='muted'>Recent Files</Typography>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default UserDashboard