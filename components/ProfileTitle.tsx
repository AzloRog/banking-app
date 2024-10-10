import Image from "next/image";
import React from "react";

interface Props {
  name: { firstName: string; lastName: string };
  email: string;
  profileImage: string;
}
const ProfileTitle = ({ name, email, profileImage }: Props) => {
  return (
    <div className="px-6 pt-16 bg-profile-image ">
      <div className="mb-6 rounded-full border-2 border-white inline-block bg-blue-200 size-24 overflow-hidden">
        <Image
          src={profileImage}
          alt={"Can't get image"}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="mb-1 text-2xl font-semibold">
          {name.firstName} {name.lastName}
        </h2>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default ProfileTitle;
