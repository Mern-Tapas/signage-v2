import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
  radius?: "sm" | "md" | "lg" | "xl" | "2xl";
  shadow?: "none" | "sm" | "md" | "lg";
};

const variantClasses = {
  default: "bg-white dark:bg-gray-900  dark:border-gray-700",
  primary: "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
  secondary: "bg-transparent border border-gray-300 dark:border-gray-600",
};

const radiusClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

const shadowClasses = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  radius = "lg",
  shadow = "none",
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col w-full ",
        variantClasses[variant],
        radiusClasses[radius],
        shadowClasses[shadow],
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={clsx("px-4 py-3 border-b border-gray-200 dark:border-gray-700", className)}>
    {children}
  </div>
);

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={clsx("px-4 py-4", className)}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={clsx("px-4 py-3 border-t border-gray-200 dark:border-gray-700", className)}>
    {children}
  </div>
);
