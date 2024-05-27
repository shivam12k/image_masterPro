import MobileNav from "@/components/shared/MobileNav";
import SideBar from "@/components/shared/SideBar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* // sidebar componenent */}
      <SideBar/>
      
      {/* mobile navigation */}
      <MobileNav/>
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster/>
    </main>
  );
};

export default RootLayout;
