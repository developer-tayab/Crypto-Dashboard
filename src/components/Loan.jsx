import React from "react";
import PurpleBtn from "./PurpleBtn";

export default function Loan({ loan, heading }) {
  return (
    <div
      className={`loan p-[24px] rounded-[16px]  ${
        loan === "contact" || (loan === "Chatbot" && "bg-purple-600 ")
      } border-[#EEEEF4] border-[0.5px] bg-white `}
    >
      <PurpleBtn text={loan} />
      <h1
        className={`w-[420px] h-[44px] text-[18px] leading-[22px] font-medium ${
          loan === "contact" 
            ? "text-[#171717]  "
            : "text-[#171717] "
        } mt-[20px]`}
      >
        {heading}
      </h1>
    </div>
  );
}
