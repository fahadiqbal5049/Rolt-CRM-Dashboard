import React from "react";
import { Area, AreaChart, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { x: 1, desktop: 186 },
  { x: 2, desktop: 305 },
  { x: 3, desktop: 237 },
  { x: 4, desktop: 73 },
  { x: 5, desktop: 209 },
  { x: 6, desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#A1A1AA",
  },
} satisfies ChartConfig;

const StatsWithSingleChart: React.FC = () => {
  return (
    <div className="w-full max-w-[600px] mx-auto flex flex-col gap-3">
      <h2 className="text-neutral-100 font-semibold text-[20px]">
        Data Title
      </h2>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0,
          }}
        >
          {/* <CartesianGrid  color="#3F3F464D" opacity={.1} /> */}
          <XAxis dataKey="x" tickLine={false} axisLine={false} tickMargin={6} />
          <YAxis
            dataKey="desktop"
            tickLine={false}
            axisLine={false}
            tickMargin={6}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default StatsWithSingleChart;
