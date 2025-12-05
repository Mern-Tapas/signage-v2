'use client'
import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Input } from '../custome/Input'
import { Button } from '../custome/Button'
import { Smartphone } from 'lucide-react';
import { Switch } from '../custome/Switch'

function PasswordSettings() {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    return (
        <Container className='grid gap-4 self-start'>

            <Container>
                <Typography variant='h4' weight='medium'>Security Settings</Typography>
                <Typography variant='body2' color='secondary'>You can find all settings here.</Typography>
            </Container>


            <Container variant='primary' padding='lg' className='flex flex-col gap-4 self-start' radius='xl'>
                <Typography variant='h6'>Password Information</Typography>

                <Container className='grid grid-cols-2 gap-4'>
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
                            Two-factor authentication is enabled. You'll need to enter a code from your authenticator app when signing in.
                        </p>
                    </div>
                )}

            </Container>

        </Container>
    )
}

export default PasswordSettings