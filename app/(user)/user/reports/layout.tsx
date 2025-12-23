'use client'
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import React from "react";
import ReportsTab from "@/components/ui/custome/ReportsTabNavigation";

function layout({ children }: { children: React.ReactNode }) {

    return (
        <Container className='grid gap-6 grid-cols-1'>
            <Container className='flex items-center justify-between '>
                <Container>
                    <Typography variant='h4' weight='medium'>Reports</Typography>
                    <Typography variant='body2' color='secondary'>Activity Reports here.</Typography>
                </Container>

            </Container>
            <Container>
                <ReportsTab/>
            </Container>
            <Container className=''>

              
                {children}

            </Container>


        </Container>
    )
}

export default layout