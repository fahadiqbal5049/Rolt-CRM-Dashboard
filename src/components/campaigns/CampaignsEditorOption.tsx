import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { EllipsisVertical } from "lucide-react";

const CampaignsEditorOption: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="w-[34px] h-[34px] flex justify-center items-center border-[1px] border-[#3F3F464D] bg-neutral-600 rounded-[8px]">
          <EllipsisVertical size={20} color="#FAFAFA" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="!bg-[#18181B] p-1 w-[95px] flex flex-col gap-1 border-[#3F3F464D] border">
        <button className="w-full flex justify-center rounded-[7px] items-center bg-transparent hover:bg-[#27272A] min-h-[29px]">
          Configure
        </button>
        <button className="w-full flex justify-center rounded-[7px] items-center bg-transparent hover:bg-[#27272A] min-h-[29px]">
          Remove
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default CampaignsEditorOption;
