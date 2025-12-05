import React from 'react'
import Container from '@/components/layout/Container'
import { Caption, Typography } from '@/components/typography/typography'
import { EllipsisVertical, Eye, FileText, Download, Trash, Share2 } from 'lucide-react'
import { Badge } from './Badge'
import Link from 'next/link'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from './Dropdown'


function FileListView({ className, detailedView = true }: { className?: string, detailedView?: boolean }) {
    return (
        <Container padding='sm' radius='xl' className={`grid grid-cols-[220px_1fr] gap-4 ${detailedView ? "lg:grid-cols-[350px_1fr_1fr_1fr_1fr]" : ""} items-center w-full ${className}`}>


            <div className='flex gap-4 items-center w-full  '>

                <div className=' border-gray-400 h-12 w-12 overflow-hidden flex rounded-lg shrink-0'>
                    <FileText strokeWidth={1.3} size={24} className='text-blue-600 m-auto' />
                </div>
                <Container className='truncate'>

                    <Link className='' href={'/user/files/document'}>
                        <Typography variant='body2' weight='normal' className='truncate w-full'>Project Presentation Final v2.pdf</Typography>

                    </Link>
                    <Container className='flex gap-2 items-center'>
                        <Caption color='muted'>Uploaded 2 days ago</Caption>
                    </Container>
                </Container>
            </div>
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>
                <Typography variant='caption'>2.4 MB</Typography>
            </div>
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>
                <Badge size='sm' color='success'>PDF</Badge>
            </div>
            <div className={`hidden ${detailedView ? "lg:flex" : ""} `}>

                <Container radius='md' padding='sm' className='border border-gray-300 flex justify-around gap-6 items-center '>
                    <div className='flex gap-1 items-center'>
                        <Eye size={16} />
                        <Caption>145</Caption>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Download size={16} />
                        <Caption>23</Caption>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Share2 size={16} />
                        <Caption>5</Caption>
                    </div>
                </Container>

            </div>
            <div className="ms-auto flex items-center">
                <Dropdown >
                    <DropdownTrigger>
                        <Container variant='primary' padding='sm' radius='xl'  >
                            <EllipsisVertical size={16} />
                        </Container>
                    </DropdownTrigger>

                    <DropdownContent align="right" className='p-1 rounded-lg'>
                        <DropdownItem >
                            <div className='flex gap-2 items-center'><Eye size={16} /> View</div>
                        </DropdownItem>
                        <DropdownItem >
                            <div className='flex gap-2 items-center'><Download size={16} /> Download</div>
                        </DropdownItem>
                        <DropdownItem >
                            <div className='flex gap-2 items-center'><Share2 size={16} /> Share</div>
                        </DropdownItem>
                        <DropdownItem>
                            <div className='flex gap-2 items-center'><Trash size={16} /> Delete</div>
                        </DropdownItem>

                    </DropdownContent>
                </Dropdown>
            </div>
        </Container>
    )
}

export default FileListView