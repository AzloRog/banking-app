import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  owner: { firstName: string; lastName: string };
  cardNumber: string;
  endDate: string;
  paymentCompany: paymentType;
  type: Type;
}
export enum Type {
  Primary = "primary-card",
  Black = "black-card",
}
export enum paymentType {
  Visa = "icons/bank-card/visa-logo.svg",
  Mastercard = "icons/bank-card/mastercard-logo.svg",
}

const BankCard = ({
  title,
  cardNumber,
  endDate,
  owner,
  paymentCompany,
  type,
}: Props) => {
  const formattedCardNumber = cardNumber.match(/.{1,4}/g);
  return (
    <div
      className={
        "h-[190px] w-[316px] text-white rounded-2xl flex overflow-hidden " +
        type
      }
    >
      <div className="p-4 h-full flex-[50%] flex flex-col">
        <h3 className="mt-1 ml-1 flex-1 font-semibold">{title}</h3>
        <div className="mb-2 text-xs font-semibold uppercase flex justify-between">
          <h4>
            {owner.firstName} {owner.lastName}
          </h4>
          <div>{endDate}</div>
        </div>
        <div className="font-semibold tracking-widest">
          {formattedCardNumber && formattedCardNumber.map((item) => item + " ")}
        </div>
      </div>
      <div className=" p-4 flex-1 flex flex-col items-end justify-between bg-card-lines">
        <Image
          src="icons/bank-card/remote-icon.svg"
          alt="remote"
          width={20}
          height={20}
        />
        <Image
          src={paymentCompany}
          alt={"undefined company"}
          width={31}
          height={10}
        />
      </div>
    </div>
  );
};

export default BankCard;
