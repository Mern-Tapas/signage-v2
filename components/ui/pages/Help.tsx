'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Card, CardBody, CardHeader } from '../custome/Card'
import { Search, Monitor, PlaySquare, Clock, FileText, MessageCircle, Mail } from 'lucide-react'
import { Button } from '../custome/Button'
import LiveChatWidget from '../custome/LiveChatWidget'

function Help() {

  return (
    <Container className="grid gap-6">

      {/* Header */}

      <Container>
        <Typography variant="h4" weight="medium">
          Help Center
        </Typography>
        <Typography variant="body2" color="secondary">
          Find guides, tutorials and support for your digital signage platform
        </Typography>
      </Container>


      {/* Search */}

      <Container className="max-w-xl">
        <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-3 bg-white shadow-sm">
          <Search size={18} className="text-gray-400"/>
          <input
            placeholder="Search help articles..."
            className="w-full outline-none text-sm"
          />
        </div>
      </Container>


      {/* Quick Help */}

      <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <Card radius="xl">
          <CardBody className="flex gap-3 items-start">
            <Monitor className="text-blue-500"/>
            <div>
              <Typography weight="medium">Add Screens</Typography>
              <Typography variant="caption">
                Learn how to connect and manage your display screens
              </Typography>
            </div>
          </CardBody>
        </Card>

        <Card radius="xl">
          <CardBody className="flex gap-3 items-start">
            <PlaySquare className="text-purple-500"/>
            <div>
              <Typography weight="medium">Create Playlists</Typography>
              <Typography variant="caption">
                Manage videos and images inside playlists
              </Typography>
            </div>
          </CardBody>
        </Card>

        <Card radius="xl">
          <CardBody className="flex gap-3 items-start">
            <Clock className="text-green-500"/>
            <div>
              <Typography weight="medium">Schedule Content</Typography>
              <Typography variant="caption">
                Set time based content scheduling
              </Typography>
            </div>
          </CardBody>
        </Card>

        <Card radius="xl">
          <CardBody className="flex gap-3 items-start">
            <FileText className="text-orange-500"/>
            <div>
              <Typography weight="medium">Manage Files</Typography>
              <Typography variant="caption">
                Upload and organize your media assets
              </Typography>
            </div>
          </CardBody>
        </Card>

      </Container>


      {/* Popular Guides */}

      <Card radius="xl">

        <CardHeader>
          <Typography weight="medium">
            Popular Guides
          </Typography>
        </CardHeader>

        <CardBody className="grid gap-4 md:grid-cols-2">

          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <Typography weight="medium">
              How to connect Android TV device
            </Typography>
            <Typography variant="caption">
              Step by step guide to connect your device
            </Typography>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <Typography weight="medium">
              Create your first playlist
            </Typography>
            <Typography variant="caption">
              Learn how to add videos and images
            </Typography>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <Typography weight="medium">
              Schedule content on screens
            </Typography>
            <Typography variant="caption">
              Automate playback using scheduler
            </Typography>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <Typography weight="medium">
              Fix offline screen issues
            </Typography>
            <Typography variant="caption">
              Troubleshooting guide for offline devices
            </Typography>
          </div>

        </CardBody>

      </Card>


      {/* FAQ */}

      <Card radius="xl">

        <CardHeader>
          <Typography weight="medium">
            Frequently Asked Questions
          </Typography>
        </CardHeader>

        <CardBody className="grid gap-4">

          <div>
            <Typography weight="medium">
              Why is my screen offline?
            </Typography>
            <Typography variant="caption">
              Check internet connection and device status.
            </Typography>
          </div>

          <div>
            <Typography weight="medium">
              How do I upload new media?
            </Typography>
            <Typography variant="caption">
              Go to Files page and upload images or videos.
            </Typography>
          </div>

          <div>
            <Typography weight="medium">
              How does scheduling work?
            </Typography>
            <Typography variant="caption">
              You can schedule playlists for specific time ranges.
            </Typography>
          </div>

        </CardBody>

      </Card>


      {/* Contact Support */}

      <Card radius="xl">

        <CardHeader>
          <Typography weight="medium">
            Contact Support
          </Typography>
        </CardHeader>

        <CardBody className="flex gap-4 flex-wrap">

          <Button variant="outline">
            <MessageCircle size={16}/>
            Live Chat
          </Button>
          <LiveChatWidget/>

          <Button variant="outline">
            <Mail size={16}/>
            Email Support
          </Button>

        </CardBody>

      </Card>

    </Container>
  )
}

export default Help