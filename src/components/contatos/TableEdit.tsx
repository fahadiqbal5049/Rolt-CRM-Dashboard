import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { EllipsisVertical } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TagOptions } from "@/data/SelectOptions";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import ScrollArea from "../ui/shared/ScrollArea";
import clsx from "clsx";

interface Props {
  styles?: string;
}

const TableEdit: React.FC<Props> = ({
  styles = " border-[1px] border-[#3F3F464D] bg-neutral-600 w-[34px] h-[34px]",
}: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <button
          className={clsx(
            "flex justify-center items-center rounded-[8px]",
            styles
          )}
        >
          <EllipsisVertical size={20} color="#FAFAFA" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="!bg-[#18181B] p-1 w-[95px] flex flex-col gap-1 border-[#3F3F464D] border">
        <Dialog>
          <DialogTrigger>
            <div className="w-full flex justify-center rounded-[7px] items-center bg-transparent hover:bg-[#27272A] min-h-[29px]">
              Edit
            </div>
          </DialogTrigger>
          <DialogContent className="flex w-full p-0 border-[#3F3F464D] bg-[#18181B] flex-col">
            <ScrollArea
              classNames={{ root: "max-h-[90dvh] p-5 overflow-auto" }}
            >
              {/* top section -----> */}
              <div className="w-full gap-4 flex flex-col bg-[#2020204D] rounded-[12px] border-[1px] border-[#3F3F464D] p-3">
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
              <form action="" className="w-full mt-4 gap-4 flex flex-col">
                {/* name  */}
                <div className="flex flex-col w-full items-start gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    placeholder="Name"
                    id="name"
                    className="bg-neutral-600 text-[14px] placeholder:text-[#71717A] text-[#71717A] min-h-[36px] border focus:ring-white border-[#3F3F46]"
                    type="text"
                  />
                </div>
                {/* email  */}
                <div className="flex flex-col w-full items-start gap-3">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    placeholder="Email"
                    id="email"
                    className="bg-neutral-600 text-[14px] placeholder:text-[#71717A] text-[#71717A] min-h-[36px] border focus:ring-white border-[#3F3F46]"
                    type="email"
                  />
                </div>
                {/* telephone  */}
                <div className="flex flex-col w-full items-start gap-3">
                  <Label htmlFor="telephone">Phone</Label>
            <Input
              placeholder="Phone"
                    id="telephone"
                    className="bg-neutral-600 text-[14px] placeholder:text-[#71717A] text-[#71717A] min-h-[36px] border focus:ring-white border-[#3F3F46]"
                    type="number"
                  />
                </div>
                {/* extra field   */}
                <div className="flex flex-col w-full items-start gap-3">
                  <Label htmlFor="extra-field">Extra Field</Label>
            <Input
              placeholder="Extra Field"
                    id="extra-field"
                    className="bg-neutral-600 text-[14px] placeholder:text-[#71717A] text-[#71717A] min-h-[36px] border focus:ring-white border-[#3F3F46]"
                    type="text"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <Button
                    onClick={(e) => e.preventDefault()}
                    className="w-[120px]"
                  >
                    Update
                  </Button>
                </div>
              </form>
              {/* // tages ----------> */}
              <div className="w-full flex flex-col gap-4">
                <div className="flex gap-3 flex-col">
                  <p className="text-[14px] text-neutral-50 py-4 font-medium border-b-[1px] border-[#3F3F464D]">
                    Tag
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Tag1", "Tag2", "Tag3"].map((item, index) => {
                      return <Badge key={index}>{item}</Badge>;
                    })}
                  </div>
                </div>
              </div>
              {/* // Compaigns ----------> */}
              <div className="w-full flex flex-col gap-4">
                <div className="flex gap-3 flex-col">
                  <p className="text-[14px] text-neutral-50 py-4 font-medium border-b-[1px] border-[#3F3F464D]">
                    Campaigns
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Campaign1", "Campaign2", "Campaign3"].map(
                      (item, index) => {
                        return <Badge key={index}>{item}</Badge>;
                      }
                    )}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <div className="w-full flex justify-center rounded-[7px] items-center  bg-transparent hover:bg-[#27272A] min-h-[29px]">
          Remove
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TableEdit;
