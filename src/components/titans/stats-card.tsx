import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

export interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  change?: string;
  /** "up" | "down" | "neutral" — controls trend icon + color */
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  hint?: string;
}

/**
 * StatsCard — Arabic KPI card. Numbers render with tabular-nums;
 * negative trends auto-style red, positive green (RTL-safe flex).
 */
export function StatsCard({ title, value, change, trend = "neutral", icon, hint, className, ...props }: StatsCardProps) {
  const TrendIcon = trend === "down" ? TrendingDown : TrendingUp;
  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-extrabold tnum">{value}</p>
          </div>
          {icon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:size-5">
              {icon}
            </div>
          )}
        </div>
        {(change || hint) && (
          <div className="mt-3 flex items-center gap-2 text-xs">
            {change && (
              <Badge variant={trend === "down" ? "destructive" : trend === "up" ? "success" : "secondary"} className="gap-1">
                <TrendIcon className="size-3" />
                <span className="tnum">{change}</span>
              </Badge>
            )}
            {hint && <span className="text-muted-foreground">{hint}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
