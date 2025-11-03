import React from 'react'
import Container from '@/components/layout/Container'
import IconBox from './IconBox'
import { Caption, Typography } from '@/components/typography/typography'
import { Delete, EllipsisVertical, Eye, Menu, Trash, TvMinimal } from 'lucide-react'
import MarqueeText from './MarqueeText'
import { Badge } from './Badge'
import Link from 'next/link'
import Checkbox from './Checkbox'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from './Dropdown'

function DeviceList() {
    const [checked, setChecked] = React.useState(false);
    return (
        <Container variant='primary' padding='sm' radius='xl' className='grid grid-cols-[350px_1fr] gap-4 lg:grid-cols-[350px_1fr_1fr_1fr] items-center w-full'>


            <div className='flex gap-4 items-center '>

                <IconBox className='shrink-0 border border-gray-200' size='lg' icon={TvMinimal} />
                <Container className=''>

                    <Link className='' href={'/user/screens/device'}>
                        <Typography variant='body2' weight='normal' className='truncate '>Silver Spring Phase 2 Block A</Typography>

                    </Link>                    {/* <Typography variant='caption' weight='medium'  className='truncate '>Please type here short description mk</Typography> */}
                    <Container className='flex gap-2'>
                        <Caption color='success'>Online</Caption>
                        <Caption color='muted'>10 Videos</Caption>
                    </Container>
                </Container>
            </div>
            <div className='hidden lg:flex '>
                <Typography variant='caption'>WS123840</Typography>
            </div>
            <div className='hidden lg:flex '>
                <Badge size='sm' color='success'>Online</Badge>
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
                        <DropdownItem>
                            <div className='flex gap-2 items-center'><Trash size={16} /> Remove</div>
                        </DropdownItem>

                    </DropdownContent>
                </Dropdown>
            </div>
        </Container>
    )
}

export default DeviceList