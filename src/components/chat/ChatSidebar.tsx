import { ChatList } from "./ChatList";
import Search from "../ui/shared/Search";
import type { Chat } from "@/types/chat";
import ScrollArea from "../ui/shared/ScrollArea";

interface ChatSidebarProps {
  chats: Chat[];
  selectedChat: number;
  onChatSelect: (index: number) => void;
}

const SidebarHeader = () => {
  return (
    <div>
      <Search styles="w-full h-[40px]" placeholder="Search" />
    </div>
  );
};

export const ChatSidebar = ({
  chats,
  selectedChat,
  onChatSelect,
}: ChatSidebarProps) => {
  return (
    <div className=" flex gap-4 flex-col h-full">
      <SidebarHeader />
      <ScrollArea
        classNames={{
          root: "flex-1 md:block hidden h-full w-full overflow-auto md:max-w-[280px]",
        }}
      >
        <ChatList
          chats={chats}
          selectedChat={selectedChat}
          onChatSelect={onChatSelect}
        />
      </ScrollArea>
    </div>
  );
};
