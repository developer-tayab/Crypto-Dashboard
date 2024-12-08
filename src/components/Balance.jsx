import { HiMiniExclamationCircle } from "react-icons/hi2";
import PurpleBtn from "./PurpleBtn";
import { LuArrowUpToLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";

export default function Balance() {
  return (
    <div className="balance p-[24px] rounded-[16px] border-[#EEEEF4] border-[0.5px] flex items-center bg-white justify-between">
      <div className="totalProtfolio w-[190px]    ">
        <div className="textIcon flex items-center gap-2 text-[#535D66]">
          <p>Total Portfolio Value</p>
          <HiMiniExclamationCircle />
        </div>
        <div className="value">
          <h1 className="text-[24px] font-[500] leading-[28px] text-[#171717] mt-[10px]">
            ₹ 112,312.24
          </h1>
        </div>
      </div>
      <div className="walletBalance ">
        <p className="text-[#535D66]">Wallet Balances</p>
        <div className="balance flex mt-[10px] gap-5">
          <div className="btcValue flex gap-3 items-center">
            <h1 className="text-[24px] font-[500] leading-[28px] text-[#171717]">
              22.39401000
            </h1>
            <div className="btcText bg-[#F3F3F7]  rounded-[100px] w-[40px]">
              <p className="text-[#797E82] p-[5px]">BTC</p>
            </div>
          </div>
          <div className="btcValue flex gap-3 items-center">
            <h1 className="text-[24px] font-[500] leading-[28px] text-[#171717]">
              ₹ 22.39401000
            </h1>
            <div className="indianText bg-[#F3F3F7]  rounded-[100px] w-[40px] ">
              <p className="text-[#797E82] p-[5px]">INR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Buttons flex gap-2">
        <PurpleBtn icon={<LuArrowDownToLine />} text="Deposit" />
        <PurpleBtn icon={<LuArrowUpToLine />} text="Withdraw" />
      </div>
    </div>
  );
}
