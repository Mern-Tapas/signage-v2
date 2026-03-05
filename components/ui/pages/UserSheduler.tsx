'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import { Typography } from '@/components/typography/typography'
import { Card, CardBody, CardHeader } from '@/components/ui/custome/Card'
import { Button } from '@/components/ui/custome/Button'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/components/ui/custome/Dropdown'
import { Badge } from '@/components/ui/custome/Badge'

import {
  Calendar,
  Clock,
  MoreVertical,
  Plus,
  Play,
  Trash,
  Eye
} from 'lucide-react'

function SchedulePage() {

  const schedules = [
    {
      id: 1,
      title: "Mall Promotion Video",
      screen: "Indore Mall Display",
      start: "10:00 AM",
      end: "12:00 PM",
      status: "running"
    },
    {
      id: 2,
      title: "Lunch Offer Campaign",
      screen: "Food Court Screen",
      start: "01:00 PM",
      end: "03:00 PM",
      status: "scheduled"
    },
    {
      id: 3,
      title: "Evening Sale Banner",
      screen: "Main Entrance Display",
      start: "05:00 PM",
      end: "07:00 PM",
      status: "scheduled"
    }
  ]

  const getStatus = (status: string) => {
    if (status === 'running') return <Badge variant="filled" color='success'>Running</Badge>
    if (status === 'scheduled') return <Badge variant="filled" color='warning'>Scheduled</Badge>
    return <Badge>Expired</Badge>
  }

  return (
    <Container className="space-y-6">

      {/* HEADER */}

      <Container>
        <Typography variant="h4" weight="medium">
          Content Scheduler
        </Typography>
        <Typography variant="body2" color="secondary">
          Manage scheduled and running display content
        </Typography>
      </Container>


      {/* CREATE SCHEDULE CARD */}

      <Card radius="xl">

        <CardBody className="flex items-center justify-between">

          <Container className="flex items-center gap-4">

            <Container className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Calendar size={20} className="text-blue-600" />
            </Container>

            <Container>
              <Typography weight="medium">
                Schedule New Content
              </Typography>

              <Typography variant="caption" color="secondary">
                Choose media, screens and time slot
              </Typography>
            </Container>

          </Container>

          <Button variant="primary" icon={<Plus/>}>
            Create Schedule
          </Button>

        </CardBody>

      </Card>


      {/* SCHEDULE LIST */}

      <Card radius="xl">

        <CardHeader className="flex items-center justify-between">
          <Typography weight="medium">
            Scheduled Content
          </Typography>
        </CardHeader>

        <CardBody className="space-y-3">

          {schedules.map((item) => (

            <Container
              key={item.id}
              padding="sm"
              radius="xl"
              className="border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition"
            >

              <Container className="flex items-center gap-4">

                <Container className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Play size={16} className="text-indigo-600" />
                </Container>

                <Container>

                  <Typography weight="medium" className="text-sm">
                    {item.title}
                  </Typography>

                  <div className="flex items-center gap-3 text-xs text-gray-500">

                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {item.start} - {item.end}
                    </span>

                    <span>{item.screen}</span>

                  </div>

                </Container>

              </Container>


              <Container className="flex items-center gap-4">

                {getStatus(item.status)}

                <Dropdown>
                  <DropdownTrigger>
                    <MoreVertical size={18} />
                  </DropdownTrigger>

                  <DropdownContent align="right">
                    <DropdownItem>
                      <Eye size={14} /> View
                    </DropdownItem>

                    <DropdownItem>
                      Edit
                    </DropdownItem>

                    <DropdownItem>
                      <Trash size={14} /> Delete
                    </DropdownItem>
                  </DropdownContent>

                </Dropdown>

              </Container>

            </Container>

          ))}

        </CardBody>

      </Card>

    </Container>
  )
}

export default SchedulePage