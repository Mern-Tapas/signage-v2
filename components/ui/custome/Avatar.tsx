import React from "react";
import clsx from "clsx";
import Image from "next/image";

type AvatarRadius = "sm" | "md" | "lg" | "full";
type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src: string;
  alt?: string;
  radius?: AvatarRadius;
  size?: AvatarSize;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatar",
  radius = "full",
  size = "md",
  className,
}) => {
  const sizeStyles: Record<AvatarSize, string> = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const radiusStyles: Record<AvatarRadius, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <div
      className={clsx(
        "overflow-hidden bg-gray-200 flex items-center justify-center",
        sizeStyles[size],
        radiusStyles[radius],
        className
      )}
    >
      <Image height={100} width={100} src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
