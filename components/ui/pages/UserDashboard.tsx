'use client'
import Container from '@/components/layout/Container';
import { Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';

import { Database, File, MoreVertical, PlaySquare, ScreenShare, Timer, } from 'lucide-react';
import React from 'react'
import DeviceTable from '../custome/DeviceTable';
import { Button } from '../custome/Button';
import { Card, CardBody, CardHeader } from '../custome/Card';
import DeviceList from '../custome/DeviceList';
import StackedCircleGraph from '../custome/StackedGraph';

function UserDashboard() {

   const segments = [
    { label: "Math", value: 0, color: "#FCD34D" },
    { label: "English", value: 100, color: "#A78BFA" },
    { label: "Chemistry", value: 100, color: "#34D399" },
  ];

  return (
    <Container className='grid gap-4'>
      <Container>
        <Typography variant='h4' weight='medium'>Dashboard</Typography>
        <Typography variant='body2' color='secondary'>Welcome to your dashboard</Typography>

      </Container>
      {/* <div className="p-4 rounded-xl bg-gradient-to-r from-amber-100 via-yellow-200 to-orange-100 border border-yellow-300 flex items-center justify-between">
        <p className="text-black font-medium">
          You’re currently on the <span className="font-semibold">Free Plan</span>. Upgrade to unlock more features!
        </p>
        <button
          className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold shadow hover:opacity-90 transition"
        >
          Upgrade
        </button>
      </div> */}


      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-100 via-sky-200 to-indigo-100 border border-blue-300 flex items-center justify-between">
        <p className="text-black font-medium">
          You’re currently on the <span className="font-semibold">Free Plan</span>. Upgrade to unlock more features!
        </p>
        <Button variant='primary'>Upgrade</Button>
      </div>
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
      <Container className='grid gap-4 xl:grid-cols-[1fr_1fr_1fr]' >

        <Card radius='xl' variant='default'>
          <CardHeader className='py-4'>
            <Typography weight='medium'>Recent Offline</Typography>
          </CardHeader>
          <CardBody>

            <DeviceList detailedView={false} className='' />
            <DeviceList detailedView={false} className='' />
            <DeviceList detailedView={false} className='' />
            <DeviceList detailedView={false} className='' />

          </CardBody>
        </Card>

        <Card radius='xl' variant='default'>
          <CardHeader className='py-4'>
            <Typography weight='medium'>Recent Offline</Typography>
          </CardHeader>
          <CardBody>

            <DeviceList detailedView={false} className='' />
            <DeviceList detailedView={false} className='' />
            <DeviceList detailedView={false} className='' />
            <DeviceList detailedView={false} className='' />

          </CardBody>
        </Card>

        <Card radius='xl' variant='default'>
          <CardHeader className='py-4 flex items-center justify-between'>
            <Typography  weight='medium'>Display Statistics</Typography>
                <button><MoreVertical size={20} className="text-gray-400" /></button>

          </CardHeader>
          <CardBody>

            
<StackedCircleGraph segments={segments} />
              {/* <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#FCD34D" strokeWidth="20" strokeDasharray="502" strokeDashoffset="100" />
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#A78BFA" strokeWidth="20" strokeDasharray="502" strokeDashoffset="251" />
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#34D399" strokeWidth="20" strokeDasharray="502" strokeDashoffset="377" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-sm text-gray-500">Total</div>
                    <div className="text-3xl font-bold text-gray-800">15000</div>
                  </div>
                </div>
              </div> */}

              {/* <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-gray-600">Math</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span className="text-gray-600">English</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-gray-600">Chemistry</span>
                </div>
              </div> */}

        </CardBody>
      </Card>


    </Container>


    </Container >
  )
}

export default UserDashboard