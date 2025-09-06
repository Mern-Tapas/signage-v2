import React from "react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

type IconBoxSize = "xs" | "sm" | "md" | "lg";
type IconBoxRadius = "sm" | "md" | "lg" | "full";
type IconBoxVariant = "default" | "primary" | "secondary" | "transparant";
type IconColor =
  | "primary"
  | "secondary"
  | "muted"
  | "success"
  | "warning"
  | "error"
  | "info";

interface IconBoxProps {
  icon: LucideIcon;
  size?: IconBoxSize;
  radius?: IconBoxRadius;
  variant?: IconBoxVariant;
  iconColor?: IconColor;
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  size = "md",
  radius = "lg",
  variant = "default",
  iconColor = "primary",
  className,
}) => {
  const sizeStyles: Record<IconBoxSize, string> = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  const radiusStyles: Record<IconBoxRadius, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const variantStyles: Record<IconBoxVariant, string> = {
    transparant: "",
    default: "bg-gray-100 dark:bg-gray-800",
    primary: "bg-blue-100 dark:bg-blue-900",
    secondary: "bg-gray-200 dark:bg-gray-700",
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
    <div
      className={clsx(
        "flex items-center justify-center",
        sizeStyles[size],
        radiusStyles[radius],
        variantStyles[variant],
        className
      )}
    >
      <Icon strokeWidth={1.5} className={clsx("w-5 h-5", iconColorStyles[iconColor])} />
    </div>
  );
};

export default IconBox;
