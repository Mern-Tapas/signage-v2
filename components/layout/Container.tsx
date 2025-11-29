import React, { ReactNode } from "react";
import clsx from "clsx";

type Variant = "default" | "primary" | "secondary" | "outline";
type Radius = "none" | "sm" | "md" | "xl" | "2xl" | "3xl";
type Shadow = "none" | "sm" | "md" | "lg";
type Padding = "none" | "sm" | "md" | "lg" | "xl";

interface ContainerProps {
    variant?: Variant;
    radius?: Radius;
    shadow?: Shadow;
    padding?: Padding;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Container: React.FC<ContainerProps> = ({
    variant = "default",
    radius = "none",
    shadow = "none",
    padding = "none",
    children,
    className,
}) => {
    const variantStyles: Record<Variant, string> = {
        default: "bg-transparent",
        primary: "bg-white",
        outline: "bg-white border border-gray-200",
        secondary: "bg-[#f8f9fa]", // offwhite
    };

    const radiusStyles: Record<Radius, string> = {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
    };

    const shadowStyles: Record<Shadow, string> = {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
    };

    const paddingStyles: Record<Padding, string> = {
        none: "p-0",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
    };

    return (
        <div
        onClick={()=>onclick}
            className={clsx(
                variantStyles[variant],
                radiusStyles[radius],
                shadowStyles[shadow],
                paddingStyles[padding],
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
