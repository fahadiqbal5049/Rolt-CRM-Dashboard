import React from "react";
import Search from "../ui/shared/Search";
import MoreFilter from "../ui/shared/MoreFilter";
import AddNewCampaign from "./AddNewCampaign";

const FilterHeader: React.FC = () => {
  return (
    <div className="w-full mt-3 sm:mt-4 flex-wrap gap-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* search ---------> */}
        <Search
          placeholder="Search"
          styles="w-[170px] sm:w-[220px] md:w-[270px] xl:w-[417px] min-h-[40px]"
        />
        {/* more filter ----------> */}
        <MoreFilter />
      </div>
      <AddNewCampaign />
    </div>
  );
};

export default FilterHeader;
