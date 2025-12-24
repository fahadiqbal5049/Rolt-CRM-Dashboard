import {
  AsistanceOptions,
  CompaignsOptions,
  StatusOptions,
  TagOptions,
} from "@/data/SelectOptions";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../select";
import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "../sheet";
import { Calendar } from "../calendar";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import * as Icons from "../../ui/shared/Icons";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const MoreFilter: React.FC = () => {
  const [date1, setDate1] = React.useState<Date>();
  const [date2, setDate2] = React.useState<Date>();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="border min-h-[40px] px-3 border-neutral-500 bg-neutral-600 rounded-[6px] flex justify-center items-center gap-2">
          <p className="text-neutral-50 font-medium text-[14px]">
            More filters
          </p>
          <Icons.filter className="w-[16px] h-[16px]" />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-[#18181B] p-3 flex flex-col">
        <div className="w-full gap-2 flex justify-center items-center">
          <p className="text-[16px] font-medium text-neutral-100">
            More filters
          </p>
          <Icons.filter
            className="w-[16px] h-[16px]"
            fill="#E4E4E7"
            stroke="stroke-[#E4E4E7]"
          />
        </div>
        {/* status ------>  */}
        <Select>
          <SelectTrigger className="w-full !text-neutral-50">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {StatusOptions.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Assistente ----->  */}
        <Select>
          <SelectTrigger className="w-full !text-neutral-50">
            <SelectValue placeholder="Assistant" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {AsistanceOptions.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        {/*  Tag ----->  */}
        <Select>
          <SelectTrigger className="w-full !text-neutral-50">
            <SelectValue placeholder="Tag" />
          </SelectTrigger>
          <SelectContent>
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
        {/*  Compaigns ----->  */}
        <Select>
          <SelectTrigger className="w-full !text-neutral-50">
            <SelectValue placeholder="Campaign" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {CompaignsOptions.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* select date */}
        <Popover>
          <PopoverTrigger
            className="!w-full !min-h-[56px] text-[14px] font-medium !text-neutral-50 border border-[#3F3F464D] !bg-[#18181B]"
            asChild
          >
            <Button
              variant={"outline"}
              className={cn(
                "w-full flex justify-between text-left font-normal",
                !date1 && "text-muted-foreground"
              )}
            >
              {date1 ? format(date1, "PPP") : <span>Pick a date</span>}
              <CalendarIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date1}
              onSelect={setDate1}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {/* select date */}
        <Popover>
          <PopoverTrigger
            className="!w-full !min-h-[56px] text-[14px] font-medium !text-neutral-50 border border-[#3F3F464D] !bg-[#18181B]"
            asChild
          >
            <Button
              variant={"outline"}
              className={cn(
                "w-full flex justify-between text-left font-normal",
                !date2 && "text-muted-foreground"
              )}
            >
              {date2 ? format(date2, "PPP") : <span>Pick a date</span>}
              <CalendarIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date2}
              onSelect={setDate2}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {/* update -----> */}
        <SheetClose className="w-full flex justify-start">
          <Button className="w-[120px] mt-3">Filter</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MoreFilter;
