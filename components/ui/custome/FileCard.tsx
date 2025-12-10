'use client'
import React from "react"
import Container from "@/components/layout/Container"
import Image from "next/image"
import { Video, FileText, Image as ImageIcon, Archive, File } from "lucide-react";


export type FileCardProps = {
  imageSrc?: string;
  title?: string;
  alt?: string;
  fileType?: "video" | "image" | "document" | "archive" | "other";
  onClick?: () => void;
  className?: string;
  /** Pass through any extra props to the root button element */
  ariaLabel?: string;
};

const iconMap: Record<string, React.ReactNode> = {
  video: <Video size={18} className="text-red-600" strokeWidth={1.2} />,
  image: <ImageIcon size={18} className="text-blue-600" strokeWidth={1.2} />,
  document: <FileText size={18} className="text-pink-600" strokeWidth={1.2} />,
  archive: <Archive size={18} className="text-orange-600" strokeWidth={1.2} />,
  other: <File size={18} className="text-gray-600" strokeWidth={1.2} />,
};

const FileCard: React.FC<FileCardProps> = (

  {
    imageSrc = "https://i.pinimg.com/736x/29/3c/72/293c726b14ec9903c32ea09738c3220f.jpg",
    title = "Untitled Documents ps1.jpeg",
    alt = "file preview",
    fileType = "document",
    className = "",
    ariaLabel,
  }

) => {

  return <Container variant="primary" radius="xl" className="grid overflow-hidden cursor-pointer grid-cols-1">
    <div className="w-full h-40 bg-gray-300 overflow-hidden p-2">
      <Image src={imageSrc} height={200} width={200} alt={alt} className="w-full h-full object-contain" />
    </div>
    <Container padding="md" className="flex gap-4">
      <div className="h-8 w-8 shrink-0 flex bg-red-100 rounded-md  items-center justify-center">
        {iconMap[fileType]}
      </div>
      <div className="flex items-center">
        <p className="text-xs">{title}</p>
      </div>
    </Container>
  </Container>
}

export default FileCard