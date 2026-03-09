import React from "react";
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import IconBox from "./IconBox";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;

  icon?: LucideIcon;

  iconVariant?: "default" | "primary" | "secondary" | "transparant";

  iconColor?:
    | "primary"
    | "secondary"
    | "muted"
    | "success"
    | "warning"
    | "error"
    | "info";

  trend?: number; // +5 or -3
  progress?: number; // 0 - 100
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconVariant = "default",
  iconColor = "primary",
  trend,
  progress
}) => {

  const isPositive = trend && trend > 0

  return (

    <Container
      padding="md"
      variant="primary"
      radius="xl"
      className="transition hover:shadow-md hover:-translate-y-0.5"
    >

      {/* HEADER */}

      <Container className="flex items-center justify-between mb-3">

        <Container className="flex items-center gap-2">

          {Icon && (
            <IconBox
              icon={Icon}
              size="xs"
              variant={iconVariant}
              iconColor={iconColor}
            />
          )}

          <Typography variant="body2" color="secondary">
            {title}
          </Typography>

        </Container>

        {/* TREND */}

        {trend !== undefined && (

          <Container
            className={`flex items-center gap-1 text-xs font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >

            {isPositive ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}

            {Math.abs(trend)}%

          </Container>

        )}

      </Container>


      {/* VALUE */}

      <Typography variant="metric-md" weight="bold">
        {value}
      </Typography>


      {/* SUBTITLE */}

      {subtitle && (
        <Typography variant="overline" color="muted">
          {subtitle}
        </Typography>
      )}


      {/* PROGRESS BAR */}

      {progress !== undefined && (

        <div className="mt-3 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">

          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-blue-500 rounded-full"
          />

        </div>

      )}

    </Container>
  );
};

export default AnalyticsCard;