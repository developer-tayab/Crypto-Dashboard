import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
export default function HEadingSearch() {
  let headingData = [
    { text: "ID" },
    { text: "Date & Time", icon: <IoMdArrowDropdown /> },
    { text: "Type" },
    { text: "Amount", icon: <IoMdArrowDropdown /> },
    { text: "Status" },
  ];
  return (
    <div className="HeadingSearch border-t-[0.5px] border-b-[0.5px] border-[#D8DDE2] p-[18px]">
      <ul className="flex justify-evenly items-center">
        {headingData.map((item) => (
          <li
            key={item.text}
            className="flex justify-center items-center cursor-pointer text-[#797E82] text-[12px] leading-[14px] "
          >
            {item.text}
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}
