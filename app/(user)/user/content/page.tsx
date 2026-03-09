'use client'

import React, { useState } from "react"
import Container from "@/components/layout/Container"
import { Typography } from "@/components/typography/typography"
import { Card, CardBody } from "@/components/ui/custome/Card"
import { Badge } from "@/components/ui/custome/Badge"
import { Button } from "@/components/ui/custome/Button"

import {
  PlayCircle,
  Clock,
  Archive,
  Edit,
  Trash
} from "lucide-react"

type TabType = "active" | "scheduled" | "expired"

interface ContentItem {
  id: number
  name: string
  type: "Image" | "Video"
  playlist: string
  screens?: number
  duration: string
  uploaded?: string
  lastPlayed?: string
  startDate?: string
  endDate?: string
  expiredOn?: string
  totalPlays?: number
  thumbnail: string
}

export default function Page() {

  const [tab, setTab] = useState<TabType>("active")

  const data: Record<TabType, ContentItem[]> = {

    active: [
      {
        id: 1,
        name: "Restaurant Promo",
        type: "Video",
        playlist: "Morning Ads",
        screens: 12,
        duration: "15s",
        uploaded: "12 Mar 2026",
        lastPlayed: "10:42 AM",
        thumbnail: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
      },
      {
        id: 2,
        name: "Coffee Offer",
        type: "Image",
        playlist: "Cafe Playlist",
        screens: 8,
        duration: "10s",
        uploaded: "10 Mar 2026",
        lastPlayed: "09:10 AM",
        thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
      }
    ],

    scheduled: [
      {
        id: 3,
        name: "Weekend Sale",
        type: "Image",
        playlist: "Retail Promo",
        duration: "12s",
        startDate: "20 Mar 2026",
        endDate: "22 Mar 2026",
        screens: 15,
        thumbnail: "https://images.unsplash.com/photo-1515165562835-c4c6c2a1e9e4"
      }
    ],

    expired: [
      {
        id: 4,
        name: "Old Promotion",
        type: "Video",
        playlist: "Winter Sale",
        duration: "20s",
        expiredOn: "05 Mar 2026",
        totalPlays: 3240,
        thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
      }
    ]

  }

  return (

    <Container className="grid gap-6">

      {/* HEADER */}

      <Container>

        <Typography variant="h4" weight="medium">
          Content
        </Typography>

        <Typography variant="body2" color="secondary">
          Manage active, scheduled and expired content
        </Typography>

      </Container>


      {/* TABS */}

      <Container className="flex gap-2 border-b pb-2">

        <button
          onClick={() => setTab("active")}
          className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 ${
            tab === "active" ? "bg-blue-50 text-blue-600" : "text-gray-500"
          }`}
        >
          <PlayCircle size={16}/>
          Active
        </button>

        <button
          onClick={() => setTab("scheduled")}
          className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 ${
            tab === "scheduled" ? "bg-blue-50 text-blue-600" : "text-gray-500"
          }`}
        >
          <Clock size={16}/>
          Scheduled
        </button>

        <button
          onClick={() => setTab("expired")}
          className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 ${
            tab === "expired" ? "bg-blue-50 text-blue-600" : "text-gray-500"
          }`}
        >
          <Archive size={16}/>
          Expired
        </button>

      </Container>


      {/* LIST */}

      <Container className="grid gap-4">

        {data[tab].map((item) => (

          <Card key={item.id} radius="xl">

            <CardBody className="flex justify-between items-center gap-6">

              {/* LEFT SIDE */}

              <div className="flex items-center gap-4">

                <img
                  src={item.thumbnail}
                  className="w-20 h-14 rounded-md object-cover border"
                  alt="content"
                />

                <div className="space-y-1">

                  <Typography weight="medium">
                    {item.name}
                  </Typography>

                  <Typography variant="caption" color="secondary">
                    Playlist: {item.playlist}
                  </Typography>

                  {item.uploaded && (
                    <Typography variant="caption" color="secondary">
                      Uploaded: {item.uploaded}
                    </Typography>
                  )}

                </div>

              </div>


              {/* RIGHT SIDE */}

              <div className="flex items-center gap-6 text-sm">

                {tab === "active" && (
                  <>
                    <div>
                      <p className="text-gray-500">Screens</p>
                      <p>{item.screens}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p>{item.duration}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Last Played</p>
                      <p>{item.lastPlayed}</p>
                    </div>

                    <Badge variant="filled" color="success">
                      Playing
                    </Badge>
                  </>
                )}

                {tab === "scheduled" && (
                  <>
                    <div>
                      <p className="text-gray-500">Start</p>
                      <p>{item.startDate}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">End</p>
                      <p>{item.endDate}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Screens</p>
                      <p>{item.screens}</p>
                    </div>

                    <Badge>
                      Scheduled
                    </Badge>
                  </>
                )}

                {tab === "expired" && (
                  <>
                    <div>
                      <p className="text-gray-500">Expired On</p>
                      <p>{item.expiredOn}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Total Plays</p>
                      <p>{item.totalPlays}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p>{item.duration}</p>
                    </div>

                    <Badge variant="outlined">
                      Expired
                    </Badge>
                  </>
                )}

                {/* ACTIONS */}

                <Button
                  size="sm"
                  variant="outline"
                  icon={<Edit size={14}/>}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="danger"
                  icon={<Trash size={14}/>}
                >
                  Delete
                </Button>

              </div>

            </CardBody>

          </Card>

        ))}

      </Container>

    </Container>

  )
}