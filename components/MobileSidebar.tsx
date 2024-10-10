import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constants";
import SidebarButton from "./ui/SidebarButton";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/icons/hamburger.svg" alt="_" width={32} height={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link
                href="/"
                className="mb-6 text-2xl font-bold flex gap-1 items-center max-md:justify-center"
              >
                <Image
                  src="/icons/logo.svg"
                  alt="Banking Logo"
                  width={32}
                  height={32}
                />
                <p className="">Banking App</p>
              </Link>
            </SheetClose>
          </SheetTitle>
          <nav className="py-8 px-4">
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li>
                  <SheetClose asChild>
                    <SidebarButton {...item} isMobile />
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
