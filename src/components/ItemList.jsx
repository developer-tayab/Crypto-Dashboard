import React from "react";

export default function ItemList() {
  let listData = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "INR Deposit",
      transfer: "E-Transfer",
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "INR Withdraw",
      transfer: "Wire Transfer",
      amount: "+ ₹81,123.10",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "Buy",
      transfer: "",
      amount: "+ 12.48513391 BTC",
      subAmount: "- $81,123.10",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "Sell",
      transfer: "",
      amount: "- 0.36401628 BTC",
      subAmount: "- $81,123.10",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "BTC Deposit",
      transfer: " ",
      amount: "+ 4.13946104 BTC",
      subAmount: "+ $37,929.31",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "BTC Withdraw",
      transfer: " ",
      amount: "- 10.00000000 BTC",
      subAmount: "- $62,017.58",
      status: "Completed",
    },
  ];
  return (
    <div className="itemList  ">
      {listData.map((item) => (
        <div className="itemBox grid grid-cols-5 gap-[20px]   text-center   border-b-[0.5px] p-[16px] ">
          <p className=" text-[14px] text-[#171717] leading-[18px] font-medium w-[300px]  ">
            {item.id}
          </p>
          <div className="timeShowBox w-[250px] ">
            <p className="text-[14px] text-[#171717] leading-[18px] font-medium ">
              {item.date}
            </p>
            <p className="text-[12px] leading-[14px] font-normal text-[#797E82]">
              {item.time}
            </p>
          </div>
          <div className="depositBox w-[200px]    ">
            <p className="text-[14px] text-[#171717] leading-[18px] font-medium  ">
              {item.type}
            </p>
            <p className="text-[12px] leading-[14px] font-normal text-[#797E82] ">
              {item.transfer}
            </p>
          </div>
          <div className="amount w-[150px] h-[18px]   ">
            <p className=" text-[14px] text-[#171717] leading-[18px] font-medium  ">
              {item.amount}
            </p>
            <p className="text-[12px] leading-[14px] font-normal text-[#797E82] ">
              {item.subAmount}
            </p>
          </div>
          <div
            className={`statusShow p-[4px_6px] rounded-[100px] ${
              (item.status === "Pending" && "bg-[#797E82] ") ||
              (item.status === "Processing" && "bg-[#F5A50B] ") ||
              (item.status === "Cancelled" && "bg-[#DC2626]") ||
              (item.status === "Completed" && "bg-[#059669]")
            }  w-[50%] flex justify-center items-center `}
          >
            <p className=" text-[#FFFFFF] text-[12px] leading-[14px] font-medium text-center ">
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
