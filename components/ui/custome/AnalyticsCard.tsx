import React from "react";
import Container from "../../layout/Container";
import { Typography } from "../../typography/typography";
import { LucideIcon } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "increase" | "decrease" | "neutral";
  icon?: LucideIcon;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
}) => {
  const changeColor =
    changeType === "increase"
      ? "success"
      : changeType === "decrease"
      ? "error"
      : "muted";

  return (
    <Container
      variant="primary"
      radius="xl"
      shadow="sm"
      padding="lg"
      className="flex flex-col gap-3 w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <Typography variant="body2" color="secondary">
          {title}
        </Typography>
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900 flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
        )}
      </div>

      {/* Value */}
      <Typography variant="metric-lg" color="primary">
        {value}
      </Typography>

      {/* Change info */}
      {change && (
        <Typography variant="body2" color={changeColor}>
          {changeType === "increase" && "▲ "}
          {changeType === "decrease" && "▼ "}
          {change}
        </Typography>
      )}
    </Container>
  );
};

export default AnalyticsCard;
