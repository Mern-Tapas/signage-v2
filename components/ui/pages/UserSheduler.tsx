'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Calendar } from '../custome/Calendar'
import { useState } from 'react'
import { Card, CardHeader } from '../custome/Card'



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
                <Container className='grid lg:grid-cols-[400px_auto] gap-4 grid-cols-1'>


                    <Container>
                        <Calendar
                            selectedDate={selectedDate}
                            onDateSelect={setSelectedDate}
                            eventDates={eventDates} />
                    </Container>
                    <Container className='grid gap-4 self-start'>

                        <Card>
                            <CardHeader>
                                <Typography variant='h6'>Sheduled Content</Typography>
                            </CardHeader>
                        </Card>
                        <Container radius='xl' padding='lg' variant='primary' className='self-auto'>
                            <Typography variant='h6'>Sheduled Content</Typography>
                        </Container>

                    </Container>

                </Container>
            </Container>

        </Container>
    )
}

export default UserSheduler