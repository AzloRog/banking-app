import DoughnutChart from "@/components/DoughnutChart";
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import TotalBalance from "@/components/TotalBalance";
import React from "react";

const Home = () => {
  return (
    <section className="flex">
      <section className="pt-12 px-8 w-[70%] flex-initial">
        <Header
          title="Добро пожаловать"
          subtitle="Access & manage your account and transactions efficiently."
          userName="Daniel"
        />
        <TotalBalance
          banksBalances={[1560, 1560, 1020]}
          banksTitles={["Niagara", "Split", "MIR"]}
        />
      </section>
      <section className="flex-1">
        <ProfileSection />
      </section>
    </section>
  );
};

export default Home;
