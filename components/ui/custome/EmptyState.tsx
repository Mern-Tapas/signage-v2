'use client'
import { LucideIcon } from "lucide-react";
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import { Button } from "./Button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  /** Primary CTA */
  buttonText?: string;
  onButtonClick?: () => void;
  /** Optional secondary link/action */
  secondaryText?: string;
  onSecondaryClick?: () => void;
  /** Tailwind gradient classes for the icon background */
  iconGradient?: string;
  iconSize?: number;
  /** Decorative hint tags shown below description e.g. ["Upload a file", "Create playlist"] */
  hints?: string[];
  /** Make the card fill parent height or use auto height */
  fullHeight?: boolean;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
  secondaryText,
  onSecondaryClick,
  iconGradient = "from-gray-100 to-gray-200",
  iconSize = 28,
  hints,
  fullHeight = true,
}: EmptyStateProps) {
  return (
    <Container
      className={`flex items-center justify-center ${fullHeight ? "min-h-[520px]" : "py-16"}`}
    >
      <div className="flex flex-col items-center gap-7 max-w-sm w-full text-center">

        {/* ── Icon ring stack ── */}
        <div className="relative flex items-center justify-center">
          {/* outermost faint ring */}
          <div className="absolute w-36 h-36 rounded-full border border-dashed border-gray-200 animate-[spin_18s_linear_infinite]" />
          {/* middle ring */}
          <div className="absolute w-24 h-24 rounded-full border border-gray-100 bg-white shadow-sm" />
          {/* icon bubble */}
          <div
            className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${iconGradient} flex items-center justify-center shadow-md`}
          >
            <Icon size={iconSize} strokeWidth={1.5} className="text-white drop-shadow-sm" />
          </div>
        </div>

        {/* ── Text ── */}
        <div className="space-y-2">
          <Typography variant="h4" weight="medium" className="text-gray-800 text-center">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="secondary" className="leading-relaxed text-center">
              {description}
            </Typography>
          )}
        </div>

        {/* ── Hint chips ── */}
        {hints && hints.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {hints.map((hint) => (
              <span
                key={hint}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 border border-gray-200 text-gray-500"
              >
                <span className="w-1 h-1 rounded-full bg-gray-400 inline-block" />
                {hint}
              </span>
            ))}
          </div>
        )}

        {/* ── Actions ── */}
        {(buttonText || secondaryText) && (
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {buttonText && onButtonClick && (
              <Button
                variant="primary"
                size="lg"
                onClick={onButtonClick}
                className="w-full sm:w-auto"
              >
                {buttonText}
              </Button>
            )}
            {secondaryText && onSecondaryClick && (
              <Button
                variant="ghost"
                size="lg"
                onClick={onSecondaryClick}
                className="w-full sm:w-auto text-gray-500 hover:text-gray-700"
              >
                {secondaryText}
              </Button>
            )}
          </div>
        )}

      </div>
    </Container>
  );
}