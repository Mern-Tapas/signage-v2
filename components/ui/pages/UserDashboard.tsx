'use client'
import Container from '@/components/layout/Container';
import { Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import { Database, File, MoreVertical, PlaySquare, ScreenShare, Timer, } from 'lucide-react';
import React from 'react'
import { Button } from '../custome/Button';
import { Card, CardBody, CardHeader } from '../custome/Card';
import DeviceList from '../custome/DeviceList';
import StackedCircleGraph from '../custome/StackedGraph';
import RecentOfflineItem from '../custome/RecentOfflineItem';
import Link from 'next/link';

function UserDashboard() {

  const segments = [
    { label: "Math", value: 0, color: "#FCD34D" },
    { label: "English", value: 100, color: "#A78BFA" },
    { label: "Chemistry", value: 100, color: "#34D399" },
  ];

  return (
    <Container className='grid gap-6'>
      <Container>
        <Typography variant='h4' weight='medium'>Dashboard</Typography>
        <Typography variant='body2' color='secondary'>Welcome to your dashboard</Typography>

      </Container>



      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-100 via-sky-200 to-indigo-100 border border-blue-300 flex items-center justify-between">
        <p className="text-black font-medium">
          You’re currently on the <span className="font-semibold">Free Plan</span>. Upgrade to unlock more features!
        </p>
        <Button variant='primary'><Link href={'/user/plan'}>Upgrade</Link></Button>
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
      <Container className='grid gap-4 xl:grid-cols-[2fr_1fr]' >



        <Card radius='xl' className='shrink-0' variant='default'>
          <CardHeader className='py-4'>
            <Typography weight='medium'>Recent Offline</Typography>
          </CardHeader>
          <CardBody>
            <RecentOfflineItem />
            <RecentOfflineItem />
            <RecentOfflineItem />
            <RecentOfflineItem />
            <RecentOfflineItem />
          </CardBody>
        </Card>




        <Card radius='xl' variant='default'>
          <CardHeader className='py-4 flex items-center justify-between'>
            <Typography weight='medium'>Display Statistics</Typography>
            <button><MoreVertical size={20} className="text-gray-400" /></button>

          </CardHeader>
          <CardBody>


            <StackedCircleGraph segments={segments} />


          </CardBody>
        </Card>

      </Container>



      {/* ================= NEW BOTTOM SECTION ================= */}

      <Container className="grid gap-4 xl:grid-cols-2">

        {/* Today's Schedule */}
        <Card radius="xl" variant="default">
          <CardHeader className="py-4 flex items-center justify-between">
            <Typography weight="medium">Today&apos;s Schedule</Typography>
            <Button size="sm" variant="ghost">View All</Button>
          </CardHeader>

          <CardBody className="space-y-4">

            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div>
                <Typography className="text-sm font-medium">
                  Morning Promotion
                </Typography>
                <Typography variant="caption" color="secondary">
                  06:00 AM - 11:00 AM
                </Typography>
              </div>
              <span className="text-xs text-emerald-600 font-medium">
                Running
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div>
                <Typography className="text-sm font-medium">
                  Lunch Offers
                </Typography>
                <Typography variant="caption" color="secondary">
                  12:00 PM - 03:00 PM
                </Typography>
              </div>
              <span className="text-xs text-gray-500">
                Upcoming
              </span>
            </div>

          </CardBody>
        </Card>


        {/* Recent Uploads */}
        <Card radius="xl" variant="default">
          <CardHeader className="py-4 flex items-center justify-between">
            <Typography weight="medium">Recent Uploads</Typography>
            <Button size="sm" variant="ghost">Manage Files</Button>
          </CardHeader>

          <CardBody className="space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <File size={18} className="text-blue-500" />
              </div>
              <div>
                <Typography className="text-sm font-medium">
                  Summer Campaign.mp4
                </Typography>
                <Typography variant="caption" color="secondary">
                  120 MB • Uploaded 2h ago
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                <File size={18} className="text-purple-500" />
              </div>
              <div>
                <Typography className="text-sm font-medium">
                  Menu Display.png
                </Typography>
                <Typography variant="caption" color="secondary">
                  2.3 MB • Uploaded 5h ago
                </Typography>
              </div>
            </div>

          </CardBody>
        </Card>

      </Container>



      {/* ================= ACTIVITY TIMELINE ================= */}

      <Container>
        <Card radius="xl" variant="default">
          <CardHeader className="py-4 flex items-center justify-between">
            <Typography weight="medium">Recent Activity</Typography>
            <Button size="sm" variant="ghost">View Logs</Button>
          </CardHeader>

          <CardBody className="space-y-4">

            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Screen <span className="font-medium">WS123840</span> came online
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
              Screen <span className="font-medium">WS839201</span> went offline
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              New playlist published
            </div>

          </CardBody>
        </Card>
      </Container>


    </Container >
  )
}

export default UserDashboard