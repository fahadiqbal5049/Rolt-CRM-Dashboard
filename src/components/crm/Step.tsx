import type { StepProps } from "@/types/crm";
import React from "react";

const Step: React.FC<StepProps> = ({ title, amount, count }) => {
  return (
    <div className="rounded-xl border border-[#3F3F464D] bg-neutral-600 px-3 py-4 flex flex-col gap-[10px] text-neutral-50 w-[222px]">
      <div className="flex justify-between items-center">
        <span className="text-sm">{title}</span>
        <button aria-label="Toggle">
          <img src="/arrow-down.svg" alt="Toggle Arrow" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/coin.svg" alt="Coin Icon" />
          <span className="text-sm">{amount}</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/dash-cust.svg" alt="Dash Icon" />
          <span className="text-sm">{count}</span>
        </div>
      </div>
    </div>
  );
};

export default Step;
