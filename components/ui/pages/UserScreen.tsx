import React from 'react'
import Container from '@/components/layout/Container'
import { Button } from '../custome/Button'
import { Caption, Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import IconBox from '../custome/IconBox'
import { TvMinimal } from 'lucide-react'

function UserScreen() {
    return (
        <Container className='grid gap-4'>
            <Container className='flex items-center justify-between'>
                <Container>
                    <Typography variant='h4' weight='bold'>Screen Details</Typography>
                    <Typography variant='body2' color='secondary'>Connect playlist and manage your ads</Typography>


                </Container>

            </Container>

            <Container className='flex' variant='default' padding='none'>

                <Container className='md:w-100 w-full gap-4 grid' variant='primary' padding='md' radius='xl' >
                    <div className='flex gap-4 '>
                        <div>
                            <IconBox className='shrink-0 border border-gray-200' size='lg' icon={TvMinimal} />
                        </div>
                        <div>
                            <Typography variant='h4'>Shalimar Township</Typography>
                            <Typography variant='caption'>Lorem ipsum dolor sit amet.</Typography>
                        </div>
                    </div>

                    <Container className='' variant='outline' padding='md' radius='md'>
                        d
                    </Container>
                </Container>

            </Container>


        </Container>
    )
}

export default UserScreen