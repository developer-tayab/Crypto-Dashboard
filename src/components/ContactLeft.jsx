import React from 'react'

export default function ContactLeft({icon, text, p}) {
  return (
    <div className="contactLeft flex flex-col gap-[28px]">
    <div className="messageIcon text-[#5F00D9] ">
      {icon}
    </div>
    <div className="contactText">
      <h1 className="text-[32px] text-[#171717] font-medium leading-[36px]  ">
        {text}
      </h1>
    </div>
    <p className=" w-[368px] text-[14px] leading-[18px] text-[#535D66] font-normal  ">
      {p}
    </p>
  </div>
  )
}
