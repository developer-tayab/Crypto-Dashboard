import React from "react";

export default function MessageBtn({ work , text }) {
  return (
    <div className="messageBtn">
      <button
      onClick={work}
        className={`w-[100%] h-[[38px] p-[10px_16px] rounded-[10px] text-[14px] ${
          text === "Book a Meeting"
            ? "text-[#171717] bg-[#EEEEF4] "
            : "bg-[#D8DDE2] text-[#797E82]"
        } font-medium leading-[18px] text-center   `}
      >
        {text}
      </button>
    </div>
  );
}
