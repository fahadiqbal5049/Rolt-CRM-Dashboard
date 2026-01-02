import type { Chat } from "@/types/chat";
import { Badge } from "../ui/badge";
const tags = ["tag1", "tag2"];

const selectedStyles: Record<string, string> = {
  tag1: "bg-neutral-600 ",
  tag2: "border border-[#A1A1AA]",
};

interface ChatListItemProps {
  chat: Chat;
  isSelected: boolean;
  onSelect: () => void;
}

export const ChatListItem = ({ chat, isSelected, onSelect }: ChatListItemProps) => {
  return (
    <div
      onClick={onSelect}
      className={`p-4   cursor-pointer  text-neutral-50  transition-colors ${isSelected ? " bg-neutral-500  " : ""}`}
    >
      <div className="flex  items-center gap-2">
        <img src="/white-circle.png" alt="" />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium   truncate">{chat.name}</h3>
          <p className="text-sm   truncate mt-1">{chat.lastMessage}</p>
          <div className="flex gap-1 mt-1">
            {tags.map((tag) => {
              const extra = isSelected ? selectedStyles[tag] : "";
              return (
                <Badge key={tag} className={`capitalize ${extra}`}>
                  {tag}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
