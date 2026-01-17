'use client'
import Container from '@/components/layout/Container';
import { Typography } from '@/components/typography/typography';
import { Download, FolderOpen, LayoutGrid, MonitorOff, PlusIcon, Search, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from '../custome/Button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogBody,
} from "@/components/ui/custome/Dialog";
import { Input } from '../custome/Input';
import Checkbox from '../custome/Checkbox';
import FileCard from '../custome/FileCard';
import FileUploadLayout from '../custome/FileUploader';
import FileListView from '../custome/FileListView';
import EmptyState from '../custome/EmptyState';

function UserFiles() {




    const [deviceLayout, setLayout] = useState<boolean>(false)
    const [mounted, setMounted] = useState<boolean>(false)

    const changeLayout = (layout: boolean) => {
        setLayout(layout)
        localStorage.setItem("deviceLayout", JSON.stringify(layout))
    }


    useEffect(() => {

        const layout = localStorage.getItem("deviceLayout")

        if (layout != null) {
            setLayout(JSON.parse(layout))
        }
        setMounted(true)



    }, [])


    return (
        mounted ? <Container className='grid gap-6'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='medium'>My Files & Assets</Typography>
                    <Typography variant='body2' color='secondary'>Manage your Files and Assets</Typography>


                </Container>

            </Container>

            <Container className='flex items-center justify-between'>
                <Container className='flex gap-4'>
                    <Input variant='filled' placeholder='Search' radius='xl' icon={<Search strokeWidth={1.5} size={20} className='' />} />

                </Container>
                <Container className='flex gap-2'>

                    <Button className='hidden' variant="outline" size='md' icon={<Download size={18} strokeWidth={1.5} />}>Export</Button>
                    <Button className='hidden' variant="danger" size='md' icon={<Trash size={18} strokeWidth={1.5} />}>Delete</Button>

                    <Dialog  >
                        <DialogTrigger>
                            <Button variant="primary" className='h-full md:flex hidden' size='md' icon={<PlusIcon size={18} strokeWidth={1.5} />}>Add Screen</Button>
                            <Button size='icon' className='block md:hidden' variant='primary' icon={<PlusIcon strokeWidth={1.2} />} />

                        </DialogTrigger>
                        <DialogContent maxWidth='max-w-2xl' className='max-h-[600px] overflow-x-scroll fileUploader '  >


                            <DialogBody  >
                                <FileUploadLayout />
                            </DialogBody>


                        </DialogContent>
                    </Dialog>

                    <Button size='icon' icon={<LayoutGrid strokeWidth={1} radius={'md'} />} onClick={() => changeLayout(!deviceLayout)} />

                </Container>
            </Container>


            {deviceLayout ?
                <Container className='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'  >


                    <FileCard
                        size='13 Mb'
                        imageSrc="https://i.pinimg.com/736x/3e/8b/a4/3e8ba4ff99ac869558917de0003c3ff7.jpg"
                        title="Instagram Promotions.mp4"
                        fileType="image"
                        onClick={() => alert('clicked')}
                    />
                    <FileCard
                        size='13 Mb'
                        imageSrc="https://i.pinimg.com/736x/3e/8b/a4/3e8ba4ff99ac869558917de0003c3ff7.jpg"
                        title="Instagram Promotions.mp4"
                        fileType="image"
                        onClick={() => alert('clicked')}
                    />
                    <FileCard
                        size='13 Mb'
                        imageSrc="https://i.pinimg.com/736x/3e/8b/a4/3e8ba4ff99ac869558917de0003c3ff7.jpg"
                        title="Instagram Promotions.mp4"
                        fileType="image"
                        onClick={() => alert('clicked')}
                    />
                    <FileCard
                        size='13 Mb'
                        imageSrc="https://i.pinimg.com/1200x/24/f6/41/24f6419ea4fa3f1390c2ad8b3440b908.jpg"
                        title="Instagram Promotions Advrt for downloadinge and fodlfso.mp4"
                        fileType="video"
                        onClick={() => alert('clicked')}
                    />
                    <FileCard
                        size='13 Mb'
                        imageSrc="https://i.pinimg.com/736x/db/e3/d4/dbe3d47c35a749790fdbd9a3ee7b30a7.jpg"
                        title="Instagram Promotions Advrt for downloadinge and fodlfso.mp4"
                        fileType="document"
                        onClick={() => alert('clicked')}
                    />

                </Container> :

                <Container className='grid gap-4'>

                    <Container className=' flex gap-2'>


                        <Container variant='default' padding='sm' radius='xl' className='w-full grid grid-cols-[220px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr_1fr] items-center '>

                            <div className='flex gap-4 items-center '>
                                <Typography variant='body2' weight='bold' className='truncate '>File Name</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>File Type</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>File Size</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>Linked</Typography>
                            </div>
                            <div className="ms-auto flex items-center">
                                <Typography variant='body2' weight='bold' className='truncate '>Action</Typography>

                            </div>
                        </Container>

                    </Container>




                    <FileListView detailedView className='bg-white' />
                    <FileListView detailedView className='bg-white' />


                </Container>

            }

            {/* empty state  */}
            <EmptyState
                icon={FolderOpen}
                title="No files found"
                description="Upload media files to start building your library."
                buttonText="Upload Files"
                onButtonClick={() => {
                    // navigate("/files/upload");
                }}
                iconGradient="bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700"
            />;

            {/* empty state  */}



        </Container> : ""
    )
}

export default UserFiles