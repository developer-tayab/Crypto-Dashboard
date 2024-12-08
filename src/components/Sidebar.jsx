import React from "react";
import { MdDashboard } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

export default function Sidebar({ setTitle }) {
  let sideLink = [
    {
      icon: <MdDashboard />,
      text: "Dashboard",
    },
    {
      icon: <TbArrowsDoubleNeSw />,
      text: "Transactions",
    },
  ];

  return (
    <div className="sideBar w-[330px] h-[100vh] border-r-[0.5px]  bg-[#ffffff]    relative">
      <div className="sideBar-content w-[182px] mx-auto pt-[54px] ">
        <h1 className="DOSOMECODING text-[purple] text-[20px] leading-[18px] font-medium  ">
          @DOSOMECODING
        </h1>
      </div>
      <ul className="sideLinksContent mx-auto w-[232px] mt-[43px] ">
        {sideLink.map((links) => (
          <div
            key={links.text}
            onClick={() => setTitle(links.text)}
            className="item flex justify-start  items-center gap-[16px] w-[232px] rounded-[10px] h-[42px] p-[12px_16px_12px_16px] hover:bg-[#F3F3F7] hover:text-black mb-[5%] transition-all 1s ease-linear text-[14px] text-[#797E82] cursor-pointer "
          >
            {" "}
            {links.icon} {links.text}
          </div>
        ))}
      </ul>
      <div className="supportContent mx-auto w-[232px] absolute bottom-[0] left-[12px] ">
        <div
          className="item flex justify-start  items-center gap-[16px] w-[232px] rounded-[10px] h-[42px] p-[12px_16px_12px_16px] hover:bg-[#F3F3F7] hover:text-black   mb-[5%] transition-all 1s ease-linear text-[14px] text-[#797E82] cursor-pointer "
          onClick={(e) => setTitle("Support")}
        >
          {<BiSupport />}
          Support
        </div>
      </div>
    </div>
  );
}
