'use client'
import React from 'react'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
    DialogClose,
} from "@/components/ui/custome/Dialog";
import { Button } from '@/components/ui/custome/Button';
import { Typography } from '@/components/typography/typography';

function page() {
    return (
        <Dialog defaultOpen={true} >
            <DialogTrigger>
                <Button variant="primary">Open Form</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create User</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to create a new user.
                    </DialogDescription>
                </DialogHeader>

                <DialogBody >
                    <form className="space-y-4">
                        <div>
                            <Typography variant='body2' className="">Name</Typography >
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
                            />
                        </div>
                        <div>
                            <Typography variant='body2' className="">Email</Typography>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
                            />
                        </div>
                    </form>
                </DialogBody>

                <DialogFooter>
                    <DialogClose>Cancel</DialogClose>
                    <Button variant="primary">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default page