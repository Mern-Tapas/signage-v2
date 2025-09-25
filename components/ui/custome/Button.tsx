// components/ui/button.tsx
import * as React from "react";
import { cn } from "@/lib/utils"; // Tailwind class merge helper
import { Loader2 } from "lucide-react";

export type ButtonVariant = "default" | "primary" | "secondary" | "outline" | "ghost"|"danger";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode; // Lucide icon or any ReactNode
  iconPosition?: "left" | "right";
}

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-white text-black focus:ring-2 focus:ring-gray-400",
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400",
  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400",
  ghost:
    "text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400",
    danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs rounded-lg",
  md: "px-4 py-2 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-2xl",
  icon: "p-2 rounded-lg ", // perfect for icon-only
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      className,
      isLoading = false,
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/* Left Icon or Loader */}
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          icon && iconPosition === "left" && icon
        )}

        {/* Button text */}
        {children}

        {/* Right Icon */}
        {!isLoading && icon && iconPosition === "right" && icon}
      </button>
    );
  }
);

Button.displayName = "Button";
