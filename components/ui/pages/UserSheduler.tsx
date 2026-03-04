'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Calendar } from '../custome/Calendar'
import { useState } from 'react'
import { Card, CardHeader } from '../custome/Card'
import { Separator } from '../custome/Seprator'
import IconBox from '../custome/IconBox'
import { WatchIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../custome/Button'



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
        <Container className='grid gap-6'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='medium'>Content Scheduler</Typography>
                    <Typography variant='body2' color='secondary'>Connect playlist and manage your ads</Typography>
                </Container>

            </Container>

            <Container>
               f
            </Container>

        </Container>
    )
}

export default UserSheduler


const ScheduledContent = () => {
    return <Container radius='xl' padding='sm' variant='primary' className='flex gap-3 border border-gray-300'>
        <div className=' h-12 w-12 rounded-md overflow-hidden'>
            <Image src={"https://i.pinimg.com/736x/1a/0c/13/1a0c13f582d7b4bdcc11f129cf7a424d.jpg"} height={100} width={100} alt='content' />
        </div>
        <div>
            <Typography variant='h6' weight='medium'>Phoenix citadel time Events</Typography>
        </div>
    </Container>
}