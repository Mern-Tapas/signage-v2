'use client'

import React from "react"
import Container from "@/components/layout/Container"
import Image from "next/image"

const FileCard: React.FC = () => {

  return <Container variant="primary" radius="xl" padding="md">
    <div className="w-full h-50 rounded-lg overflow-hidden">
      <Image src={"https://i.pinimg.com/736x/29/3c/72/293c726b14ec9903c32ea09738c3220f.jpg"} height={200} width={200} alt="files" className="w-full h-full" />
    </div>
  </Container>
}

export default FileCard