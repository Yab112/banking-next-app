"use client"
import AnimatedCounter from './AnimatedCounter'
import React from 'react'
import DonutChart from './DonutChart'

const TotalbalanceBox = ({accounts, totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DonutChart accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6'>
          <h2 className='header-2'>
          Bank Account: {totalBanks} 
          </h2>
          <div className='flex flex-col gap-2'>
                   <p className='total-balance-label'>Total currunt Balance: {}</p>
                   <div className='total-balance-amount flex gap-2 flex-center  '>
                      <AnimatedCounter amount = {totalCurrentBalance}/>
                    </div>
          </div>
        </div>
    </section>
  )
}

export default TotalbalanceBox
