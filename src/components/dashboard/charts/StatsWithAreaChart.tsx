import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#353538",
  },
  mobile: {
    label: "Mobile",
    color: "#A1A1AA",
  },
} satisfies ChartConfig;

const StatsWithAreaChart: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-neutral-100 font-semibold text-[20px]">
        Data Title
      </h2>
      <h2 className="text-[30px] text-neutral-100 font-semibold">941</h2>
      <ChartContainer className="h-[260px] mt-2" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0,
          }}
        >
          <CartesianGrid vertical={true} horizontal={false}  stroke="#FAFAFA" opacity={.5} />
          <XAxis
            dataKey="month"
            tickLine={true}
            axisLine={false}
            tick={{ fill: "#FAFAFA" }}
            tickFormatter={() => ""}
          />
          <ChartTooltip
            cursor={{ stroke: "#FAFAFA", strokeWidth:1 }}
            content={<ChartTooltipContent />}
          />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default StatsWithAreaChart;
