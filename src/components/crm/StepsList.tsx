import React from "react";
import Step from "./Step";
import type { StepProps } from "@/types/crm";

const stepsData: StepProps[] = [
  { title: "Step 1", amount: "0,000.00", count: 4 },
  { title: "Step 2", amount: "0,000.00", count: 2 },
  { title: "Step 3", amount: "0,000.00", count: 5 },
  { title: "Step 4", amount: "0,000.00", count: 1 },
  { title: "Step 5", amount: "0,000.00", count: 1 },
];

const StepsList: React.FC = () => {
  return (
    <div className="flex  gap-4 min-w-[1200px]">
      {stepsData.map((stepData, idx) => (
        <Step key={idx} title={stepData.title} amount={stepData.amount} count={stepData.count} />
      ))}
    </div>
  );
};

export default StepsList;
