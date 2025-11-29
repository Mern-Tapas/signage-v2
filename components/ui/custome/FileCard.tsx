'use client'

import React from "react"
import Container from "@/components/layout/Container"
import Image from "next/image"
import { Video } from "lucide-react"

const FileCard: React.FC = () => {

  return <Container variant="primary" radius="xl" className="grid overflow-hidden cursor-pointer grid-cols-1">
    <div className="w-full h-40 bg-gray-300 overflow-hidden p-4">
      <Image src={"https://i.pinimg.com/736x/29/3c/72/293c726b14ec9903c32ea09738c3220f.jpg"} height={200} width={200} alt="files" className="w-full h-full object-fit" />
    </div>
    <Container padding="md" className="flex gap-4">
      <div className="h-8 w-8 shrink-0 flex  items-center justify-center">
        <Video className="text-blue-700" strokeWidth={1.2} />
      </div>
      <div className="flex items-center">
        <p className="text-xs">Untitled Documents ps1.jpeg</p>
      </div>
    </Container>
  </Container>
}

export default FileCard