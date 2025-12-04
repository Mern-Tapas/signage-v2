import React from "react";
import clsx from "clsx";

type TextareaSize = "sm" | "md" | "lg";
type TextareaVariant = "default" | "outlined" | "filled";
type TextareaRadius = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
type TextareaResize = "none" | "vertical" | "horizontal" | "both";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaSize?: TextareaSize; // renamed so it doesn't conflict with other libs
  variant?: TextareaVariant;
  radius?: TextareaRadius;
  label?: string;
  helperText?: string;
  error?: string;
  rows?: number;
  resize?: TextareaResize;
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      textareaSize = "md",
      variant = "default",
      radius = "md",
      label,
      helperText,
      error,
      rows = 2,
      resize = "vertical",
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "block w-full focus:outline-none focus:ring-2 transition placeholder:text-gray-400 ";

    const sizeMap: Record<TextareaSize, string> = {
      sm: "text-sm px-2 py-1",
      md: "text-base px-3 py-2",
      lg: "text-lg px-4 py-3",
    };

    const variantMap: Record<TextareaVariant, string> = {
      default:
        "border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-blue-500",
      outlined:
        "border-2 border-gray-300 dark:border-gray-700 bg-transparent focus:border-blue-500 focus:ring-blue-500",
      filled:
        "bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-blue-500",
    };

    const radiusMap: Record<TextareaRadius, string> = {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    };

    const resizeMap: Record<TextareaResize, string> = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    };

    const errorStyles = error
      ? "border-red-500 focus:ring-red-500 dark:border-red-500"
      : "";

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          rows={rows}
          className={clsx(
            baseStyles,
            sizeMap[textareaSize],
            variantMap[variant],
            radiusMap[radius],
            resizeMap[resize],
            errorStyles,
            className
          )}
          {...props}
        />

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

Textarea.displayName = "Textarea";
export default Textarea;
