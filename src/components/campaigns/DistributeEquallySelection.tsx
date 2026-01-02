import React, { useState } from "react";
import type { Member } from "@/types/member";
import { X, ChevronDown, Check } from "lucide-react";

interface MemberSelectProps {
  options?: Member[];
  placeholder?: string;
  onSelectionChange?: (selectedMembers: Member[]) => void;
  maxHeight?: string;
  classNames?: string;
}

const DistributeEquallySelection: React.FC<MemberSelectProps> = ({
  options,
  placeholder = "Distribute equally to",
  onSelectionChange,
  maxHeight = "max-h-60",
  classNames = "",
}: MemberSelectProps) => {
  const [selectedMembers, setSelectedMembers] = useState<Member[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Use provided options or fallback to empty array
  const DistributeEquallyOptions: Member[] = options || [];

  const handleMemberSelect = (member: Member): void => {
    setSelectedMembers((prev) => {
      const isAlreadySelected = prev.find((m) => m.id === member.id);
      let newSelection: Member[];

      if (isAlreadySelected) {
        newSelection = prev.filter((m) => m.id !== member.id);
      } else {
        newSelection = [...prev, member];
      }

      // Call the callback if provided
      if (onSelectionChange) {
        onSelectionChange(newSelection);
      }

      return newSelection;
    });
  };

  const removeMember = (memberId: number): void => {
    setSelectedMembers((prev) => {
      const newSelection = prev.filter((m) => m.id !== memberId);

      // Call the callback if provided
      if (onSelectionChange) {
        onSelectionChange(newSelection);
      }

      return newSelection;
    });
  };

  const isSelected = (memberId: number): boolean => {
    return selectedMembers.some((m) => m.id === memberId);
  };

  const handleTriggerClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (): void => {
    setIsOpen(false);
  };

  const handleTagClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleRemoveClick = (e: React.MouseEvent, memberId: number): void => {
    e.stopPropagation();
    removeMember(memberId);
  };

  return (
    <div className={`w-full ${classNames}`}>
      <div className="relative">
        {/* Select Trigger */}
        <div
          className="w-full min-h-[36px] rounded-[6px] bg-[#27272A] border border-[#3F3F46] px-3 py-2 cursor-pointer flex items-center gap-2 flex-wrap"
          onClick={handleTriggerClick}
        >
          {selectedMembers.length === 0 ? (
            <span className="text-[#71717A] text-sm">{placeholder}</span>
          ) : (
            <>
              {selectedMembers.map((member: Member) => (
                <div
                  key={member.id}
                  className="flex items-center font-normal gap-2 bg-[#71717A] rounded-full px-2 py-1 text-[12px]"
                  onClick={handleTagClick}
                >
                  <img
                    src={member.avatar || "/user.svg"}
                    className="w-6 h-6 rounded-full bg-gray-500"
                    alt={member.name}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "/user.svg";
                    }}
                  />
                  <span className="text-neutral-50 font-medium">
                    {member.name}
                  </span>
                  <button
                    onClick={(e: React.MouseEvent) =>
                      handleRemoveClick(e, member.id)
                    }
                    className="text-neutral-50 hover:text-white transition-colors"
                    type="button"
                    aria-label={`Remove ${member.name}`}
                  >
                    <X size={14} color="#FAFAFA" />
                  </button>
                </div>
              ))}
            </>
          )}
          <ChevronDown
            size={16}
            className={`text-[#71717A] ml-auto transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div
            className={`absolute top-full left-0 right-0 mt-1 bg-[#27272A] border border-gray-600 rounded-[6px] shadow-lg z-50 ${maxHeight} overflow-y-auto`}
          >
            {DistributeEquallyOptions.length === 0 ? (
              <div className="p-3 text-gray-400 text-sm">
                No members available
              </div>
            ) : (
              DistributeEquallyOptions.map((member: Member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-600 cursor-pointer transition-colors"
                  onClick={() => handleMemberSelect(member)}
                >
                  <img
                    src={member.avatar || "/user.svg"}
                    className="w-[40px] h-[40px] rounded-full bg-gray-500 flex-shrink-0"
                    alt={member.name}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "/user.svg";
                    }}
                  />
                  <div className="flex flex-col flex-1">
                    <p className="text-[14px] font-medium text-neutral-50">
                      {member.name}
                    </p>
                    <p className="text-[14px] font-normal text-neutral-400">
                      {member.email}
                    </p>
                  </div>
                  {isSelected(member.id) && (
                    <Check size={16} color="#FAFAFA" />
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={handleOutsideClick} />
      )}
    </div>
  );
};

export default DistributeEquallySelection;
