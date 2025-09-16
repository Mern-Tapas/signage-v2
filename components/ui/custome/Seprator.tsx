import React from "react";
import clsx from "clsx";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
  color?: "muted" | "primary" | "secondary" | "dark" | "light";
  thickness?: "thin" | "normal" | "thick";
  length?: string; // custom width/height (e.g. "50%", "200px")
  className?: string;
};

const colorMap: Record<NonNullable<SeparatorProps["color"]>, string> = {
  muted: "border-gray-300 dark:border-gray-700",
  primary: "border-blue-500",
  secondary: "border-green-500",
  dark: "border-gray-900",
  light: "border-gray-100",
};

const thicknessMap: Record<NonNullable<SeparatorProps["thickness"]>, string> = {
  thin: "border",
  normal: "border-2",
  thick: "border-4",
};

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  variant = "solid",
  color = "muted",
  thickness = "thin",
  length,
  className,
}) => {
  const base = clsx(
    "shrink-0",
    colorMap[color],
    thicknessMap[thickness],
    {
      "w-full border-t": orientation === "horizontal",
      "h-full border-l": orientation === "vertical",
    },
    className
  );

  const style: React.CSSProperties =
    orientation === "horizontal"
      ? { borderStyle: variant, width: length }
      : { borderStyle: variant, height: length };

  return <div className={base} style={style} />;
};
