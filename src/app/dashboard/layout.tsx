"use client";

import NavBar from "@/components/dashboard/NavBar";
import SideNavBar from "@/components/dashboard/SideNavBar";
import { cn } from "@/utils/style";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50",
        "h-screen w-full bg-white",
        "flex"
      )}
    >
      <SideNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={cn("scrollbar w-full overflow-y-scroll")}>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full p-8">{children}</div>
      </div>
    </div>
  );
}
