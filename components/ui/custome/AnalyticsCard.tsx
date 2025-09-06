import React from "react";
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import IconBox from "./IconBox";
import { LucideIcon } from "lucide-react";

interface AnalyticsCardProps {
  title: string;              // Card title (e.g., "Users")
  value: string | number;     // Main metric (e.g., "2567")
  subtitle?: string;          // Subtext (e.g., "New Users")
  icon?: LucideIcon;          // Icon (optional)
  iconVariant?: "default" | "primary" | "secondary" | "transparant"; 
  iconColor?: 
    | "primary" 
    | "secondary" 
    | "muted" 
    | "success" 
    | "warning" 
    | "error" 
    | "info";
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconVariant = "default",
  iconColor = "primary",
}) => {
  return (
    <Container padding="md" variant="primary" radius="xl">
      <Container className="flex items-center gap-2 mb-2">
        {Icon && (
          <IconBox 
            icon={Icon} 
            size="xs" 
            variant={iconVariant} 
            iconColor={iconColor} 
          />
        )}
        <Typography variant="h6" >{title}</Typography>
      </Container>

      <Typography variant="metric-md" weight="extrabold">
        {value}
      </Typography>

      {subtitle && (
        <Typography variant="overline"  color="muted">
          {subtitle}
        </Typography>
      )}
    </Container>
  );
};

export default AnalyticsCard;
