import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import DistributeEquallySelection from "./DistributeEquallySelection";
import type { Member } from "@/types/member";
import { Button } from "../ui/button";

const AddNewCampaign: React.FC = () => {
  const handleSelectionChange = (selectedMembers: Member[]): void => {
    console.log("Selected members:", selectedMembers);
  };

  return (
    <Dialog>
      <DialogTrigger className="border min-h-[40px] px-3 border-neutral-500 bg-neutral-600 rounded-[6px] flex justify-center items-center gap-2">
        <p className="text-neutral-50 font-medium text-[14px]">New campaign</p>
        <Plus size={18} color="#71717A" />
      </DialogTrigger>
      <DialogContent className="flex !max-w-[425px] w-full p-5 border-[#3F3F464D] bg-[#18181B] flex-col">
        <form action="" className="w-full flex flex-col items-end gap-5">
          {/* Campaign --->  */}
          <div className="flex flex-col w-full items-start gap-3">
            <Label htmlFor="campaign">Campaign</Label>
            <Input
              placeholder="Campaign"
              id="campaign"
              className="bg-neutral-600 text-[14px] placeholder:text-[#71717A] text-[#71717A] h-[36px] border focus:ring-white border-[#3F3F46]"
              type="text"
            />
          </div>
          {/* Assistant --->  */}
          <div className="flex flex-col w-full items-start gap-3">
            <Label htmlFor="assistant">Assistant</Label>
            <Input
              placeholder="Assistant"
              id="assistant"
              className="bg-neutral-600 text-[14px] placeholder:text-[#71717A] text-[#71717A] h-[36px] border focus:ring-white border-[#3F3F46]"
              type="text"
            />
          </div>
          {/* Kitten -----> */}
          <div className="flex flex-col w-full items-start gap-3">
            <Label htmlFor="kitten">Trigger</Label>
            <div className="flex w-full justify-center items-center gap-4">
              <Select>
                <SelectTrigger className="w-fit h-[36px] rounded-[6px] bg-[#27272A]">
                  <SelectValue placeholder="Active Assistant Name" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup>
                    {KittenOptions.map((item, index) => {
                      return (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                placeholder="Lorem"
                id="kitten"
                className="bg-neutral-600 grow-1 w-full text-[14px] placeholder:text-[#71717A] text-[#71717A] h-[36px] border focus:ring-white border-[#3F3F46]"
                type="text"
              />
            </div>
          </div>
          {/* Tag --->  */}
          <div className="flex flex-col w-full items-start gap-3">
            <Label htmlFor="tag">Tag</Label>
            <Input
              placeholder="Tag"
              id="tag"
              className="bg-neutral-600 text-[14px] placeholder:text-[#71717A] text-[#71717A] h-[36px] border focus:ring-white border-[#3F3F46]"
              type="text"
            />
          </div>
          {/* crm ----> */}
          <div className="flex flex-col w-full items-start gap-3">
            <Label htmlFor="tag">CRM</Label>
            <div className="w-full grid grid-cols-2 gap-4">
              <Select>
                <SelectTrigger className="w-full h-[36px] rounded-[6px] bg-[#27272A]">
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
                <SelectTrigger className="w-full h-[36px] rounded-[6px] bg-[#27272A]">
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
            </div>
          </div>
          {/* Distribute Equally to: ---------> */}
          <div className="flex flex-col w-full items-start gap-3">
            <Label htmlFor="distribute-equally">
              Distribute Equally to:
            </Label>
            <DistributeEquallySelection
              options={DistributeEquallyOptions}
              placeholder="Distribute equally to"
              onSelectionChange={handleSelectionChange}
            />
          </div>
          <Button onClick={(e) => e.preventDefault()} className="w-[120px]">
            Update
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCampaign;

export const KittenOptions = ["Contains", "Starts with"];

export const Crm1Options = ["Pipeline1", "Pipeline2", "Pipeline3"];

export const Crm2Options = ["Step1", "Step2", "Step3"];

export const DistributeEquallyOptions = [
  {
    id: 1,
    avatar: "/user.svg",
    name: "Member 1",
    email: " email@docontato.com",
  },
  {
    id: 2,
    avatar: "/user.svg",
    name: "Member 1",
    email: " email@docontato.com",
  },
];
