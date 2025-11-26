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
import { Calendar } from '../custome/Calendar'
import { useState } from 'react'



interface Event {
    id: string;
    title: string;
    description: string;
    event_date: string;
    event_type: string;
    status: string;
}

interface ScheduledContent {
    id: string;
    event_id: string;
    content_title: string;
    content_body: string;
    publish_date: string;
    platform: string;
    status: string;
}

function UserSheduler() {


    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);


    const fetchEvents = async () => {
        try {

        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveEvent = async (eventData: Partial<Event>) => {
        try {


        } catch (error) {
            console.error('Error saving event:', error);
        }
    };

    const handleSaveContent = async (contentData: Partial<ScheduledContent>) => {
        try {

        } catch (error) {
            console.error('Error saving content:', error);
        }
    };

    const eventDates = events.map(event => new Date(event.event_date));


    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='medium'>Content Scheduler</Typography>
                    <Typography variant='body2' color='secondary'>Connect playlist and manage your ads</Typography>
                </Container>

            </Container>

            <Container>
                <Container className='grid lg:grid-cols-3 gap-4 grid-cols-1'>
                    <Calendar 
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    eventDates={eventDates}
                />
                </Container>
            </Container>

        </Container>
    )
}

export default UserSheduler