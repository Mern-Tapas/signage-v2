'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Clock, EllipsisVertical, ListVideo, Monitor, PlusIcon, Upload, Video, } from 'lucide-react'
import DeviceList from '../custome/DeviceList'
import { Card, CardHeader } from '../custome/Card'
import { Button } from '../custome/Button'
import CardStack from '../custome/CardStack'
import { Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../custome/Dialog'
import { useRouter } from 'next/navigation'
import FileListView from '../custome/FileListView'
import PlaylistListItem from '../custome/PlaylistListItem'
import PlaylistItem from '../custome/PlaylistItem'

function UserPlaylist() {

    const router = useRouter()
    return (
        <Container className='grid gap-6'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='medium'>Playlist Details</Typography>
                    <Typography variant='body2' color='secondary'>Manage your digital signage content playlist</Typography>
                </Container>

            </Container>

       <Container className="grid" variant="default" radius="xl">

  <Container
    padding="lg"
    radius="xl"
    variant="primary"
    className="relative overflow-hidden"
  >

    {/* Gradient Background */}

    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-blue-500/15 pointer-events-none" />

    <div className="relative flex lg:flex-row flex-col gap-6 justify-between lg:items-center">

      {/* LEFT SECTION */}

      <div className="flex gap-4 items-start">

        {/* ICON */}

        <div className="flex h-14 w-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-md shrink-0">
          <ListVideo className="m-auto text-white" size={24}/>
        </div>

        {/* TITLE + INFO */}

        <div className="max-w-xl">

          <Typography variant="h4" weight="bold">
            Phoenix Creatives Advertisment Power point
          </Typography>

          <Typography variant="body2" color="muted">
            Connect playlist and manage your ads
          </Typography>

          {/* META */}

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">

            <span>12 Items</span>

            <span>45 sec Duration</span>

            <span>5 Screens</span>

            <span>Updated 2h ago</span>

          </div>

        </div>

      </div>


      {/* RIGHT ACTIONS */}

      <div className="flex gap-2 flex-wrap items-center">

        <Button
          size="sm"
          variant="outline"
          icon={<Upload size={16}/>}
        >
          Assign
        </Button>

        <Button
          size="sm"
          variant="outline"
        >
          Preview
        </Button>

        <Button
          size="sm"
          variant="primary"
        >
          Publish
        </Button>

        <Button
          size="icon"
          variant="outline"
          icon={<EllipsisVertical size={16}/>}
        />

      </div>

    </div>

  </Container>

</Container>



            <Card radius='xl'>
                <CardHeader >
                    <Container className='flex justify-between' padding='sm'>
                        <div className='items-center flex'>
                            <Typography variant='h6'>Playlist Items</Typography>
                            {/* <Typography variant='body2' color='muted'>Playlist Items</Typography> */}
                        </div>
                        <Container className='flex items-center'>



                            <Button variant="primary" onClick={() => { router.push('/user/playlists/paylist/media') }} className='shadow-md md:flex hidden' size='md' icon={<PlusIcon size={18} strokeWidth={1.5} />}>Add Content</Button>
                            <Button variant="primary" className='shadow-md md:hidden flex' size='icon' icon={<PlusIcon size={18} strokeWidth={1.5} />}></Button>


                        </Container>
                    </Container>
                </CardHeader>

                <Container variant='primary' padding='md' radius='xl' className='flex flex-col gap-2'>



                    <Container variant='default' padding='sm' radius='xl' className='grid grid-cols-[220px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr_1fr] items-center '>


                        <div className='flex gap-4 items-center '>

                            <Container className=''>

                                <Typography variant='body2' weight='normal' className='truncate '>File Name</Typography>

                            </Container>
                        </div>
                        <div className='hidden lg:flex '>
                            <Typography variant='body2' weight='normal' className='truncate '>File Type</Typography>
                        </div>
                        <div className='hidden lg:flex '>
                            <Typography variant='body2' weight='normal' className='truncate '>Status</Typography>
                        </div>
                        <div className='hidden lg:flex '>
                            <Typography variant='body2' weight='normal' className='truncate '>Status</Typography>
                        </div>
                        <div className="ms-auto flex items-center">
                            <Typography variant='body2' weight='normal' className='truncate '>Action</Typography>

                        </div>
                    </Container>

                    <PlaylistItem />
                </Container>
            </Card>

        </Container>
    )
}

export default UserPlaylist