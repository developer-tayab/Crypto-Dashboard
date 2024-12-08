import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Balance from '../components/Balance'
import Transaction from '../Transaction/Transaction'
import Support from '../Support/Support'
import DashboradContent from '../components/DashboradContent'
export default function Dashboard() {
  let [title , setTitle] = useState("Dashboard")

  
  return (
    
<>
    <div className="containerDashboard flex  bg-gray-100">
    <Sidebar  setTitle={setTitle} />
   <div className='w-[100%]'>
    <Topbar  title ={title}/>
    <div className="dashboardContent w-[90%] h-[163px]  mx-auto mt-4 ">
    {title === "Dashboard" && <DashboradContent/>}
    {title === "Transactions" && <Transaction />}
    {title === "Support" && <Support />}
    </div>
    </div>
    </div>
   
    </>
   
  )
}
