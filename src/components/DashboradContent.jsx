import React from 'react'
import Balance from './Balance'
import CurrentValue from './CurrentValue'
import RecentTransaction from './RecentTransaction'
import Loan from './Loan'
export default function DashboradContent() {
  return (
    <>
    <Balance/>
    <div className="grid  grid-cols-2 gap-[20px]">
    <CurrentValue/>
    <RecentTransaction/>
    <Loan loan="Loans" heading="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"/>
    <Loan loan="contact" heading= "Learn more about our real estate, mortgage, and  corporate account services"  />
    </div>
     
    </>
  )
}
