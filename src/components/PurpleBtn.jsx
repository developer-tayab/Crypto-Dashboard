import React from "react";

export default function PurpleBtn({  icon, text }) {
  return (
    <button  className={`p-[10px_16px_10px_16px] ${text === "contact" ? "text-purple-700 bg-[white]" :" bg-[#5F00D9] text-[white]"}  leading-[18px] font-medium flex justify-center items-center text-[#FFFFFF] gap-[8px] rounded-[10px]`}>
      {icon}
      <h1>{text}</h1>
    </button>
  );
}
