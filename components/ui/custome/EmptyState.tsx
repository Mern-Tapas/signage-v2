'use client'
import { LucideIcon } from "lucide-react";
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import { Button } from "./Button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  iconGradient?: string;
  iconSize?: number;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
  iconGradient = "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-700",
  iconSize = 60,
}: EmptyStateProps) {
  return (
    <Container className="h-[600px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Icon */}
        <div className={`p-8 rounded-full ${iconGradient}`}>
          <Icon size={iconSize} strokeWidth={1} className="text-white" />
        </div>

        {/* Text */}
        <div>
          <Typography className="text-center" variant="h3">
            {title}
          </Typography>

          {description && (
            <Typography className="text-center" variant="body2">
              {description}
            </Typography>
          )}
        </div>

        {/* Action */}
        {buttonText && onButtonClick && (
          <Button variant="primary" size="lg" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </Container>
  );
}
