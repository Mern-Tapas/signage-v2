"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import IconBox from "@/components/ui/custome/IconBox"
import { Typography } from "@/components/typography/typography";
import { IconNode, LucideIcon, LucideProps } from "lucide-react";

type NavLinkSize = "xs" | "sm" | "md" | "lg";
type NavLinkRadius = "sm" | "md" | "lg" | "xl" | "full";

export interface NavLinkProps extends LinkProps {
  label: string;
  icon?: LucideIcon; // Lucide icons
  iconColor?: "primary" | "secondary" | "muted";
  size?: NavLinkSize;
  radius?: NavLinkRadius;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  icon: Icon,
  iconColor = "secondary",
  size = "md",
  radius = "md",
  className,
  ...props
}) => {
  const sizeStyles: Record<NavLinkSize, string> = {
    xs: "text-sm gap-2", // no padding
    sm: "p-1.5 text-sm gap-2",
    md: "p-2 text-base gap-2",
    lg: "p-3 text-lg gap-3",
  };

  const radiusStyles: Record<NavLinkRadius, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
        sizeStyles[size],
        radiusStyles[radius],
        className
      )}
      {...props}
    >
      {Icon && (
        <IconBox
          size="xs"
          variant="transparant"
          icon={Icon}
          iconColor={iconColor}
        />
      )}
      <Typography
        variant={size === "xs" ? "caption" : "body2"}
        color="secondary"
      >
        {label}
      </Typography>
    </Link>
  );
};

export default NavLink;
