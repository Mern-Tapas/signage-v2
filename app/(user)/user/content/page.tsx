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
import Image from "next/image"

type TabType = "published" | "scheduled" | "expired"

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

  const [tab, setTab] = useState<TabType>("published")

  const data: Record<TabType, ContentItem[]> = {

    published: [
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
          Manage published, scheduled and expired content
        </Typography>

      </Container>


      {/* TABS */}

      <Container className="flex gap-6 border-b relative">

        {[
          { key: "published", label: "Published", icon: <PlayCircle size={16} />, count: 12 },
          { key: "scheduled", label: "Scheduled", icon: <Clock size={16} />, count: 4 },
          { key: "expired", label: "Expired", icon: <Archive size={16} />, count: 8 }
        ].map((item) => {

          const ispublished = tab === item.key

          return (

            <button
              key={item.key}
              onClick={() => setTab(item.key as TabType)}
              className="relative flex items-center gap-2 pb-3 text-sm font-medium transition"
            >

              <span
                className={`flex items-center gap-2 ${ispublished ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {item.icon}
                {item.label}

                {/* COUNT BADGE */}

                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${ispublished
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {item.count}
                </span>

              </span>

              {/* published INDICATOR */}

              {ispublished && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full" />
              )}

            </button>

          )
        })}

      </Container>


      {/* LIST */}

      <Container className="grid gap-4">

        {data[tab].map((item) => (

          <Card key={item.id} radius="xl">

            <CardBody className="flex justify-between items-center gap-6">

              {/* LEFT SIDE */}

              <div className="flex items-center gap-4">

                <Image
                  height={300}
                  width={300}
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

                {tab === "published" && (
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
                  icon={<Edit size={14} />}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="danger"
                  icon={<Trash size={14} />}
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