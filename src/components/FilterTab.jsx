import React, { useState } from "react";

export default function FilterTab() {
  let [border, setBorder] = useState("");
  let changeBorder = (check) => {
    setBorder(check);
    console.log(check);
  };

  let filterData = [
    { text: "All", value: 394 },
    {
      text: "Deposit",
      value: 114,
    },
    {
      text: "Withdraw",
      value: 213,
    },
    {
      text: "Trade",
      value: 22,
    },
  ];
  return (
    <div className="filterText flex items-center gap-4">
      {filterData.map((item) => (
        <div
          key={item.text}
          onClick={() => changeBorder(item.text)}
          className={`filterBox flex justify-center ${
            border === item.text ? "border-b-[2px] border-[#5F00D9] " : ""
          } items-center gap-[16px] leading-[14px] w-[105px] h-[38px] cursor-pointer`}
        >
          <h1 className="text-[#797E82] text-[12px] font-medium">
            {item.text}
          </h1>
          <p className="text-[#171717] text-[12px] font-[500] w-[33px] h-[22px] bg-[#F3F3F7] rounded-[100px] p-[4px_6px] text-center ">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
