import React from "react";
import PurpleBtn from "../components/PurpleBtn";
import { CiImport } from "react-icons/ci";

import FilterTab from "../components/FilterTab";
import SearchField from "../components/SearchField";
import HEadingSearch from "../components/HEadingSearch";
import ItemList from "../components/ItemList";

export default function Transaction() {
  return (
    <>
      <div className="exportBtn flex justify-end items-center">
        <PurpleBtn icon={<CiImport />} text="Export CSV" />
      </div>
      <div className="transactionContent rounded-[16px] border-[0.5px]   bg-[#FFFFFF] mt-4">
        <div className="tabFilter flex justify-between items-center  pt-[16px] pl-[16px] pr-[16px] ">
          <FilterTab />
          <SearchField />
        </div>
        <HEadingSearch />
        <ItemList />
      </div>
    </>
  );
}
