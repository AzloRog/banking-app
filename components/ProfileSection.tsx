import React from "react";
import ProfileTitle from "./ProfileTitle";
import BankCard, { paymentType, Type } from "./BankCard";
import Link from "next/link";

const ProfileSection = () => {
  return (
    <section>
      <section className="mb-8">
        <ProfileTitle
          name={{ firstName: "Daniel", lastName: "Pod" }}
          email="example@gmail.com"
          profileImage="/icons/logo.svg"
        />
      </section>
      <section className="px-6">
        <div className="mb-7 flex justify-between font-semibold">
          <h3>Мои Банки</h3>
          <Link className="text-sm" href="/">
            Добавить банк
          </Link>
        </div>
        <div className="relative">
          <div className="absolute top-10 left-12 -z-[1]">
            <BankCard
              cardNumber="1234567891234567"
              endDate="06/24"
              owner={{ firstName: "Daniel", lastName: "Pod" }}
              title="Daniel's card"
              paymentCompany={paymentType.Visa}
              type={Type.Primary}
            />
          </div>
          <BankCard
            cardNumber="1234567891234567"
            endDate="06/24"
            owner={{ firstName: "Daniel", lastName: "Pod" }}
            title="Daniel's card"
            paymentCompany={paymentType.Mastercard}
            type={Type.Black}
          />
        </div>
      </section>
    </section>
  );
};

export default ProfileSection;
