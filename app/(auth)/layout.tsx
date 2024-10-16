import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      <div className="flex-[50%] flex items-center justify-center ">
        {children}
      </div>
      <div className="flex-[50%] flex items-center relative bg-blue-50">
        <Image
          className="absolute right-0 border-[6px] border-gray-300 rounded-l-2xl border-r-0"
          src="/temp-auth-image.jpg"
          width={630}
          height={782}
          alt="app image"
        />
      </div>
    </main>
  );
};

export default AuthLayout;
