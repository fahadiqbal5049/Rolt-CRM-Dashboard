import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Days = [
  {
    number: 3,
    name: "Days open",
  },
  {
    number: 2,
    name: "Days in step",
  },
  {
    number: 1,
    name: "Interactions",
  },
  {
    number: 0,
    name: "Days without interaction",
  },
];

const Interaction: React.FC = () => {
  return (
    <div className="w-full text-neutral-50  order-3 xl:order-2 xl:col-span-1 md:col-span-2 col-span-1">
      <div className=" rounded-xl flex flex-col gap-[10px] p-4 border border-[#3F3F464D]">
        <div className=" flex gap-[24px] flex-wrap">
          {Days.map((day, index) => (
            <div
              key={index}
              className="   text-center rounded-xl border border-[#3F3F464D] py-2 px-[11px]  max-w-[140px] w-full"
            >
              <h3 className=" text-xl">{day.number}</h3>
              <p className=" text-sm font-light">{day.name}</p>
            </div>
          ))}
        </div>
        <Textarea
          placeholder="Type a note"
          className="min-h-[176px] rounded-xl bg-[#18181B] border border-[#3F3F464D]"
        />
        <Button className=" self-end min-w-[120px] bg-[#E4E4E7]">Save</Button>
      </div>
      <h4 className=" my-[34px] text-[20px] font-semibold text-[#E4E4E7]">Interactions</h4>
      <div className="interactions flex flex-col gap-10">
        <div className=" flex gap-[19px] items-center">
          <div className=" text-center flex flex-col items-center gap-[10px]">
            <div className="  ">
              <img src="/white-circle.png" alt="" className=" w-6 h-6" />
            </div>
            <p className=" text-xs">DD/MM/AAAA</p>
          </div>
          <div className=" px-3 xl:px-6 py-3 rounded-xl bg-[#18181B] border border-[#3F3F464D]">
            <p className=" text-lg font-semibold">Note</p>
            <p className=" text-sm max-w-[404px] xl:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className=" flex gap-[19px] items-center">
          <div className=" text-center flex flex-col items-center gap-[10px]">
            <div className="white-circle ">
              <img src="/white-circle.png" alt="" className=" w-6 h-6" />
            </div>
            <p className=" text-xs">DD/MM/AAAA</p>
          </div>
          <div className=" px-3 xl:px-6 py-3 rounded-xl bg-[#18181B] border border-[#3F3F464D]">
            <p className=" text-lg font-semibold">Note</p>
            <p className=" text-sm max-w-[404px] xl:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className=" flex gap-[19px] items-center">
          <div className=" text-center flex flex-col items-center gap-[10px]">
            <div className="white-circle ">
              <img src="/white-circle.png" alt="" className=" w-6 h-6" />
            </div>
            <p className=" text-xs">DD/MM/AAAA</p>
          </div>
          <div className=" px-3 xl:px-6 py-3 rounded-xl bg-[#18181B] border border-[#3F3F464D]">
            <p className=" text-lg font-semibold">Note</p>
            <p className=" text-sm max-w-[404px] xl:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className=" flex gap-[19px] items-center">
          <div className=" text-center flex flex-col items-center gap-[10px]">
            <div className="white-circle ">
              <img src="/white-circle.png" alt="" className=" w-6 h-6" />
            </div>
            <p className=" text-xs">DD/MM/AAAA</p>
          </div>
          <div className=" px-3 xl:px-6 py-3 rounded-xl bg-[#18181B] border border-[#3F3F464D]">
            <p className=" text-lg font-semibold">Note</p>
            <p className=" text-sm max-w-[404px] xl:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className=" flex gap-[19px] items-center">
          <div className=" text-center flex flex-col items-center gap-[10px]">
            <div className="white-circle ">
              <img src="/white-circle.png" alt="" className=" w-6 h-6" />
            </div>
            <p className=" text-xs">DD/MM/AAAA</p>
          </div>
          <div className="flex flex-col gap-4 w-full min-h-[178px]   px-6 py-3 rounded-xl bg-[#18181B] border border-[#3F3F464D]">
            <p className=" text-lg font-semibold">Contact Created</p>
            <Badge className=" p py-[6px]">Campaign 1</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
