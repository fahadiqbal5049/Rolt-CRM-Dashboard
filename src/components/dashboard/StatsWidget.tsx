import React from "react";

interface Props{
     name?:string;
     value?:string
}


const StatsWidget: React.FC<Props> = ({name,value}:Props) => {
  return (
    <div className="w-[226px] justify-center min-h-[144px] border gap-2 flex flex-col border-[#3F3F464D] bg-[#20202040] rounded-[12px] px-3">
      <h2 className="text-[48px] leading-[48px] font-black text-neutral-50">
        {value}
      </h2>
      <p className="text-[16px] text-neutral-50 font-medium">{name}</p>
    </div>
  );
};

export default StatsWidget;
