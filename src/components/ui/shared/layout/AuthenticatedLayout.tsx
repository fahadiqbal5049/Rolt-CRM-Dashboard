import React from "react";
import Navibar from "./Navibar";
import LeftNavigation from "./LeftNavigation";
import Footer from "./Footer";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  isLeftNavCollapsed: boolean;
  toggleLeftNav: () => void;
}

export const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
  isLeftNavCollapsed,
  toggleLeftNav,
}: AuthenticatedLayoutProps) => {
  return (
    <div className="w-full h-dvh flex flex-col">
      <Navibar />
      <div className="w-full flex relative">
        <div
          className={`transition-all sm:block hidden duration-300 ease-in-out ${
            isLeftNavCollapsed ? "w-[75px]" : "w-[250px]"
          }`}
        >
          <LeftNavigation isCollapsed={isLeftNavCollapsed} onToggle={toggleLeftNav} />
        </div>
        <div className="flex-1 w-full max-w-[1500px] mx-auto z-20 h-[calc(100dvh-127px)] md:px-5 px-4 overflow-auto py-4 transition-all duration-300 ease-in-out">
          <div className="flex w-full flex-col">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
