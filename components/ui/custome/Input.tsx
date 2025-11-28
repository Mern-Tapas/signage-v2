import React from "react";
import clsx from "clsx";

type InputSize = "sm" | "md" | "lg";
type InputVariant = "default" | "outlined" | "filled";
type IconPosition = "left" | "right";
type InputRadius = "none" | "sm" | "md" |  "xl" | "2xl";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  inputSize?: InputSize;   // custom size
  variant?: InputVariant;
  radius?: InputRadius;    // NEW radius
  error?: string;
  label?: string;
  helperText?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = "md",
      variant = "default",
      radius = "md",
      error,
      label,
      helperText,
      className,
      icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "block w-full focus:outline-none focus:ring-2 transition";

    const sizeStyles: Record<InputSize, string> = {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    };

    const variantStyles: Record<InputVariant, string> = {
      default:
        "border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-blue-500",
      outlined:
        "border-2 border-gray-300 dark:border-gray-700 bg-transparent focus:border-blue-500 focus:ring-blue-500",
      filled:
        "bg-white dark:bg-gray-800 dark:border-gray-700 focus:ring-blue-500",
    };

    const radiusStyles: Record<InputRadius, string> = {
     none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
    };

    const errorStyles = error
      ? "border-red-500 focus:ring-red-500 dark:border-red-500"
      : "";

    const iconPadding = icon
      ? iconPosition === "left"
        ? "pl-9"
        : "pr-9"
      : "";

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <div className="relative w-full">
          {icon && iconPosition === "left" && (
            <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-400">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            className={clsx(
              baseStyles,
              sizeStyles[inputSize],
              variantStyles[variant],
              radiusStyles[radius],
              errorStyles,
              iconPadding,
              className
            )}
            {...props}
          />

          {icon && iconPosition === "right" && (
            <span className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400">
              {icon}
            </span>
          )}
        </div>

        {(helperText || error) && (
          <p
            className={clsx(
              "text-xs mt-1",
              error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
