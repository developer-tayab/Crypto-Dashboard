import React from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { SiBitcoinsv } from "react-icons/si";

export default function RecentTransaction() {
  let listData = [
    {
      icon: <HiCurrencyDollar fontSize={"16px"} />,
      title: "INR Deposit",
      datetime: "2022-06-09 7:06 PM",
      money: "+ ₹81,123.10",
      check :  true
    },
    {
      icon: <SiBitcoinsv fontSize={"16px"} />,
      title: "BTC Sell",
      datetime: "2022-05-27 12:32 PM",
      money: "- 12.48513391 BTC",
      subMoney: "+ $81,123.10",
      check : true
    },
    {
      icon: <HiCurrencyDollar fontSize={"16px"} />,
      title: "INR Deposit",
      datetime: "2022-06-09 7:06 PM",
      money: "+ ₹81,123.10",
      check :  false
    },
  ];

  return (
    <div className="recentTransaction p-[24px] rounded-[16px] mt-4 border-[#EEEEF4] border-[0.5px] bg-white ">
      <div className="textIcon w-[200px]  text-[14px] leading-[18px] ">
        <p className="text-[#535D66]"> Recent Transactions</p>
      </div>
      <div className="listItem  flex flex-col      mt-[10px]  ">
        {listData.map((item,key) => (
          <div key={key} className="colum flex   pt-[20px]  gap-[16px]">
            <div className="logo w-[40px] h-[40px] bg-[#F3F3F7] rounded-[30px] flex justify-center items-center">
              {item.icon}
            </div>
            <div className={`coinName flex justify-between ${item.check === true && "border-b-2" } pb-5 items-start`}   >
              <div className="coinText  w-[200px] flex flex-col items-start justify-between">
                <h1 className="text-[16px]  leading-[20px] font-normal text-[#171717] ">
                  {item.title}
                </h1>
                <p className="text-[14px] leading-[18px] font-normal text-[#797E82]">
                  {item.datetime}
                </p>
              </div>
              <div className="coinValue w-[200px] flex flex-col  items-end">
                <p>{item.money}</p>
                <p className="text-[14px] leading-[18px] font-normal text-[#797E82]">
                  {item.subMoney}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="viewAllBtn mt-[10px]">
        <button className=" w-[100%] bg-[#EEEEF4] h-[38px] rounded-[10px] text-center p-[10px_16px] text-[14px] font-medium leading-[18px] text-[#171717] ">View All</button>
      </div>
    </div>
  );
}
