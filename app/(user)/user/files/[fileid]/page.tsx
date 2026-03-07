'use client'

import React from "react";
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import { Card, CardBody, CardHeader } from "@/components/ui/custome/Card";
import { Button } from "@/components/ui/custome/Button";
import { Badge } from "@/components/ui/custome/Badge";

import {
  Download,
  Trash,
  RefreshCw,
  ImageIcon,
  Calendar,
  HardDrive,
  Link2,
  Copy,
  Monitor,
  ListVideo
} from "lucide-react";
import Image from "next/image";

function Page() {

  const file = {
    name: "Phoenix Shuttle Service.jpeg",
    type: "Image",
    size: "10 MB",
    uploaded: "12 March 2026",
    resolution: "1920 x 1080",
    duration: "-",
    screens: 10,
    playlists: 0,
    id: "asset_3929392",
    url: "https://cdn.cms.com/assets/phoenix.jpeg",
    preview:
      "https://i.pinimg.com/1200x/c8/54/cc/c854ccce48c3dbbeb16a834046bce01c.jpg"
  };

  return (
    <Container className="grid gap-6">

      {/* HEADER */}

      <Container className="flex items-center justify-between flex-wrap gap-4">

        <Container>
          <Typography variant="h4" weight="medium">
            File Details
          </Typography>

          <Typography variant="body2" color="secondary">
            Manage and inspect asset information
          </Typography>
        </Container>

        <Container className="flex gap-3">

          <Button variant="outline" icon={<Download size={16} />}>
            Download
          </Button>

          <Button variant="outline" icon={<RefreshCw size={16} />}>
            Replace
          </Button>

          <Button variant="danger" icon={<Trash size={16} />}>
            Delete
          </Button>

        </Container>

      </Container>


      {/* GRID */}

      <Container className="grid lg:grid-cols-[2fr_1fr] gap-6">

        {/* PREVIEW */}

        <Card radius="xl">

          <CardHeader className="flex items-center justify-between">

            <Typography weight="medium">
              File Preview
            </Typography>

            <Badge>
              {file.type}
            </Badge>

          </CardHeader>

          <CardBody>

            <div className="relative rounded-xl overflow-hidden border border-gray-300 bg-gray-50 flex items-center justify-center h-[380px]">

              {file.preview ? (

                <Image
                  height={300}
                  width={300}
                  src={file.preview}
                  alt="preview"
                  className="max-h-full object-contain p-2"
                />

              ) : (

                <ImageIcon size={40} className="text-gray-400" />

              )}

            </div>

          </CardBody>

        </Card>


        {/* FILE INFO */}

        <Card radius="xl">

          <CardHeader>
            <Typography weight="medium">
              File Information
            </Typography>
          </CardHeader>

          <CardBody className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-500">File Name</span>
              <span className="font-medium">{file.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 flex items-center gap-2">
                <ImageIcon size={14} /> Type
              </span>
              <Badge>{file.type}</Badge>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 flex items-center gap-2">
                <HardDrive size={14} /> Size
              </span>
              <span className="font-medium">{file.size}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 flex items-center gap-2">
                <Calendar size={14} /> Upload Date
              </span>
              <span className="font-medium">{file.uploaded}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Resolution</span>
              <span className="font-medium">{file.resolution}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Duration</span>
              <span className="font-medium">{file.duration}</span>
            </div>

            <hr />

            {/* FILE ID */}

            <div className="flex justify-between items-center">

              <span className="text-gray-500">
                File ID
              </span>

              <div className="flex items-center gap-2">

                <span className="font-medium text-xs">
                  {file.id}
                </span>

                <button className="text-gray-400 hover:text-black">
                  <Copy size={14} />
                </button>

              </div>

            </div>

            {/* FILE URL */}

            <div className="flex justify-between items-center">

              <span className="text-gray-500">
                File URL
              </span>

              <button className="flex items-center gap-1 text-blue-600 text-xs">
                <Link2 size={14} />
                Copy Link
              </button>

            </div>

          </CardBody>

        </Card>

      </Container>


      {/* LINKED USAGE */}

      <Card radius="xl">

        <CardHeader>
          <Typography weight="medium">
            Usage & Playlists
          </Typography>
        </CardHeader>

        <CardBody className="grid lg:grid-cols-[1fr_2fr] gap-6">

          {/* PLAYBACK STATS */}

          <div className="border border-gray-300 rounded-xl p-4 space-y-3">

            <Typography weight="medium">
              Playback Stats
            </Typography>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Total Plays</span>
              <span className="font-medium">3,240</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Last Played</span>
              <span className="font-medium">Today 10:32 AM</span>
            </div>

          </div>


          {/* PLAYLIST LIST */}

          <div className="border border-gray-300 rounded-xl p-4">

            <Typography weight="medium" className="mb-4">
              Playlists Using This File
            </Typography>

            <div className="space-y-3">

              {[
                { id: 1, name: "Morning Ads", items: 8 },
                { id: 2, name: "Restaurant Promo", items: 5 },
                { id: 3, name: "Weekend Offers", items: 12 }
              ].map((playlist) => (

                <div
                  key={playlist.id}
                  className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2"
                >

                  <div>

                    <p className="text-sm font-medium">
                      {playlist.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {playlist.items} items
                    </p>

                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      className="text-white border-red-200"
                    >
                      Remove
                    </Button>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </CardBody>

      </Card>

    </Container>
  );
}

export default Page;