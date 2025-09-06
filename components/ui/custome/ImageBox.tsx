import React from "react";
import clsx from "clsx";

type ImageBoxSize = "xs" | "sm" | "md" | "lg" | "xl";
type ImageBoxRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
type ImageBoxVariant = "default" | "primary" | "secondary" | "transparent";

interface ImageBoxProps {
    src: string;
    alt?: string;
    size?: ImageBoxSize;
    radius?: ImageBoxRadius;
    variant?: ImageBoxVariant;
    className?: string;
}

const sizeClasses: Record<ImageBoxSize, string> = {
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
};

const radiusClasses: Record<ImageBoxRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
};

const variantClasses: Record<ImageBoxVariant, string> = {
    default: "bg-gray-100 dark:bg-gray-800",
    primary: "bg-white dark:bg-gray-900 shadow",
    secondary: "bg-gray-50 dark:bg-gray-700 shadow-sm",
    transparent: "bg-transparent",
};

const ImageBox: React.FC<ImageBoxProps> = ({
    src,
    alt = "image",
    size = "md",
    radius = "md",
    variant = "default",
    className,
}) => {
    return (
        <div
            className={clsx(
                "flex items-center justify-center overflow-hidden",
                sizeClasses[size],
                radiusClasses[radius],
                variantClasses[variant],
                className
            )}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default ImageBox;
