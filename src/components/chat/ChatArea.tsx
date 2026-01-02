import ScrollArea from "../ui/shared/ScrollArea";
import { ChatHeader } from "./ChatHeader";
import { MessageInput } from "./MessageInput";
import type { Chat, Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
  sender: "user" | "bot";
}

interface MessageItemProps {
  message: Message;
}

interface MessagesAreaProps {
  messages: Message[];
}

interface ChatAreaProps {
  chat: Chat;
  message: string;
  setMessage: (message: string) => void;
}

const MessageBubble = ({ message, sender }: MessageBubbleProps) => {
  return (
    <div
      className={`flex flex-col ${
        sender === "user" ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`max-w-[237px] px-3 py-2 rounded-xl text-neutral-50 border-none ${
          sender === "user"
            ? " bg-neutral-500  rounded-br-none "
            : "bg-neutral-600  rounded-bl-none    "
        }`}
      >
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
};

const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <div
      className={`flex items-start space-x-3 ${
        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
      }`}
    >
      <MessageBubble message={message} sender={message.sender} />
    </div>
  );
};

const MessagesArea = ({ messages }: MessagesAreaProps) => {
  return (
    <div className="flex-1 p-4 space-y-5 md:space-y-10  mt-6">
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export const ChatArea = ({ chat, message, setMessage }: ChatAreaProps) => {
  return (
    <div className="w-full h-full flex flex-col border rounded-xl bg-[#20202040] border-[#3F3F464D]">
      <ChatHeader chatName={chat?.name} />
      <div className="h-full  overflow-auto table-scrollbar w-full min-w-[310px] ">
        <MessagesArea messages={chat?.messages || []} />
      </div>
      <MessageInput message={message} setMessage={setMessage} />
    </div>
  );
};
