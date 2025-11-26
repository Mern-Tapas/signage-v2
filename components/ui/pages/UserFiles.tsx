'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { FileCard } from '../custome/FileCard'

function UserFiles() {
    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between '>
                <Container>
                    <Typography variant='h4' weight='bold'>My files</Typography>
                    <Typography variant='body2' color='secondary'>Customize your signage preference</Typography>
                </Container>

            </Container>
            <Container className='grid gap-2 grid-cols-4'>

                <FileCard
                    fileName="document name odf dfwidf dfik.pdf"
                    fileType="pdf"
                    fileSize="2.4 MB"
                    uploadDate="2 days ago"
                    previewUrl="/path/to/image.jpg" // optional
                    onDownload={() => console.log('download')}
                    onDelete={() => console.log('delete')}
                    onShare={() => console.log('share')}
                    onPreview={() => console.log('preview')}
                />

            </Container>

        </Container>
    )
}

export default UserFiles