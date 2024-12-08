import PurpleBtn from "./PurpleBtn";
import { useState } from "react";
import { AiTwotonePlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function CurrentValue() {
  let [sTime, setSTime] = useState("");

  let selectTIme = (check) => {
    setSTime(check);
    console.log(check);
  };
  let timeData = ["1H", "1D", "1W", "1M"];

  let time = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];

  return (
    <div className="currentValue  p-[24px] rounded-[16px] mt-4 border-[#EEEEF4] border-[0.5px] bg-white ">
      <div className="topCurrent  flex items-center justify-between">
        <div className="currentText">
          <div className="textIcon flex items-center gap-2 text-[#535D66]">
            <p>Current Price</p>
          </div>
          <div className="value flex items-end ">
            <h1 className="text-[24px] font-[500] leading-[28px] text-[#171717] mt-[10px]">
              ₹26,670.25
            </h1>
            <p className="text-[green] flex items-center ml-[10px]">
              <MdOutlineArrowOutward /> 0.04%
            </p>
          </div>
        </div>
        <div className="butSellBtn flex gap-[6px]">
          <PurpleBtn icon={<AiTwotonePlusCircle />} text="Buy" />
          <PurpleBtn icon={<AiFillMinusCircle />} text="Sell" />
        </div>
      </div>
      <div className="tabs mt-5 bg-[#F3F3F7] float-right flex w-[147px] justify-between items-center gap-1 p-[3px] rounded-[6px]  ">
        {timeData.map((data, index) => (
          <div
            key={index}
            onClick={() => selectTIme(data)}
            className={`tab hover:bg-white hover:text-black cursor-pointer   text-[12px]      w-[28px] h-[21px] rounded-[4px] flex items-center justify-center  leading-[14px]  ${
              sTime === data
                ? "bg-white text-black"
                : "bg-[#F3F3F7] text-[#797E82]"
            } }`}
          >
            {data}
          </div>
        ))}
      </div>
      <div className="graph mt-[100px]">
        <img className="w-[100%] h-[116px]"  src={`/public/${sTime === "1H"|| sTime === "1W" ? "Graph" : "Graph2"}.png`} alt="" />
      </div>
      <div className="timeShow flex items-center justify-between mt-[1rem]">
        {time.map((timeShow, idx) => (
          <p
            key={idx}
            className="text-[12px] leading-[14px] text-[#797E82] font-normal "
          >
            {timeShow}
          </p>
        ))}
      </div>
    </div>
  );
}
