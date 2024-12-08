import React from "react";
import ContactLeft from "../components/ContactLeft";
import ContactForm from "../components/ContactForm";
import { BiSolidMessageRounded } from "react-icons/bi";
import { RiMessageFill } from "react-icons/ri";
import Loan from "../components/Loan";
import PurpleBtn from "../components/PurpleBtn";

export default function Support() {
  return (
    <div className="contactUs grid grid-cols-2 gap-[12px] ">
      <ContactLeft
        icon={<RiMessageFill fontSize={"32px"} />}
        text={"contact"}
        p={
          "Have a question or just want to know more? Feel free to reach out to us."
        }
      />
      <div className="contactRight rounded-[16px] border-[0.5px]   bg-[#FFFFFF] p-[24px] ">
        <p className="text-[14px] leading-[18px] font-medium text-[#171717]">
          You will receive response within 24 hours of time of submit.
        </p>
        <ContactForm />
      </div>
      <ContactLeft
        icon={<BiSolidMessageRounded fontSize={"32px"} />}
        text={"Live Chat"}
        p={"Don’t have time to wait for the answer? Chat with us now."}
      />
      <Loan loan={"Chatbot"} heading={"Chat with us now"} />
      
    </div>
  );
}
