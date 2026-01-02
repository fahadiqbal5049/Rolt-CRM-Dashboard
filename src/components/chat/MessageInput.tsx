import { useState, useRef, useEffect } from "react";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { File, FileText, Images, Mic, Plus, Smile } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import type { EmojiClickData } from "emoji-picker-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
}

export const MessageInput = ({ message, setMessage }: MessageInputProps) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmojiPicker]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage(message + emojiData.emoji);
    setShowEmojiPicker(true);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="p-4 relative">
      <div className="flex flex-col gap-2">
        <div className="flex-1">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="resize-none border-0 min-h-[80px]  "
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 text-neutral-50">
            <Smile
              className="w-4 h-4 cursor-pointer hover:text-neutral-300 transition-colors"
              onClick={toggleEmojiPicker}
            />
            <Popover>
              <PopoverTrigger>
                <Plus className="w-4 h-4 cursor-pointer hover:text-neutral-300 transition-colors" />
              </PopoverTrigger>
              <PopoverContent className="!bg-[#18181B] p-1 w-[95px] flex flex-col gap-1 border-[#3F3F464D] border">
                <button className="w-full flex gap-2 p-1 justify-center rounded-[7px] items-center bg-transparent hover:bg-[#27272A] min-h-[29px]">
                  <Images className="w-5 h-5" />
                  <span>Image</span>
                </button>
                <button className="w-full flex gap-2  p-1 rounded-[7px] items-center bg-transparent hover:bg-[#27272A] min-h-[29px]">
                  <File className=" w-5 h-5" />
                  <span>File</span>
                </button>
              </PopoverContent>
            </Popover>

            <FileText className="w-4 h-4 cursor-pointer hover:text-neutral-300 transition-colors" />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="bg-[#E4E4E7] min-w-[90px]">
              Send
            </Button>
            <div className="bg-[#E4E4E7] px-4 py-2 rounded-[6px] flex items-center cursor-pointer hover:bg-[#D4D4D8] transition-colors">
              <Mic className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {showEmojiPicker && (
        <div ref={emojiPickerRef} className="absolute bottom-1/2 left-0 mb-2 z-50">
          <EmojiPicker onEmojiClick={handleEmojiClick} theme={Theme.DARK} />
        </div>
      )}
    </div>
  );
};
