'use client'
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import Avatar from "@/components/ui/custome/Avatar";
import React from "react";
import SettingsNavigation2 from "@/components/ui/custome/SettingsNavigation2";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/custome/Button";

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
                <SettingsNavigation2 />
            </Container>
            <Container className='grid gap-4 xl:grid-cols-[300px_auto]'>

                <div className="self-start gap-4 grid grid-cols-1">

                    <Container variant="primary" padding="lg" className=" gap-4" radius="xl">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar
                                src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
                                alt="User Avatar"
                                size="lg"
                                radius="lg"
                                className="border-white"
                            />
                            <div>
                                <Typography variant='h4' className="uppercase">Tapas Gharami</Typography>
                                <Typography variant="caption" color="muted">cyb6261452510@gmail.com</Typography>
                            </div>
                            <div className="flex gap-2">
                                <Container variant="outline" radius="sm" padding="sm" className="w-10 h-10 flex items-center justify-center" >
                                    <Phone size={18} strokeWidth={1.8} />
                                </Container>
                                <Container variant="outline" radius="sm" padding="sm" className="w-10 h-10 flex items-center justify-center" >
                                    <Mail size={18} strokeWidth={1.8} />
                                </Container>
                                <Container variant="outline" radius="sm" padding="sm" className="w-10 h-10 flex items-center justify-center" >
                                    <Phone size={18} strokeWidth={1.8} />
                                </Container>
                            </div>
                            <Container variant="outline" radius="xl" padding="md" className="w-full">
                                <table className="text-sm border-separate border-spacing-x-4 border-spacing-y-2 text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td className="">Name:</td>
                                            <td className="">Tapas Gharami</td>
                                        </tr>
                                        <tr>
                                            <td className="">Age:</td>
                                            <td className="">45</td>
                                        </tr>
                                        <tr>
                                            <td className="">DOB:</td>
                                            <td className="">25 July 1998</td>
                                        </tr>
                                        <tr>
                                            <td className="">Place:</td>
                                            <td className="">Indore</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Container>

                        </div>
                    </Container>
                    <Container variant="primary" padding="lg" className=" gap-4" radius="xl">
                        <div className="flex flex-col items-center gap-4">
                           
                            <Container variant="outline" radius="xl" padding="md" className="w-full">
                                <table className="text-sm border-separate border-spacing-x-4 border-spacing-y-2 text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td className="">Name:</td>
                                            <td className="">Tapas Gharami</td>
                                        </tr>
                                        <tr>
                                            <td className="">Age:</td>
                                            <td className="">45</td>
                                        </tr>
                                        <tr>
                                            <td className="">DOB:</td>
                                            <td className="">25 July 1998</td>
                                        </tr>
                                        <tr>
                                            <td className="">Place:</td>
                                            <td className="">Indore</td>
                                        </tr>
                                    </tbody>
                                </table>
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