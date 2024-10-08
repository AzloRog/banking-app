"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend} from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend);

interface Props {
  banksBalances: number[],
  banksTitles: string[],
}
const DoughnutChart = ({banksBalances, banksTitles}: Props) => {

  const data = {
    datasets: [{
      label: 'Banks',
      data: banksBalances,
      backgroundColor: [
        '#0179FE',
        '#4893FF',
        '#85B7FF',
        '#BED9FF',
        '#E9F2FF'
      ],
      hoverOffset: 10
    }],
    labels: banksTitles,
    
  };
  
  return (
    <Doughnut 
      data={data}  
      options={
        {
          hover: {mode: 'x'},
          cutout: '75%', 
          plugins: {legend: {display: false}, tooltip: {backgroundColor: "#0179FE"}}, datasets: {doughnut: {borderWidth: 0}, },
          animation: {animateScale: true},
        }
      }
      
    />
  )
}

export default DoughnutChart