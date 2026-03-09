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
  ListVideo,
  PlayCircle
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
    playlists: 3,
    id: "asset_3929392",
    preview:
      "https://i.pinimg.com/1200x/c8/54/cc/c854ccce48c3dbbeb16a834046bce01c.jpg"
  };

  return (

    <Container className="grid gap-6">

      {/* HEADER */}

      <Container className="flex items-center justify-between flex-wrap gap-4">

        <Container>

          <Typography variant="h4" weight="medium">
            {file.name}
          </Typography>

          <Typography variant="body2" color="secondary">
            File details and usage analytics
          </Typography>

        </Container>

        <Container className="flex gap-3">

          <Button variant="outline" icon={<Download size={16}/>}>
            Download
          </Button>

          <Button variant="outline" icon={<RefreshCw size={16}/>}>
            Replace
          </Button>

          <Button variant="danger" icon={<Trash size={16}/>}>
            Delete
          </Button>

        </Container>

      </Container>


      {/* QUICK STATS */}

      <Container className="grid md:grid-cols-4 gap-4">

        <Card>
          <CardBody className="flex items-center justify-between">
            <div>
              <Typography variant="body2" color="secondary">
                Screens
              </Typography>
              <Typography weight="medium">
                {file.screens}
              </Typography>
            </div>
            <Monitor size={20}/>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center justify-between">
            <div>
              <Typography variant="body2" color="secondary">
                Playlists
              </Typography>
              <Typography weight="medium">
                {file.playlists}
              </Typography>
            </div>
            <ListVideo size={20}/>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center justify-between">
            <div>
              <Typography variant="body2" color="secondary">
                Size
              </Typography>
              <Typography weight="medium">
                {file.size}
              </Typography>
            </div>
            <HardDrive size={20}/>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center justify-between">
            <div>
              <Typography variant="body2" color="secondary">
                Resolution
              </Typography>
              <Typography weight="medium">
                {file.resolution}
              </Typography>
            </div>
            <ImageIcon size={20}/>
          </CardBody>
        </Card>

      </Container>


      {/* MAIN GRID */}

      <Container className="grid lg:grid-cols-[2fr_1fr] gap-6">

        {/* PREVIEW */}

        <Card radius="xl">

          <CardHeader className="flex justify-between items-center">

            <Typography weight="medium">
              Preview
            </Typography>

            <Badge>{file.type}</Badge>

          </CardHeader>

          <CardBody>

            <div className="relative h-[420px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">

              <Image
                src={file.preview}
                alt="preview"
                fill
                className="object-contain p-6"
              />

            </div>

          </CardBody>

        </Card>


        {/* FILE META */}

        <Card radius="xl">

          <CardHeader>
            <Typography weight="medium">
              File Metadata
            </Typography>
          </CardHeader>

          <CardBody className="space-y-4 text-sm">

            <Meta label="File Type" value={file.type} />

            <Meta label="Uploaded" value={file.uploaded} icon={<Calendar size={14}/>}/>

            <Meta label="Resolution" value={file.resolution} />

            <Meta label="Duration" value={file.duration} />

            <hr/>

            <div className="flex justify-between items-center">

              <span className="text-gray-500 text-sm">
                File ID
              </span>

              <button className="flex items-center gap-1 text-xs hover:text-blue-600">
                <Copy size={14}/>
                Copy
              </button>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-gray-500 text-sm">
                File URL
              </span>

              <button className="flex items-center gap-1 text-blue-600 text-xs">
                <Link2 size={14}/>
                Copy Link
              </button>

            </div>

          </CardBody>

        </Card>

      </Container>


      {/* PLAYLIST USAGE */}

      <Card radius="xl">

        <CardHeader>
          <Typography weight="medium">
            Playlists Using This File
          </Typography>
        </CardHeader>

        <CardBody className="space-y-3">

          {[
            { id:1,name:"Morning Ads",items:8 },
            { id:2,name:"Restaurant Promo",items:5 },
            { id:3,name:"Weekend Offers",items:12 }
          ].map((playlist)=>(
            
            <div
              key={playlist.id}
              className="flex items-center justify-between border rounded-lg px-4 py-3 hover:bg-gray-50 transition"
            >

              <div className="flex items-center gap-3">

                <PlayCircle size={18}/>

                <div>

                  <p className="text-sm font-medium">
                    {playlist.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {playlist.items} items
                  </p>

                </div>

              </div>

              <div className="flex gap-2">

                <Button size="sm" variant="outline">
                  View
                </Button>

                <Button size="sm" variant="danger">
                  Remove
                </Button>

              </div>

            </div>

          ))}

        </CardBody>

      </Card>

    </Container>

  );
}


function Meta({label,value,icon}:{label:string,value:string,icon?:React.ReactNode}){

  return(

    <div className="flex justify-between items-center">

      <span className="flex items-center gap-2 text-gray-500 text-sm">
        {icon}
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>

    </div>

  )

}

export default Page