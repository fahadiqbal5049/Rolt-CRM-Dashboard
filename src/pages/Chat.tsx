import ChatInterface from "@/components/chat/ChatInterface";
import LeadManagementPanel from "@/components/chat/LeadManagementPanel";
import React from "react";

const Chat: React.FC = () => {
  return (
    <div className=" flex flex-col gap-[32px]  ">
      <h2 className="text-[26px] sm:text-[30px] capitalize font-semibold text-neutral-50">Chat</h2>
      <div className=" flex gap-4 flex-col lg:flex-row  md:h-[calc(100dvh-240px)] h-[calc(100dvh-290px)] ">
        <ChatInterface />
        <LeadManagementPanel />
      </div>
    </div>
  );
};

export default Chat;
