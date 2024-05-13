"use client";
import React from "react";
import Image from "next/image";
import { navLinks } from "../../constants";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { SignedIn, UserButton , SignedOut} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex item-center gap-2 md:py-2">
        <Image
          src="/assets/images/main-icon.png"
          className="p-4"
          alt="logo"
          width={140}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              ></Image>
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64 ">
              <>
                <SheetTitle>
                  {" "}
                  <Image
                    src="/assets/images/main-icon.png"
                    alt="logo"
                    width={152}
                    height={23}
                  />
                </SheetTitle>

                <ul className="header-nav_elements mt-4">
                  {navLinks.map((link) => {
                    const isActive = link.route == pathName;
                    return (
                      <li
                        className={`${isActive && 'gradient-text'}  flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        <Link href={link.route} className="sidebar-link">
                          
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
            <Button  variant="outline" asChild  className="w-24 h-24"><Link href="/sign-in" className="sidebar-link">Sign in</Link></Button>
          </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
