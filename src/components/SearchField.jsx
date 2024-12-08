import React from "react";
import { CiSearch } from "react-icons/ci";
export default function SearchField() {
  return (
    <div className="searchTab flex items-center  gap-[8px]">
      <div className="searchIcon text-[#797E82]">
        <CiSearch />
      </div>
      <input
        className=" w-[195px]  h-[18px]  font-normal text-[14px] leading-[18px] text-[#797E82] outline-none "
        type="search"
        placeholder="Search by ID or destination"
      />
    </div>
  );
}
