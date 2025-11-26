'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import IconBox from '../custome/IconBox'
import { Database, ExternalLink, Icon, Info, Maximize, ScreenShare, TvMinimal } from 'lucide-react'
import { Badge } from '../custome/Badge'
import AnalyticsCard from '../custome/AnalyticsCard'
import DeviceList from '../custome/DeviceList'
import { Card, CardHeader } from '../custome/Card'
import Link from 'next/link'
import PlaylistListItem from '../custome/PlaylistListItem'
import { Button } from '../custome/Button'

function UserScreen() {
    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='medium'>Screen Details</Typography>
                    <Typography variant='body2' color='secondary'>Connect playlist and manage your ads</Typography>
                </Container>

            </Container>

            <Container className='flex gap-4 flex-col lg:flex-row' variant='default' padding='none'>

                {/* Device Details */}
                <Container className='lg:w-130 w-full gap-4 grid relative shrink-0' variant='primary' padding='md' radius='xl' >
                    <Badge size='sm' variant='filled' color='success' className='absolute top-4 right-4'>Online</Badge>


                    <div className='flex gap-4  w-full'>
                        <div>
                            <IconBox className='shrink-0 border border-gray-200' size='lg' icon={TvMinimal} />
                        </div>
                        <div className='truncate lg:w-80 w-70'>
                            <Typography className='truncate' variant='h4'>Shalimar Township Block A1</Typography>
                            <Typography variant='caption' color='muted'>Lorem ipsum dolor sit amet.</Typography>
                        </div>
                    </div>

                    <Container className='grid gap-6 lg:grid-cols-2  grid-cols-2' variant='outline' padding='md' radius='md'>
                        {/* section 1 */}
                        <div className='flex gap-2  items-center'>
                            <Info size={24} strokeWidth={1.5} className='shrink-0 h-10 w-10 p-2' />
                            <div className='grid'>
                                <Typography variant='caption' color='muted'>DEVICE ID</Typography>
                                <Typography variant='caption' weight='bold'>WITTY12930</Typography>
                            </div>
                        </div>
                        {/* section 2 */}
                        <div className='flex gap-2  items-center'>
                            <Maximize size={24} strokeWidth={1.5} className='shrink-0 h-10 w-10 p-2' />
                            <div className='grid'>
                                <Typography variant='caption' color='muted'>RESOLUTION</Typography>
                                <Typography variant='caption' weight='bold'>8 Gb</Typography>
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className='flex gap-2  items-center'>
                            <Database size={24} strokeWidth={1.5} className='shrink-0 h-10 w-10 p-2' />
                            <div className='grid'>
                                <Typography variant='caption' color='muted'>STORAGE</Typography>
                                <Typography variant='caption' weight='bold'>8 Gb</Typography>
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className='flex gap-2  items-center'>
                            <Database size={24} strokeWidth={1.5} className='shrink-0 h-10 w-10 p-2' />
                            <div className='grid'>
                                <Typography variant='caption' color='muted'>STORAGE</Typography>
                                <Typography variant='caption' weight='bold'>8 Gb</Typography>
                            </div>
                        </div>

                    </Container>

                </Container>

                {/* <div className='grid grid-cols-2 gap-4 w-full'>

                    <AnalyticsCard
                        title="Total Screens"
                        value="2,567"
                        subtitle="45 online currently"
                        icon={ScreenShare}
                        iconVariant="transparant"
                        iconColor="secondary"

                    />
                    <AnalyticsCard
                        title="Total Screens"
                        value="2,567"
                        subtitle="45 online currently"
                        icon={ScreenShare}
                        iconVariant="transparant"
                        iconColor="secondary"

                    />
                    <AnalyticsCard
                        title="Total Screens"
                        value="2,567"
                        subtitle="45 online currently"
                        icon={ScreenShare}
                        iconVariant="transparant"
                        iconColor="secondary"

                    />
                    <AnalyticsCard
                        title="Total Screens"
                        value="2,567"
                        subtitle="45 online currently"
                        icon={ScreenShare}
                        iconVariant="transparant"
                        iconColor="secondary"

                    />
                </div> */}

            </Container>



            <Card radius='xl'>
                <CardHeader >
                    <Container className='flex justify-between' padding='sm'>
                        <div className='flex items-center'>
                            <Typography variant='h6'>Playlists</Typography>
                            {/* <Typography variant='body2' color='muted'>Connected Playlists </Typography> */}
                        </div>
                        <Container className='flex items-center'>
                           <Button variant='primary' className='shadow-md'>Assign Playlist</Button>
                        </Container>
                    </Container>
                </CardHeader>

                <Container variant='primary' padding='md' radius='xl' className='flex flex-col gap-2'>



                    <Container variant='default' padding='sm' radius='xl' className='grid grid-cols-[220px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr_1fr] items-center '>


                        <div className='flex gap-4 items-center '>

                            <Container className=''>

                                <Typography variant='body2' weight='normal' className='truncate '>All Devices</Typography>

                            </Container>
                        </div>
                        <div className='hidden lg:flex '>
                            <Typography variant='body2' weight='normal' className='truncate '>Devices Id</Typography>
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

                    <PlaylistListItem/>
                </Container>
            </Card>

        </Container>
    )
}

export default UserScreen