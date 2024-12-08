import React from "react";
import { LiaUserCircle } from "react-icons/lia";

export default function ({ title }) {
  return (
    <div className="topBar w-[100%] h-[64px]    bg-white flex justify-evenly items-center  ">
      <h1 className="text-[28px] font-medium w-[200px] leading-[32px] ">
        {title}
      </h1>
      <LiaUserCircle
        fontSize={"55px"}
        className="hover:cursor-pointer text-[gray] hover:text-black"
      />
    </div>
  );
}
