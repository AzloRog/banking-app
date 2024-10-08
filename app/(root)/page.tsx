import DoughnutChart from '@/components/DoughnutChart'
import Header from '@/components/Header'
import TotalBalance from '@/components/TotalBalance'
import React from 'react'

const Home = () => {
  return (
    <section className='pt-12 px-8'>
      <Header 
        title='Welcome' 
        subtitle='Access & manage your account and transactions efficiently.' 
        userName='Daniel' 
    />
    <TotalBalance banksBalances={[1560, 1560, 1020]} banksTitles={["Niagara", "Split", "MIR"]}/>
    </section>
  )
}

export default Home
