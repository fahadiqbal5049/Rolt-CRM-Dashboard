import { useMemo, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { Minus, Pencil, Plus } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ScrollArea from "../ui/shared/ScrollArea";

const tags = ["tag1", "tag2"];
const campanhas = ["campanha1", "campanha2"];

export const LeadManagementPanel = () => {
  const [unit, setUnit] = useState<"hours" | "minutes" | "seconds">("hours");
  const [quantity, setQuantity] = useState<string>("24");

  const maxValue = useMemo(() => (unit === "hours" ? 24 : 60), [unit]);

  const options = useMemo(() => Array.from({ length: maxValue }, (_, i) => i + 1), [maxValue]);

  return (
    <ScrollArea
      classNames={{
        root: "flex-col gap-4 text-neutral-50 text-sm w-full mt-10  lg:mt-0 lg:max-w-[281px]   h-full hidden lg:flex",
      }}
    >
      <div className=" flex gap-4 items-center">
        <Select>
          <SelectTrigger className="w-full    ">
            <SelectValue placeholder="Selected Assistant Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Nome Assis. Selecionado">Selected Assistant Name </SelectItem>
              <SelectItem value="Nome Assis. Alterado"> Changed Assistant Name </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Switch
          activeColor="data-[state=checked]:bg-[#22c55e]"
          inactiveColor="data-[state=unchecked]:bg-[#3F3F46]"
          thumbColor="bg-white"
        />
      </div>
      <div className=" flex flex-col p-4 rounded-xl bg-[#2020204D] border-[1px] border-[#3F3F464D] ">
        <p>Deactivate for</p>
        <div className=" flex gap-4 items-center mt-2">
          <Select onValueChange={setQuantity} value={quantity}>
            <SelectTrigger className="w-full    ">
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option} value={String(option)}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(val) => {
              setUnit(val as "hours" | "minutes" | "seconds");
              setQuantity(String(val === "hours" ? 24 : 60));
            }}
            value={unit}
          >
            <SelectTrigger className="w-full    ">
              <SelectValue placeholder="hours" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="hours">hours </SelectItem>
                <SelectItem value="minutes"> minutes</SelectItem>
                <SelectItem value="seconds">seconds</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button className="mt-4 self-start">Confirm</Button>
      </div>

      <div className=" flex flex-col gap-4">
        <div className="flex justify-between items-center border-b border-[#3F3F464D] p-4">
          <p className=""> CRM</p>
          <Minus className="w-4 h-4" />
        </div>
        <div className="flex flex-col gap-2">
          <p>Pipeline</p>
          <Select>
            <SelectTrigger className="w-full    ">
              <SelectValue placeholder="Selected Pipeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Pipeline selecionado"> Selected Pipeline </SelectItem>
                <SelectItem value=" Pipeline Alterado"> Changed Pipeline </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <p>Step</p>
          <Select>
            <SelectTrigger className="w-full    ">
              <SelectValue placeholder="Selected Step" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Etapa selecionada"> Selected Step </SelectItem>
                <SelectItem value="  Etapa Alterada"> Changed Step </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <div className="flex justify-between items-center border-b border-[#3F3F464D] p-4">
          <p className=""> Tag</p>
          <Minus className="w-4 h-4" />
        </div>
        <div className=" flex flex-wrap gap-1">
          <Badge className={`capitalize  flex items-center cursor-pointer px-[6px]`}>
            {" "}
            <Plus className="!w-4 !h-4" /> <span> Add Tag</span>
          </Badge>
          {tags.map((tag) => {
            return (
              <Badge key={tag} className={`capitalize `}>
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <div className="flex justify-between items-center border-b border-[#3F3F464D] p-4">
          <p className=""> Campaigns</p>
          <Minus className="w-4 h-4" />
        </div>
        <div className=" flex flex-wrap gap-1">
          <Badge className={`capitalize  flex items-center cursor-pointer px-[6px]`}>
            {" "}
            <Plus className="!w-4 !h-4" /> <span> Add Campaign </span>
          </Badge>
          {campanhas.map((campanha) => {
            return (
              <Badge key={campanha} className={`capitalize `}>
                {campanha}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className="contactos flex flex-col gap-4">
        <div className="flex justify-between items-center border-b border-[#3F3F464D]  p-4">
          <p className=""> Contact data</p>
          <Minus className="w-4 h-4" />
        </div>
        <div className="     text-neutral-50 flex justify-between items-center">
          <div className=" flex gap-2 items-center">
            <img src="/white-circle.png" alt="" />
            <h2 className="  font-semibold  ">Name</h2>
          </div>
          <div className="flex items-center border border-[#3F3F46] p-2 rounded-[6px] bg-neutral-600 cursor-pointer">
            <Pencil className="w-4 h-4" />
          </div>
        </div>
        <div className=" flex gap-3 items-center">
          <img src="/fi_1077093.svg" alt="" />
          <img src="/fb.svg" alt="" />
          <img src="/LinkedIn.svg" alt="" />
        </div>
        <div className=" flex flex-col gap-[2px]">
          <p className=" font-bold">E-mail</p>
          <p className="  ">email@docontato.com</p>
        </div>
        <div className=" flex flex-col gap-[2px]">
          <p className=" font-bold">Example</p>
          <p className="  ">Example</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Assigned Agent</p>
          <Select>
            <SelectTrigger className="w-full    ">
              <SelectValue placeholder="Assigned Agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Agente Atribuído">Assigned Agent </SelectItem>
                <SelectItem value=" Agente Alterado"> Changed Agent </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <p>Priority</p>
          <Select>
            <SelectTrigger className="w-full    ">
              <SelectValue placeholder="Priority level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Nível de prioridade">Priority level </SelectItem>
                <SelectItem value="  Nivel de alterado"> Changed priority </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ScrollArea>
  );
};

export default LeadManagementPanel;
