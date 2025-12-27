import { EllipsisVertical } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TagOptions } from "@/data/SelectOptions";
import { Input } from "@/components/ui/input";
import { Crm1Options, Crm2Options } from "@/components/campaigns/AddNewCampaign";
import { Badge } from "@/components/ui/badge";

const Contact: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3 xl:order-3 order-2">
      {/* contact ----------> */}
      <div className="w-full p-4 gap-3 flex rounded-[12px] items-start flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <div className="w-full flex justify-between items-center gap-3">
          <h3 className="text-[20px] font-semibold text-neutral-50">Contact</h3>
          <EllipsisVertical color="#FAFAFA" size={16} />
        </div>
        <p className="text-[14px] mt-2 font-medium text-neutral-50">Lead name</p>
        <p className="text-[14px] font-medium text-neutral-50">lorem@ipsum.com</p>
        <p className="text-[14px] font-medium text-neutral-50">(00) 0000-0000</p>
        <div className="w-full mt-2 flex justify-center items-center">
          <Button>Chat with this contact</Button>
        </div>
      </div>
      {/* Appointments ----------> */}
      <div className="w-full p-4 gap-3 flex rounded-[12px] items-start flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <div className="w-full flex justify-between items-center gap-3">
          <h3 className="text-[20px] font-semibold text-neutral-50">Appointments</h3>
          <button>
            <img src="/add_circle.svg" className="w-[24px] h-[24px]" alt="" />
          </button>
        </div>
        <div className="w-full mt-3 flex flex-col gap-2">
          {[0, 1, 2].map((_, index) => {
            return (
              <div
                key={index}
                className="w-full bg-[#27272A] border-[1px] border-[#3F3F464D] rounded-[4px] px-3 py-[6px] flex justify-between items-center gap-2"
              >
                <p className="text-[14px] font-medium text-neutral-50">MM/DD/YYYY - Meeting</p>
                <X size={14} color="#FAFAFA" />
              </div>
            );
          })}
        </div>
      </div>
      {/* Assistant -----------> */}
      <div className="w-full p-4 gap-4 flex rounded-[12px] items-start flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <div className="w-full flex justify-between gap-2">
          <p className="text-[14px] font-semibold text-neutral-50">
            Assistant <br /> Connected
          </p>
          <Switch
            activeColor="data-[state=checked]:bg-[#22c55e]"
            inactiveColor="data-[state=unchecked]:bg-[#3F3F46]"
            thumbColor="bg-white"
          />
        </div>
        {/*  Tag ----->  */}
        <Select>
          <SelectTrigger className="w-full rounded-[12px] bg-[#18181B]">
            <SelectValue placeholder="Active Assistant Name" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              {TagOptions.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Opportunity ----------->  */}
      <div className="w-full p-4 gap-3 flex rounded-[12px] items-start flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <h3 className="text-[14px] font-medium text-neutral-50">Opportunity</h3>
        <Input
          placeholder="R$"
          id="extra-field"
          className="bg-[#18181B] text-[14px] placeholder:text-[#71717A] text-[#71717A] min-h-[44px] border focus:ring-white border-[#3F3F464D]"
          type="text"
        />
        <Select>
          <SelectTrigger className="w-full h-[44px] rounded-[6px] bg-[#18181B]">
            <SelectValue placeholder="Pipeline" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              {Crm1Options.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full h-[44px] rounded-[6px] bg-[#18181B]">
            <SelectValue placeholder="Step" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              {Crm2Options.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full h-[44px] rounded-[6px] bg-[#18181B]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              {Crm2Options.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Products ----------->  */}
      <div className="w-full p-4 gap-3 flex rounded-[12px] items-start flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <div className="w-full flex justify-between items-center gap-3">
          <h3 className="text-[20px] font-semibold text-neutral-50">Products</h3>
          <button>
            <img src="/add_circle.svg" className="w-[24px] h-[24px]" alt="" />
          </button>
        </div>
        <div className="flex justify-start w-full flex-wrap gap-2">
          {["Product1", "Product2", "Product3"].map((item, index) => {
            return <Badge key={index}>{item}</Badge>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
