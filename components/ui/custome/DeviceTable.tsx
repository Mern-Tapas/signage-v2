import React from 'react'
import { CardHeader, Card, CardBody } from './Card'
import { Typography } from '@/components/typography/typography'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./Table";
import IconBox from './IconBox';
import { ScreenShare } from 'lucide-react';


function DeviceTable() {
    return (
        <Card>
            <CardHeader>
                <Typography variant='h6'>Devices</Typography>
                <Typography variant='body2' color='muted'>Recently active Devices</Typography>

            </CardHeader >
            <CardBody >
                <Table variant="default" size="md">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Device Name</TableHead>
                            <TableHead>Device Id</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody >
                        <TableRow  >
                            <TableCell className='flex items-center gap-2'> <IconBox size='xs' variant='transparant' icon={ScreenShare} /> Alice Johnson</TableCell>
                            <TableCell>alice@example.com</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell className="text-green-600">Active</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='flex items-center gap-2'> <IconBox size='xs' variant='transparant' icon={ScreenShare} /> Alice Johnson</TableCell>
                            <TableCell>bob@example.com</TableCell>
                            <TableCell>Editor</TableCell>
                            <TableCell className="text-gray-500">Inactive</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='flex items-center gap-2'> <IconBox size='xs' variant='transparant' icon={ScreenShare} /> Alice Johnson</TableCell>
                            
                            <TableCell>bob@example.com</TableCell>
                            <TableCell>Editor</TableCell>
                            <TableCell className="text-gray-500">Inactive</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='flex items-center gap-2'> <IconBox size='xs' variant='transparant' icon={ScreenShare} /> Alice Johnson</TableCell>
                            
                            <TableCell>bob@example.com</TableCell>
                            <TableCell>Editor</TableCell>
                            <TableCell className="text-gray-500">Inactive</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default DeviceTable