import CrmHeader from "@/components/crm/CrmHeader";
import CrmMain from "@/components/crm/CrmMain";
import React from "react";

const Crm: React.FC = () => {
  return (
    <div>
      <h2 className="text-[26px] sm:text-[30px] uppercase font-semibold text-neutral-50">
        crm
      </h2>
      <CrmHeader />
      <CrmMain />
    </div>
  );
};

export default Crm;
