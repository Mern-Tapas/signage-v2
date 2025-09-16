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
      <Container className='flex items-center gap-2'>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Delete</Button>

        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg" icon={<Plus />}>Large</Button>
      </Container>

      <Container>



        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="danger">Revoke New</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Revoke access</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure? This application will no longer be accessible and any
                existing sessions will be expired.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction >Revoke</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Dialog>
          <DialogTrigger>
            <Button variant="primary">Open Form</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create User</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new user.
              </DialogDescription>
            </DialogHeader>

            <DialogBody>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
                  />
                </div>
              </form>
            </DialogBody>

            <DialogFooter>
              <DialogClose>Cancel</DialogClose>
              <Button variant="primary">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Container>
    </Container>
  )
}

export default UserDashboard