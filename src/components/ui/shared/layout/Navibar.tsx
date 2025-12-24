import React from "react";
import { Menu } from "lucide-react";
 
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from "../../sheet";
 
import { LeftNavigationData } from "@/data/LeftNavigation";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

const Navibar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-full min-h-[64px] md:px-5 px-4  border-b-[1px] border-[#3F3F464D] flex justify-between items-center">
      <div className="w-full min-h-[64px] md:px-5 px-4 border-b-[1px] border-[#3F3F464D] flex justify-between items-center">
 
        <img
          src="/logo-white.png"
          className=" w-[107px]"
          alt=""
        />
        <img
          src="/user.svg"
          className="w-[40px] sm:block hidden h-[40px]"
          alt=""
        />
 

        <div className="sm:hidden block">
          <Sheet>
            <SheetTrigger>
              <Menu size={24} color="#FAFAFA" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="w-full justify-center  items-center flex flex-col">
                <SheetClose className="w-full flex justify-end">
                  <X size={28} color="#FAFAFA" />
                </SheetClose>
 
                <img
                  src="/user.svg"
                  className="w-[100px] mt-4 h-[100px]"
                  alt=""
                />
 
              </SheetHeader>
              <div className="w-full flex gap-3 flex-col">
                {LeftNavigationData.map((item, index) => {
                  const isActive = item.path === location.pathname;

                  return (
                    <div key={index} className="relative flex px-5 w-full">
 
 
                        <Link
                          to={item.path}
                          className={clsx(
                            "flex w-full gap-3 items-center px-3 min-h-[48px] rounded-[12px] transition-all border border-transparent duration-200 relative overflow-hidden group/item",
                            isActive
                              ? "bg-gradient-to-r border !border-red-500/30 from-red-900/20 to-red-600/20  text-red-200"
                              : "hover:bg-neutral-800/50 text-neutral-300 hover:text-neutral-100"
                          )}
                        >
                          <div
                            className={clsx(
                              "flex-shrink-0 transition-all duration-200 rounded-lg"
                            )}
                          >
                            {item.icon}
                          </div>

                          <p
                            className={clsx(
                              "text-[14px] font-medium transition-all duration-300 whitespace-nowrap"
                            )}
                          >
                            {item.title}
                          </p>
                        </Link>
 
                    </div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navibar;
