import React from "react";
import { PieChart, Pie } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 155, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 150, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
];

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "#3d3d42",
  },
  safari: {
    label: "Safari",
    color: "#505055",
  },
  firefox: {
    label: "Firefox",
    color: "#29292d",
  },
} satisfies ChartConfig;

const StatsWithPieChart: React.FC = () => {
  return (
    <div className="w-full flex items-center flex-col justify-between gap-4">
      <h2 className="text-neutral-100 font-semibold text-[20px]">
        Data Title
      </h2>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square min-h-[280px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie data={chartData} dataKey="visitors" nameKey="browser" />
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default StatsWithPieChart;
