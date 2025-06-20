import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WorkoutSummaryProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export default function WorkoutSummary({ title, value, change, trend }: WorkoutSummaryProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <div className="flex items-center pt-1">
            {trend === "up" && <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />}
            {trend === "down" && <ArrowDown className="mr-1 h-4 w-4 text-red-500" />}
            {trend === "neutral" && <Minus className="mr-1 h-4 w-4 text-gray-500" />}
            <p className={cn(
              "text-xs",
              trend === "up" && "text-emerald-500",
              trend === "down" && "text-red-500",
              trend === "neutral" && "text-muted-foreground"
            )}>
              {change}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}