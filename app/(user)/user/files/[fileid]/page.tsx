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
  Link2
} from "lucide-react";

function page() {

  const file = {
    name: "Phoenix Shuttle Service.jpeg",
    type: "Image",
    size: "10 MB",
    uploaded: "12 March 2026",
    screens: 10,
    playlists: 0,
    preview:
      "https://images.unsplash.com/photo-1581091215367-59ab6b3d0e2c"
  };

  return (
    <Container className="grid gap-6">

      {/* PAGE HEADER */}

      <Container className="flex items-center justify-between">

        <Container>
          <Typography variant="h4" weight="medium">
            File Details
          </Typography>

          <Typography variant="body2" color="secondary">
            Manage and view asset information
          </Typography>
        </Container>

        <Container className="flex gap-3">

          <Button variant="outline" icon={<Download/>}>
            Download
          </Button>

          <Button variant="outline" icon={<RefreshCw/>}>
            Replace File
          </Button>

          <Button variant="danger"  icon={<Trash/>}>
            Delete
          </Button>

        </Container>

      </Container>


      {/* MAIN GRID */}

      <Container className="grid lg:grid-cols-[2fr_1fr] gap-6">

        {/* FILE PREVIEW */}

        <Card radius="xl">

          <CardHeader>
            <Typography weight="medium">
              File Preview
            </Typography>
          </CardHeader>

          <CardBody>

            <div className="rounded-xl overflow-hidden border bg-gray-50 flex items-center justify-center h-[380px]">

              <img
                src={file.preview}
                alt="preview"
                className="max-h-full object-contain"
              />

            </div>

          </CardBody>

        </Card>


        {/* FILE INFORMATION */}

        <Card radius="xl">

          <CardHeader>
            <Typography weight="medium">
              File Information
            </Typography>
          </CardHeader>

          <CardBody className="space-y-5">

            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">File Name</span>
              <span className="text-sm font-medium">{file.name}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm flex items-center gap-2">
                <ImageIcon size={14} />
                File Type
              </span>
              <Badge>{file.type}</Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm flex items-center gap-2">
                <HardDrive size={14} />
                File Size
              </span>
              <span className="text-sm font-medium">{file.size}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm flex items-center gap-2">
                <Calendar size={14} />
                Upload Date
              </span>
              <span className="text-sm font-medium">{file.uploaded}</span>
            </div>

          </CardBody>

        </Card>

      </Container>



      {/* LINKED SECTION */}

      <Card radius="xl">

        <CardHeader>
          <Typography weight="medium">
            Linked Usage
          </Typography>
        </CardHeader>

        <CardBody>

          <div className="grid md:grid-cols-2 gap-4">

            {/* Screens */}

            <div className="border rounded-xl p-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Link2 size={16} className="text-blue-600" />
                </div>

                <div>
                  <Typography weight="medium">
                    Screens
                  </Typography>

                  <Typography variant="caption" color="secondary">
                    Displays using this file
                  </Typography>
                </div>

              </div>

              <Badge variant="outlined">
                {file.screens}
              </Badge>

            </div>


            {/* Playlists */}

            <div className="border rounded-xl p-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Link2 size={16} className="text-purple-600" />
                </div>

                <div>
                  <Typography weight="medium">
                    Playlists
                  </Typography>

                  <Typography variant="caption" color="secondary">
                    Playlists using this file
                  </Typography>
                </div>

              </div>

              <Badge variant="outlined">
                {file.playlists}
              </Badge>

            </div>

          </div>

        </CardBody>

      </Card>

    </Container>
  );
}

export default page;