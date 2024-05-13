"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../../constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
const SideBar = () => {
  const pathName = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/main-icon.png"
            alt="logo"
            width={145}
            height={10}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0,6).map((link) => {
                const isActive = link.route == pathName;
                return (
                  <li
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-indigo-500 hover:bg-indigo-500/80 text-white"
                        : "text-gray-700"
                    }`}
                    key={link.route}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
             
            </ul>
            <ul className="sidebar-nav_elements">
            {navLinks.slice(6,8).map((link) => {
                const isActive = link.route == pathName;
                return (
                  <li
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-indigo-500 hover:bg-indigo-500/80 text-white"
                        : "text-gray-700"
                    }`}
                    key={link.route}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
             
              <li className=" flex-center sidebar-nav_element cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName/>
              </li>
              </ul>
              
          </SignedIn>
          <SignedOut>
            <Button  variant="outline" asChild  className="w-24 h-24"><Link href="/sign-in" className="sidebar-link">Sign in</Link></Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
