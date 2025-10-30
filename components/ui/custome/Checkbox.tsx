import React from "react";
import clsx from "clsx";
import { Check } from "lucide-react";
import { Typography } from "@/components/typography/typography";

type CheckboxSize = "sm" | "md" | "lg";
type CheckboxColor = "primary" | "secondary" | "success" | "warning" | "error";
type CheckboxRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color" | "onChange"> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: CheckboxSize;
  color?: CheckboxColor;
  radius?: CheckboxRadius;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  color = "primary",
  radius = "md",
  className,
  ...props
}) => {
  const sizeClasses: Record<CheckboxSize, string> = {
    sm: "w-4 h-4 text-[10px]",
    md: "w-5 h-5 text-[12px]",
    lg: "w-6 h-6 text-[14px]",
  };

  const colorClasses: Record<CheckboxColor, string> = {
    primary: "border-blue-500 checked:bg-blue-600 checked:border-blue-600",
    secondary: "border-gray-500 checked:bg-gray-600 checked:border-gray-600",
    success: "border-green-500 checked:bg-green-600 checked:border-green-600",
    warning: "border-amber-500 checked:bg-amber-500 checked:border-amber-500",
    error: "border-red-500 checked:bg-red-600 checked:border-red-600",
  };

  const radiusClasses: Record<CheckboxRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <label
      className={clsx(
        "inline-flex items-center gap-2 cursor-pointer select-none",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className={clsx(
            "appearance-none border flex items-center justify-center transition-colors duration-150",
            sizeClasses[size],
            colorClasses[color],
            radiusClasses[radius],
            "checked:text-white focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
          )}
          {...props}
        />
        {checked && (
          <Check
            className={clsx(
              "absolute text-white pointer-events-none",
              size === "sm" && "w-3 h-3",
              size === "md" && "w-3.5 h-3.5",
              size === "lg" && "w-4 h-4"
            )}
          />
        )}
      </div>

      {label && (
        <Typography
          variant="body2"
          color={disabled ? "muted" : "primary"}
          className="select-none"
        >
          {label}
        </Typography>
      )}
    </label>
  );
};

export default Checkbox;
