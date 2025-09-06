import React from "react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react"; // if you're using lucide-react icons

type Variant = "default" | "primary" | "secondary";
type Radius = "sm" | "md" | "lg" | "full";
type Size = "sm" | "md" | "lg";
type IconColor = 
  | "primary"
  | "secondary"
  | "muted"
  | "success"
  | "warning"
  | "error"
  | "info";

interface LinkIconButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: LucideIcon;
  variant?: Variant;
  radius?: Radius;
  size?: Size;
  iconColor?: IconColor;
  className?: string;
}

const LinkIconButton: React.FC<LinkIconButtonProps> = ({
  href,
  icon: Icon,
  variant = "default",
  radius = "full",
  size = "md",
  iconColor = "primary",
  className,
  ...props
}) => {
  const variantStyles: Record<Variant, string> = {
    default: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
    primary: "bg-white hover:bg-gray-300 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",
  };

  const radiusStyles: Record<Radius, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const sizeStyles: Record<Size, string> = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const iconColorStyles: Record<IconColor, string> = {
    primary: "text-gray-900 dark:text-gray-100",
    secondary: "text-gray-700 dark:text-gray-300",
    muted: "text-gray-500 dark:text-gray-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-amber-600 dark:text-amber-400",
    error: "text-red-600 dark:text-red-400",
    info: "text-blue-600 dark:text-blue-400",
  };

  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-center transition-colors",
        variantStyles[variant],
        radiusStyles[radius],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <Icon strokeWidth={1.5} className={clsx("w-5 h-5", iconColorStyles[iconColor])} />
    </a>
  );
};

export default LinkIconButton;
