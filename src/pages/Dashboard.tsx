import React from "react";
import StatsWidget from "@/components/dashboard/StatsWidget";
import StatsWithAreaChart from "@/components/dashboard/charts/StatsWithAreaChart";
import StatsWithPieChart from "@/components/dashboard/charts/StatsWithPieChart";
import StatsWithSingleChart from "@/components/dashboard/charts/StatsWithSingleChart";
import AssistentesTable from "@/components/dashboard/tables/AssistentesTable";
import CampaignsTable from "@/components/dashboard/tables/CampaignsTable";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex gap-3 justify-center xl:justify-start items-center flex-wrap">
        {StatsWidgetData.map((item, index) => {
          return (
            <StatsWidget key={index} value={item.value} name={item.name} />
          );
        })}
      </div>
      <div className="w-full gap-4 mt-[24px] border-[1px] border-[#3F3F464D] rounded-[12px] p-5 grid grid-cols-1 2xl:grid-cols-2">
        <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2">
          {/* Area chart -------------------------> */}
          <StatsWithAreaChart />
          <StatsWithPieChart />
        </div>
        <StatsWithSingleChart />
      </div>
      <div className="w-full gap-4 mt-6 grid grid-cols-1 lg:grid-cols-2">
        <AssistentesTable />
        <CampaignsTable />
      </div>
    </div>
  );
};

export default Dashboard;

export const StatsWidgetData = [
  {
    name: "Contacts",
    value: "941k",
  },
  {
    name: "Attendances",
    value: "419k",
  },
  {
    name: "Active Assistants",
    value: "194k",
  },
];
