"use client";

import React from "react";
import clsx from "clsx";

type SwitchSize = "sm" | "md" | "lg";
type SwitchColor = "primary" | "success" | "warning" | "danger";

interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  size?: SwitchSize;
  color?: SwitchColor;
  disabled?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: { track: "w-8 h-5", thumb: "w-3 h-3", translate: "translate-x-4" },
  md: { track: "w-10 h-6", thumb: "w-4 h-4", translate: "translate-x-5" },
  lg: { track: "w-14 h-8", thumb: "w-6 h-6", translate: "translate-x-7" },
};

const colorConfig: Record<SwitchColor, string> = {
  primary: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  size = "md",
  color = "primary",
  disabled = false,
  className,
}) => {
  const sz = sizeConfig[size];

  return (
    <button
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={clsx(
        "relative inline-flex items-center rounded-full transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        checked ? colorConfig[color] : "bg-gray-300 dark:bg-gray-700",
        disabled && "opacity-50 cursor-not-allowed",
        sz.track,
        className
      )}
    >
      {/* Thumb */}
      <div
        className={clsx(
          "bg-white rounded-full shadow-md transform transition-all duration-300",
          sz.thumb,
          checked ? sz.translate : "translate-x-1"
        )}
      ></div>
    </button>
  );
};
