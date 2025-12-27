import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import TableEdit from "@/components/contatos/TableEdit";

const ContactName: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3 order-1">
      {/* Contact name ---------------------------> */}
      <div className="w-full p-4 flex rounded-[12px] items-end flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <TableEdit styles="" />
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-[40px] h-[40px] bg-neutral-50 rounded-full"></div>
          <p className="text-[20px] text-neutral-50 font-semibold text-center">Contact name</p>
          <p className="text-[14px] font-normal text-neutral-50">Created at</p>
        </div>
        <div className="w-full mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-medium text-neutral-50">Value</p>
            <p className="text-[14px] font-medium text-neutral-50">R$100.00 </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-medium text-neutral-50">Expected date</p>
            <p className="text-[14px] font-medium text-neutral-50">DD/MM/AAAA </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-medium text-neutral-50">Responsible</p>
            <p className="text-[14px] font-medium text-neutral-50">First and last name</p>
          </div>
        </div>
        <div className="w-full mt-5 flex justify-center items-center">
          <Button>Go to chat</Button>
        </div>
      </div>
      {/* Custom fields ----------------------------> */}
      <div className="w-full p-4 flex gap-3 rounded-[12px] items-end flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <div className="w-full flex justify-between items-center gap-3">
          <h3 className="text-[20px] font-semibold text-neutral-50">Custom fields</h3>
          <button>
            <img src="/add_circle.svg" className="w-[24px] h-[24px]" alt="" />
          </button>
        </div>
        <Input
          placeholder="Extra Field"
          id="extra-field"
          className="bg-neutral-600 mt-2 text-[14px] placeholder:text-[#71717A] text-[#71717A] min-h-[36px] border focus:ring-white border-[#3F3F46]"
          type="text"
        />
        <Input
          placeholder="Extra Field 2"
          id="extra-field2"
          className="bg-neutral-600  text-[14px] placeholder:text-[#71717A] text-[#71717A] min-h-[36px] border focus:ring-white border-[#3F3F46]"
          type="text"
        />
        <Input
          placeholder="Extra Field 3"
          id="extra-field3"
          className="bg-neutral-600 text-[14px] placeholder:text-[#71717A] text-[#71717A] min-h-[36px] border focus:ring-white border-[#3F3F46]"
          type="text"
        />
      </div>
      {/* tages ---------> */}
      <div className="w-full p-4 flex gap-4 rounded-[12px] items-end flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <div className="w-full flex justify-between items-center gap-3">
          <h3 className="text-[20px] font-semibold text-neutral-50">Tags</h3>
          <button>
            <img src="/add_circle.svg" className="w-[24px] h-[24px]" alt="" />
          </button>
        </div>

        <div className="flex justify-start w-full flex-wrap gap-2">
          {["Tag1", "Tag2", "Tag3"].map((item, index) => {
            return <Badge key={index}>{item}</Badge>;
          })}
        </div>
      </div>
      {/* Campanhas ---------> */}
      <div className="w-full p-4 flex gap-4 rounded-[12px] items-end flex-col bg-[#18181B] border-[1px] border-[#3F3F464D]">
        <div className="w-full flex justify-between items-center gap-3">
          <h3 className="text-[20px] font-semibold text-neutral-50">Campaigns</h3>
          <button>
            <img src="/add_circle.svg" className="w-[24px] h-[24px]" alt="" />
          </button>
        </div>

        <div className="flex justify-start w-full flex-wrap gap-2">
          {["Campaign1", "Campaign2", "Campaign3"].map((item, index) => {
            return <Badge key={index}>{item}</Badge>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactName;
