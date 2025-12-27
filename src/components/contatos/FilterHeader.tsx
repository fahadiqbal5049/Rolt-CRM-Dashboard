import React from "react";
import Search from "../ui/shared/Search";
import { Plus } from "lucide-react";
import MoreFilter from "../ui/shared/MoreFilter";

const FilterHeader: React.FC = () => {
  return (
    <div className="w-full mt-3 sm:mt-4 flex-wrap gap-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* search ---------> */}
        <Search styles="w-[170px] sm:w-[220px] md:w-[270px] xl:w-[417px] min-h-[40px]"/>
        {/* more filter ----------> */}
        <MoreFilter/>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className="border min-h-[40px] px-3 border-neutral-500 bg-neutral-600 rounded-[6px] flex justify-center items-center gap-2">
          <p className="text-neutral-50 font-medium text-[14px]">
            New contact
          </p>
          <Plus size={18} color="#71717A" />
        </button>
        <button className="border min-h-[40px] text-neutral-50 font-medium text-[14px] px-3 border-neutral-500 bg-neutral-600 rounded-[6px] flex justify-center items-center gap-2">
          Export
        </button>
        <button className="border min-h-[40px] text-neutral-50 font-medium text-[14px] px-3 border-neutral-500 bg-neutral-600 rounded-[6px] flex justify-center items-center gap-2">
          Import
        </button>
      </div>
    </div>
  );
};

export default FilterHeader;

