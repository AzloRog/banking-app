import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navigation } from "@/constants";
import SidebarButton from "./ui/SidebarButton";

const Sidebar = () => {
  return (
    <nav className="py-8 px-4">
      <Link
        href="/"
        className="mb-6 text-2xl font-bold flex gap-1 items-center max-lg:justify-center"
      >
        <Image
          src="/icons/logo.svg"
          alt="Banking Logo"
          width={32}
          height={32}
        />
        <p className="hidden lg:block">Banking App</p>
      </Link>
      <ul className="flex flex-col gap-1">
        {navigation.map((item) => (
          <li>
            <SidebarButton {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
