import { Pencil, Search } from "lucide-react";

interface ChatHeaderProps {
  chatName: string;
}

export const ChatHeader = ({ chatName }: ChatHeaderProps) => {
  return (
    <div className="  border-b border-[#3F3F464D] p-4 text-neutral-50 flex justify-between items-center">
      <div className=" flex gap-2">
        <img src="/white-circle.png" alt="" />
        <div>
          <h2 className="  font-semibold  ">{chatName}</h2>
          <p className="text-sm  ">Active now</p>
        </div>
      </div>
      <div className=" flex gap-2">
        <div className="flex items-center border border-[#3F3F46] p-2 rounded-[6px] bg-neutral-600">
          <Search className="w-4 h-4" />
        </div>
        <div className="flex items-center border border-[#3F3F46] p-2 rounded-[6px] bg-neutral-600">
          <Pencil className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
