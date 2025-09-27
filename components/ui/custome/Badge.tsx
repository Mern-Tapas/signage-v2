import React from "react";
import clsx from "clsx";

type BadgeColor =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";

type BadgeVariant = "filled" | "outlined";
type BadgeSize = "sm" | "md" | "lg";
type BadgeRadius = "sm" | "md" | "lg" | "full";
type IconPosition = "left" | "right";

export interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  variant?: BadgeVariant;
  size?: BadgeSize;
  radius?: BadgeRadius;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = "default",
  variant = "filled",
  size = "md",
  radius = "full",
  icon,
  iconPosition = "left",
  className,
}) => {
  const baseStyles =
    "inline-flex items-center font-medium whitespace-nowrap transition";

  const sizeStyles: Record<BadgeSize, string> = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3 py-1",
  };

  const radiusStyles: Record<BadgeRadius, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const filledStyles: Record<BadgeColor, string> = {
    default:
      "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    primary:
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    success:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    warning:
      "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    error:
      "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    info: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",
  };

  const outlinedStyles: Record<BadgeColor, string> = {
    default:
      "border border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-200",
    primary:
      "border border-blue-500 text-blue-600 dark:text-blue-400",
    success:
      "border border-green-500 text-green-600 dark:text-green-400",
    warning:
      "border border-amber-500 text-amber-600 dark:text-amber-400",
    error:
      "border border-red-500 text-red-600 dark:text-red-400",
    info: "border border-sky-500 text-sky-600 dark:text-sky-400",
  };

  const variantStyles =
    variant === "filled" ? filledStyles[color] : outlinedStyles[color];

  return (
    <span
      className={clsx(
        baseStyles,
        sizeStyles[size],
        radiusStyles[radius],
        variantStyles,
        className
      )}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-1 flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-1 flex items-center">{icon}</span>
      )}
    </span>
  );
};
