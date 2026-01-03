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
  video: <Video size={18} className="text-white" strokeWidth={1.5} />,
  image: <ImageIcon size={18} className="text-white" strokeWidth={1.5} />,
  document: <FileText size={18} className="text-white" strokeWidth={1.5} />,
  archive: <Archive size={18} className="text-white" strokeWidth={1.5} />,
  other: <File size={18} className="text-white" strokeWidth={1.5} />,
};


function getColour(type: string): string {
  switch (type) {
    case "video":
      return "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700";

    case "image":
      return "bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700";

    case "document":
      return "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700";

    case "archive":
      return "bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700";

    case "other":
    default:
      return "bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700";
  }
}

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
      <div className={`h-8 w-8 shrink-0 flex ${getColour(fileType)} rounded-md  items-center justify-center`}>
        {iconMap[fileType]}
      </div>
      <div className="flex items-center">
        <p className="text-xs">{title}</p>
      </div>
    </Container>
  </Container>
}

export default FileCard