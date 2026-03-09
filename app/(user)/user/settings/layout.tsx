'use client'
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import Avatar from "@/components/ui/custome/Avatar";
import React from "react";
import SettingsNavigation2 from "@/components/ui/custome/SettingsNavigation2";
import { Mail, Phone } from "lucide-react";

function layout({ children }: { children: React.ReactNode }) {





    return (
        <Container className='grid gap-6 grid-cols-1'>
            <Container className='flex items-center justify-between '>
                <Container>
                    <Typography variant='h4' weight='medium'>Settings</Typography>
                    <Typography variant='body2' color='secondary'>You can find all settings here.</Typography>
                </Container>

            </Container>
            <Container>
                <SettingsNavigation2 />
            </Container>
            <Container className='grid gap-4 xl:grid-cols-[300px_auto]'>

                <div className="self-start gap-4 grid grid-cols-1">

              <Container
  variant="primary"
  padding="lg"
  radius="xl"
  className="relative overflow-hidden"
>

  {/* gradient highlight */}

  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"/>

  <div className="flex flex-col items-center gap-5 relative">

    {/* AVATAR */}

    <Avatar
      src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
      alt="User Avatar"
      size="lg"
      radius="md"
      className="border-2 border-white shadow-lg"
    />

    {/* USER INFO */}

    <div className="text-center">

      <Typography variant="h4" className="uppercase">
        Tapas Gharami
      </Typography>

      <Typography variant="caption" color="muted">
        cyb6261452510@gmail.com
      </Typography>

      <div className="text-xs text-gray-500 mt-1">
        Admin • Last login 2h ago
      </div>

    </div>


    {/* CONTACT ICONS */}

    <div className="flex gap-3">

      <Container
        variant="outline"
        radius="md"
        padding="sm"
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
      >
        <Phone size={18} strokeWidth={1.8}/>
      </Container>

      <Container
        variant="outline"
        radius="md"
        padding="sm"
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
      >
        <Mail size={18} strokeWidth={1.8}/>
      </Container>

      <Container
        variant="outline"
        radius="md"
        padding="sm"
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
      >
        <Phone size={18} strokeWidth={1.8}/>
      </Container>

    </div>


    {/* PROFILE DETAILS */}

    <Container
      variant="secondary"
      radius="xl"
      padding="md"
      className="w-full"
    >

      <div className="flex justify-between text-sm py-1">
        <span className="text-gray-500">Name</span>
        <span className="font-medium">Tapas Gharami</span>
      </div>

      <div className="flex justify-between text-sm py-1">
        <span className="text-gray-500">Age</span>
        <span className="font-medium">45</span>
      </div>

      <div className="flex justify-between text-sm py-1">
        <span className="text-gray-500">DOB</span>
        <span className="font-medium">25 July 1998</span>
      </div>

      <div className="flex justify-between text-sm py-1">
        <span className="text-gray-500">Place</span>
        <span className="font-medium">Indore</span>
      </div>

    </Container>

  </div>

</Container>


                </div>

                {/* <SettingsNavigation /> */}
                {children}

            </Container>


        </Container>
    )
}

export default layout