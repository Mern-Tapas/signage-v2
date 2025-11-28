'use client'

import React from "react"
import Container from "@/components/layout/Container"
import Image from "next/image"
import { Video } from "lucide-react"
import { Caption } from "@/components/typography/typography"

const FileCard: React.FC = () => {

  return <Container variant="primary" radius="xl" padding="md" className="grid gap-4 grid-cols-1">
    <div className="w-full h-40 rounded-md overflow-hidden">
      <Image src={"https://i.pinimg.com/736x/29/3c/72/293c726b14ec9903c32ea09738c3220f.jpg"} height={200} width={200} alt="files" className="w-full h-full" />
    </div>
    <div className="flex gap-4">
      <div className="h-10 w-10 flex items-center justify-center">
        <Video className="text-blue-700" strokeWidth={1.2} />
      </div>
      <div>
        <Caption >Lorem ipsum dolor sit amet conse</Caption>
      </div>
    </div>
  </Container>
}

export default FileCard