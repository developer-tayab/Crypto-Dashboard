import React, { useState } from "react";
import MessageBtn from "./MessageBtn";

export default function ContactForm() {
  let [check, setCheck] = useState(false);
  let [formData, setFromData] = useState({
    name: "",
    surname: "",
    email: "",
    text: "",
  });

  let getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFromData({ ...formData, [name]: value });
  };

  let submitHandler = (event) => {
    event.preventDefault();
    if (check === true) {
      console.log(formData);
      setFromData({
        name: "",
        surname: "",
        email: "",
        text: "",
      });
      setCheck(false);
    } else {
      alert("Please accept terms and conditions");
    }
  };

  return (
    <form action="" className=" flex flex-col gap-[18px]  ">
      <div className="topInput flex  justify-between items-center mt-6">
        <div className="nameField   ">
          <label htmlFor="name">
            Name
            <br />
            <input
              className="w-[230px] h-[39px] p-[10px_12px] border-[1px] rounded-[8px] outline-none "
              type="text"
              placeholder="James"
              name="name"
              value={formData.name}
              onChange={getValue}
            />
          </label>
        </div>
        <div className="nameField    ">
          <label htmlFor="surname">
            Surname
            <br />
            <input
              className="w-[230px] h-[39px] p-[10px_12px] border-[1px] rounded-[8px] outline-none "
              type="text"
              placeholder="Arthur"
              name="surname"
              value={formData.surname}
              onChange={getValue}
            />
          </label>
        </div>
      </div>
      <div className="email">
        <label htmlFor="email">
          Email
          <br />
          <input
            className="w-[100%] h-[39px] p-[10px_12px] border-[1px] rounded-[8px] outline-none "
            type="email"
            placeholder="name@mail.com"
            name="email"
            value={formData.email}
            onChange={getValue}
          />
        </label>
      </div>
      <div className="message">
        <label htmlFor="message">
          Message
          <br />
          <textarea
            className="w-[100%] h-[92px]  p-[10px_12px] border-[1px] rounded-[8px] outline-none "
            type="text"
            placeholder="Your Message"
            name="text"
            value={formData.text}
            onChange={getValue}
          />
        </label>
      </div>
      <div className="checkBox  flex justify-start gap-[10px] items-center ">
        <input
          type="checkbox"
          id="  "
          className="outline-none border-[#FFFFFF] rounded-[4px]"
          onClick={(e) => setCheck(e.target.checked)}
          
        />
        <p className="text-[12px] leading-[14px] font-normal  text-[#171717]">
          I agree with{" "}
          <span className="text-[#5F00D9]">Terms & Conditions.</span>
        </p>
      </div>
      <MessageBtn work={submitHandler} text="Send a Message" />
      <MessageBtn work={submitHandler} text="Book a Meeting" />
     
    </form>
  );
}
