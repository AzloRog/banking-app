import React from 'react'
import DoughnutChart from './DoughnutChart'
import Link from 'next/link'

interface Props {
    banksTitles: string[],
    banksBalances: number[]
}
const TotalBalance = ({banksTitles, banksBalances}: Props) => {
    const dollars = new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "RUB"
    });
    const totalBalance = banksBalances.reduce(((prevValue, currValue) => prevValue + currValue));
  return (
    
    <section className="p-6 shadow-md flex items-center gap-6 rounded-lg ">
        <div className='max-w-[130px]'>
            <DoughnutChart banksTitles={banksTitles} banksBalances={banksBalances}/>

        </div>
        <div className='flex-auto'>
            <div className='mb-6 flex gap-10 justify-between items-center'>
                <h3 className='text-black-900 font-semibold '>{banksTitles.length} Привязанных Банка</h3>
                <Link href="#" className='text-blue-500 text-sm font-semibold'>Добавить</Link>
            </div>
            <h4 className='mb-2 text-sm text-black-900 font-medium'>Текущий общий баланс</h4>
            <p className='text-3xl font-semibold'>{dollars.format(totalBalance)}</p>
        </div>
    </section>
  )
}

export default TotalBalance