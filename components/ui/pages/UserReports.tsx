'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Select } from '../custome/Select'

function UserReports() {

    return (
        <Container className='grid gap-4 self-start grid-cols-1'>



            <Container variant='primary' padding='lg' className='grid grid-cols-4 gap-4 self-start' radius='xl'>
                <Select
                    label="Country"
                    helperText="Choose your country"
                    size="md"
                    options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                    ]}
                    value={'male'}
                    onChange={() => { }}
                />
                

            </Container>




        </Container>

    )
}

export default UserReports