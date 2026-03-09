'use client'
import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import { Select } from '../custome/Select'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'
import { Caption, Typography } from '@/components/typography/typography'
import { BoxIcon, FileSpreadsheet, FileText, MonitorPlay } from 'lucide-react'
import PlaybackLogsTable from '../custome/PlaybackLogsTable'
import EmptyState from '../custome/EmptyState'

function UserDeviceReport() {

    const [value, setValue] = useState<string>("")

    const playbackLogs = [
        {
            id: "1",
            filename: "summer-sale.mp4",
            playlist: "Morning Ads",
            startTime: "2026-05-20 10:00 AM",
            endTime: "2026-05-20 10:00:30 AM",
            duration: "30 sec"
        },
        {
            id: "2",
            filename: "summer-sale.mp4",
            playlist: "Morning Ads",
            startTime: "2026-05-20 10:00 AM",
            endTime: "2026-05-20 10:00:30 AM",
            duration: "30 sec"
        },
    ]

    return (

        <Container className='grid gap-6'>

            {/* FILTER SECTION */}

            <Container
                variant="primary"
                padding="lg"
                radius="xl"
                className="relative "
            >
                {/* subtle gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/40 via-transparent to-purple-50/40 pointer-events-none" />

                <div className="relative grid md:grid-cols-4 gap-5 items-end">

                    {/* Title */}
                    <div className="md:col-span-4 mb-1">
                        <Typography weight="bold">Generate Device Report</Typography>
                        <Caption color="muted">
                            Select device and date range to view playback logs
                        </Caption>
                    </div>

                    {/* Device Select */}
                    <div className="space-y-1">
                        <Caption color="muted">Device</Caption>
                        <Select
                            size="md"
                            options={[
                                { label: "Hotel Anjushri Lobby", value: "Hotel Anjushri Lobby" },
                                { label: "Phoenix Lobby", value: "Phoenix Lobby" },
                            ]}
                            value={value}
                            onChange={(v) => setValue(v as string)}
                        />
                    </div>

                    {/* From Date */}
                    <div className="space-y-1">
                        <Caption color="muted">From</Caption>
                        <Input type="date" />
                    </div>

                    {/* To Date */}
                    <div className="space-y-1">
                        <Caption color="muted">To</Caption>
                        <Input type="date" />
                    </div>

                    {/* Button */}
                    <Button
                        variant="primary"
                        className="py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                        Generate Report
                    </Button>

                </div>
            </Container>


            {/* DEVICE SUMMARY */}

            <Container className='grid grid-cols-2 md:grid-cols-4 gap-4'>

                <Container variant='primary' padding='md' radius='xl'>
                    <Caption color='muted'>Total Plays</Caption>
                    <Typography variant='h4'>2,430</Typography>
                </Container>

                <Container variant='primary' padding='md' radius='xl'>
                    <Caption color='muted'>Files Played</Caption>
                    <Typography variant='h4'>124</Typography>
                </Container>

                <Container variant='primary' padding='md' radius='xl'>
                    <Caption color='muted'>Total Duration</Caption>
                    <Typography variant='h4'>6h 30m</Typography>
                </Container>

                <Container variant='primary' padding='md' radius='xl'>
                    <Caption color='muted'>Last Played</Caption>
                    <Typography variant='h4'>Today</Typography>
                </Container>

            </Container>


            {/* REPORT SECTION */}

            <Container
                padding='lg'
                variant='primary'
                radius='xl'
                className='grid gap-4'
            >

                {/* HEADER */}

                <Container className='flex lg:flex-row flex-col gap-4 justify-between lg:items-center'>

                    <div className='flex items-center gap-3'>

                        <div className='p-3 rounded-lg bg-blue-100'>
                            <MonitorPlay className='text-blue-600' size={20} />
                        </div>

                        <div>
                            <Typography weight='bold'>
                                Hotel Anjushri Lobby
                            </Typography>
                            <Caption color='muted'>
                                Playback report for selected date range
                            </Caption>
                        </div>

                    </div>


                    {/* EXPORT BUTTONS */}

                    <div className='flex gap-2'>

                        <Button
                            className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
                        >
                            <FileSpreadsheet size={18} />
                            Excel
                        </Button>

                        <Button
                            className="flex items-center gap-2 bg-red-600 text-white hover:bg-red-700"
                        >
                            <FileText size={18} />
                            PDF
                        </Button>

                    </div>

                </Container>


                {/* TABLE */}

                {playbackLogs.length > 0 ? (

                    <PlaybackLogsTable logs={playbackLogs} />

                ) : (

                    <EmptyState
                        icon={BoxIcon}
                        title="No log report found"
                        description="Select device and date range to generate report"
                        buttonText="Generate Report"
                        onButtonClick={() => { }}
                        iconGradient="bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700"
                    />

                )}

            </Container>

        </Container>

    )
}

export default UserDeviceReport