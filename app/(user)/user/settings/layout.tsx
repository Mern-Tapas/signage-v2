'use client'
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import Avatar from "@/components/ui/custome/Avatar";
import { Caption } from "@/components/typography/typography";
import { Button } from "@/components/ui/custome/Button";
import { Input } from "@/components/ui/custome/Input";
import SettingsNavigation from "@/components/ui/custome/SettingsNavigation";
import GeneralSettings from "@/components/ui/pages/GeneralSettings";
import React from "react";
import SettingsNavigation2 from "@/components/ui/custome/SettingsNavigation2";

function layout({ children }: { children: React.ReactNode }) {





    return (
        <Container className='grid gap-4 grid-cols-1'>
            <Container className='flex items-center justify-between '>
                <Container>
                    <Typography variant='h4' weight='medium'>Settings</Typography>
                    <Typography variant='body2' color='secondary'>You can find all settings here.</Typography>
                </Container>

            </Container>
            <Container>
                <SettingsNavigation2/>
            </Container>
            <Container className='grid gap-4 '>

                {/* <SettingsNavigation /> */}
                {children}

            </Container>


        </Container>
    )
}

export default layout