import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { Link } from "react-router-dom";
import {
  LeftNavigationData,
  SettingsNavigationData,
} from "@/data/LeftNavigation";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Icons from "../Icons";

interface LeftNavigationProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const LeftNavigation: React.FC<LeftNavigationProps> = ({
  isCollapsed,
  onToggle,
}) => {
  const location = useLocation();

  return (
    <div className="w-full overflow-hidden h-[calc(100dvh-127px)]  border-r border-neutral-800 relative group">
      <button
        onClick={onToggle}
        className={clsx(
          "absolute top-[26px] right-[6px] z-50 w-7 h-7 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-full flex items-center justify-center transition-all duration-200",
          "opacity-0 group-hover:opacity-100",
          isCollapsed && "opacity-100",
          isCollapsed && "right-[20px]"
        )}
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-neutral-300" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-neutral-300" />
        )}
      </button>

      <div
        className={clsx(
          "transition-all duration-300 ease-in-out px-4 py-4 h-full",
          isCollapsed ? "px-2" : "px-4"
        )}
      >
        <div className="flex flex-col gap-3">
          <div
            className={clsx(
              "w-full flex flex-col gap-3 transition-all duration-300",
              isCollapsed ? "hidden" : "block"
            )}
          >
            <Select>
              <SelectTrigger
                className={clsx(
                  "transition-all duration-300",
                  isCollapsed ? "w-[50px]" : "w-[180px]"
                )}
              >
                <SelectValue placeholder="Select Contact" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {SelectAccountOptions.map((item, index) => {
                    return (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* for small screen ---->  */}
          <button
            className={clsx(
              "w-[48px] h-[48px] rounded-[12px] flex justify-center border border-[#3F3F464D] items-center",
              isCollapsed ? "block" : "hidden"
            )}
          >
            <Icons.unfold className="w-[16px] h-[16px]" />
          </button>

          {/* Main Navigation */}
          <div className="w-full flex flex-col gap-2">
            {LeftNavigationData.map((item, index) => {
              const isActive = item.path === location.pathname;

              return (
                <div key={index} className="relative w-full">
                  <Link
                    to={item.path}
                    className={clsx(
                      "flex w-full gap-3 px-3 min-h-[48px] rounded-[12px] transition-all border border-transparent duration-200 relative overflow-hidden group/item",
                      isActive
                        ? "bg-gradient-to-r border !border-red-500/30 from-red-900/20 to-red-600/20  text-red-200"
                        : "hover:bg-neutral-800/50 text-neutral-300 hover:text-neutral-100",
                      isCollapsed
                        ? "justify-center items-center !w-[48px]"
                        : "items-center justify-start"
                    )}
                  >
                    {/* border border-red-500/30 */}
                    <div
                      className={clsx(
                        "flex-shrink-0 transition-all duration-200 rounded-lg"
                      )}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <p
                      className={clsx(
                        "text-[14px] font-medium transition-all duration-300 whitespace-nowrap",
                        isCollapsed ? "opacity-0 hidden scale-95 w-0" : "block"
                      )}
                    >
                      {item.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Settings Navigation */}
          <div className="w-full flex flex-col gap-3 mt-auto">
            <div
              className={clsx(
                "border-t border-neutral-800 transition-all duration-300",
                isCollapsed ? "mx-2" : "mx-0"
              )}
            />

            {SettingsNavigationData.map((item, index) => {
              const isActive = item.path === location.pathname;

              return (
                <div key={index} className="relative">
                  <Link
                    to={item.path}
                    className={clsx(
                      "flex w-full gap-3 px-3 min-h-[48px] rounded-xl transition-all border border-transparent duration-200 relative overflow-hidden group/item",
                      isActive
                        ? "bg-gradient-to-r border !border-red-500/30 from-red-900/20 to-red-600/20  text-red-200"
                        : "hover:bg-neutral-800/50 text-neutral-300 hover:text-neutral-100",
                      isCollapsed
                        ? "justify-center items-center !w-[48px]"
                        : "items-center justify-start"
                    )}
                  >
                    {/* border border-red-500/30 */}
                    <div
                      className={clsx(
                        "flex-shrink-0 transition-all duration-200 rounded-lg"
                      )}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <p
                      className={clsx(
                        "text-[14px] font-medium transition-all duration-300 whitespace-nowrap",
                        isCollapsed ? "opacity-0 hidden scale-95 w-0" : "block"
                      )}
                    >
                      {item.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavigation;

const SelectAccountOptions = ["Contact1", "Contact2", "Contact3", "Contact4"];
