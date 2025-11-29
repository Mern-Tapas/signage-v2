'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import FileUploadLayout from '../custome/FileUploader'
import FileCard from '../custome/FileCard'

function UserFiles() {
    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between '>
                <Container>
                    <Typography variant='h4' weight='bold'>My files</Typography>
                    <Typography variant='body2' color='secondary'>Customize your signage preference</Typography>
                </Container>

            </Container>
            <Container className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <FileCard />
                <FileCard />
                <FileCard />
                <FileCard />
                <FileCard />
                

            </Container>

        </Container>
    )
}

export default UserFiles