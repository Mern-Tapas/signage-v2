'use client'
import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'
import { Clock, Key, Shield, Smartphone } from 'lucide-react';
import { Switch } from '../custome/Switch'

interface Session {
    device: string;
    location: string;
    lastActive: string;
    current: boolean;
}

function PasswordSettings() {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    const sessions: Session[] = [
        {
            device: 'Chrome on Windows',
            location: 'Bhopal, India',
            lastActive: '5 minutes ago',
            current: true
        },
        {
            device: 'Safari on iPhone',
            location: 'Mumbai, India',
            lastActive: '2 days ago',
            current: false
        },
        {
            device: 'Firefox on Mac',
            location: 'Delhi, India',
            lastActive: '1 week ago',
            current: false
        }
    ];

    const handleRevoke = (sessionDevice: string) => {
        console.log(`Revoking session: ${sessionDevice}`);
        // Add your revoke logic here
    };

    return (
        <Container className='grid gap-4 self-start'>

            <Container>
                <Typography variant='h4' weight='medium'>Security Settings</Typography>
                <Typography variant='body2' color='secondary'>You can find all settings here.</Typography>
            </Container>


            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                        <Key className="text-purple-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Update Password</h2>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                </div>

                <Container className='grid xl:grid-cols-2 gap-4'>
                    <div className='xl:col-span-2'>
                        <Input
                            className=''
                            label="Old Password"
                            variant="default"
                            placeholder="Password"
                            helperText='Password must be 8–12 characters long and include at least one lowercase and one uppercase letter.'
                        />
                    </div>
                    <Input
                        label="Password"
                        variant="default"
                        placeholder="Password"
                        helperText='Password must be 8–12 characters long and include at least one lowercase and one uppercase letter.'
                    />
                    <Input
                        label="Confirm Password"
                        variant="default"
                        placeholder="Confirm Password"
                        helperText='Confirm Password must match the Password exactly and follow the same password rules.'
                    />


                </Container>
                <div className='flex justify-end'>
                    <Button variant='primary' className=''>Update</Button>

                </div>

            </Container>
            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                            <Smartphone className="text-green-600" size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h2>
                            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                    </div>

                    <Switch checked={twoFactorEnabled} onChange={() => setTwoFactorEnabled(!twoFactorEnabled)} />
                </div>
                {twoFactorEnabled && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                            Two-factor authentication is enabled. You&apos;ll need to enter a code from your authenticator app when signing in.
                        </p>
                    </div>
                )}

            </Container>



            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>


                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 p-2 rounded-lg">
                        <Clock className="text-purple-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Active Sessions</h2>
                        <p className="text-sm text-gray-500">Manage devices where you&apos;re currently logged in</p>
                    </div>
                </div>
                <div className="space-y-3">
                    {sessions.map((session, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <Shield className="text-gray-400" size={20} />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{session.device}</p>
                                    <p className="text-xs text-gray-500">
                                        {session.location} · {session.lastActive}
                                    </p>
                                </div>
                            </div>
                            {session.current ? (
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                    Current
                                </span>
                            ) : (
                                <button
                                    onClick={() => handleRevoke(session.device)}
                                    className="px-3 py-1 text-xs text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    Revoke
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </Container>

        </Container>
    )
}

export default PasswordSettings