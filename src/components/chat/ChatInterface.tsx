import { useState } from "react";
import { ChatSidebar } from "./ChatSidebar";
import { ChatArea } from "./ChatArea";
import { chatData } from "@/data/chatData";
import type { Chat } from "@/types/chat";

const ChatInterface = () => {
  const [selectedChat, setSelectedChat] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<Chat[]>(chatData);

  return (

    <div className="flex flex-col md:flex-row gap-4 w-full h-full">
      <ChatSidebar chats={chats} selectedChat={selectedChat} onChatSelect={setSelectedChat} />
      <ChatArea chat={chats[selectedChat]} message={message} setMessage={setMessage} />

    </div>
  );
};

export default ChatInterface;
