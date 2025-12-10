'use client'
import Container from '@/components/layout/Container';
import { Typography } from '@/components/typography/typography';
import { Download, LayoutGrid, PlusIcon, Search, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from '../custome/Button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogBody,
} from "@/components/ui/custome/Dialog";
import { Input } from '../custome/Input';
import DeviceList from '../custome/DeviceList';
import Checkbox from '../custome/Checkbox';
import FileCard from '../custome/FileCard';
import FileUploadLayout from '../custome/FileUploader';
import FileListView from '../custome/FileListView';
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
        mounted ? <Container className='grid gap-4'>
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
                    {Array.from({ length: 10 }, (_, i) => {

                        return <FileCard
                            key={i}
                            imageSrc="https://i.pinimg.com/1200x/24/f6/41/24f6419ea4fa3f1390c2ad8b3440b908.jpg"
                            title="Instagram Promotions Advrt for downloadinge and fodlfso.mp4"
                            fileType="video"
                            onClick={() => alert('clicked')}
                        />
                    })}
                </Container> :

                <Container className='grid gap-4'>

                    <Container className='px-4 flex gap-2'>
                        <Checkbox
                            checked={false}
                            onChange={() => { }}
                            color="primary"
                            size="md"
                        />

                        <Container variant='default' padding='sm' radius='xl' className='w-full grid grid-cols-[220px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr_1fr] items-center '>

                            <div className='flex gap-4 items-center '>
                                <Typography variant='body2' weight='bold' className='truncate '>All Devices</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>Devices Id</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>Status</Typography>
                            </div>
                            <div className='hidden lg:flex '>
                                <Typography variant='body2' weight='bold' className='truncate '>Content</Typography>
                            </div>
                            <div className="ms-auto flex items-center">
                                <Typography variant='body2' weight='bold' className='truncate '>Action</Typography>

                            </div>
                        </Container>

                    </Container>



                    {Array.from({ length: 10 }, (_, i) => {
                        return <Container key={i} className='flex px-4 gap-2' radius='xl' variant='primary' >
                            <Checkbox
                                checked={false}
                                onChange={() => { }}
                                color="primary"
                                size="md"
                            />
                            <FileListView detailedView />
                        </Container>
                    })}


                </Container>

            }


        </Container> : ""
    )
}

export default UserFiles