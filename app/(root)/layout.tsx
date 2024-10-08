import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <div className="max-md:hidden">
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="md:hidden flex items-center justify-between shadow-md p-4">
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              alt="The logo"
              width={32}
              height={32}
            />
          </Link>
          <MobileSidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
