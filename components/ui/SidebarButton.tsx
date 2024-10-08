"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

interface Props {
  title: string;
  href: string;
  iconUrl: string;
  isMobile?: boolean;
}
const SidebarButton = ({ title, href, iconUrl, isMobile }: Props) => {
  const currentPathname = usePathname();
  const isCurrentPathname = currentPathname == href;

  const styles = !isMobile ? "hidden lg:block" : "";
  return (
    <Link
      href={href}
      className={`py-4 px-3 font-semibold flex items-center gap-3 rounded-md 
            ${isCurrentPathname && "bg-gradient-blue text-white"}`}
    >
      <div className="relative size-6">
        <Image
          src={iconUrl}
          alt="icon"
          fill
          className={
            "text-white  brightness-[3] " +
            (!isCurrentPathname ? " invert" : "invert-0")
          }
        />
      </div>
      <div className={styles}>{title}</div>
    </Link>
  );
};

export default SidebarButton;
