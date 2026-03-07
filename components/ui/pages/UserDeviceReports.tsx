'use client'
import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import { Select } from '../custome/Select'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'
import { Caption, Typography } from '@/components/typography/typography'
import { BoxIcon, FileSpreadsheet, FileText, Sheet } from 'lucide-react'
import FilesTable, { FileItem } from '../custome/FilesTable'
import PlaybackLogsTable from '../custome/PlaybackLogsTable'

function UserDeviceReport() {


    const [value, setValue] = useState<string>("");

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
            filename: "burger-ad.jpg",
            playlist: "Food Promotions",
            startTime: "2026-05-20 10:01 AM",
            endTime: "2026-05-20 10:01:15 AM",
            duration: "15 sec"
        }
    ];


    return (
        <Container className='grid gap-4 self-start grid-cols-1'>



            <Container variant='primary' padding='lg' className='grid md:grid-cols-3 xl:grid-cols-4 gap-4 self-start items-end' radius='xl'>
                <Select
                    label="Select Device"
                    size="md"
                    options={[
                        { label: "Hotel Anjushri Lobby", value: "Hotel Anjushri Lobby" },
                        { label: "Phoenix Lobby", value: "Phoenix Lobby" },

                    ]}
                    value={value}
                    onChange={(v) => { setValue(v as string) }}
                />

                <Input
                    label="From"
                    variant="default"
                    placeholder="Email address"
                    type='date'
                />
                <Input
                    label="To"
                    variant="default"
                    placeholder="Email address"
                    type='date'

                />
                <Button variant='primary' size='md' className='py-3 rounded-lg' >Get Report</Button>


            </Container>

            <Container padding='lg' variant='primary' radius='xl' className='grid grid-cols-1 gap-4'>
                <Container className='flex justify-between items-center'>
                    <div>
                        <Typography weight='bold' className='leading-none'> Hotel Anjushri Lobby</Typography>
                        <Caption color='muted'>Here is the detailed report of Screen</Caption>
                    </div>
                    <div className='flex gap-3'>
                        {/* Excel Download */}

                        <Button
                            onClick={() => { }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition shadow-sm"
                        >
                            <FileSpreadsheet size={18} />
                            Download Excel
                        </Button>

                        {/* PDF Download */}

                        <Button
                            onClick={() => { }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition shadow-sm"
                        >
                            <FileText size={18} />
                            Download PDF
                        </Button>
                    </div>
                </Container>
                <Container>
                    {/* <table className='border-separate border-spacing-2 border border-gray-400 dark:border-gray-500  w-full'>
                        <thead>
                            <tr className=''>
                                <td className='border'>Sr </td>
                                <td className='border'>Media Name</td>
                                <td className='border'>Date</td>
                                <td className='border'>Start Time</td>
                                <td className='border'>End Time</td>
                            </tr>
                        </thead>
                    </table> */}

                    <PlaybackLogsTable logs={playbackLogs} />
                </Container>

            </Container>



        </Container>

    )
}

export default UserDeviceReport