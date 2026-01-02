import type { Chat } from "@/types/chat";
import { ChatListItem } from "./ChatListItem";

interface ChatListProps {
  chats: Chat[];
  selectedChat: number;
  onChatSelect: (index: number) => void;
}

export const ChatList = ({ chats, selectedChat, onChatSelect }: ChatListProps) => {
  return (
    <div className="flex-1 overflow-y-auto rounded-xl border border-[#3F3F464D]  hidden md:block">
      {chats.map((chat, index) => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          isSelected={selectedChat === index}
          onSelect={() => onChatSelect(index)}
        />
      ))}
    </div>
  );
};
