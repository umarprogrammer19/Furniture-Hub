import React from "react";

const CheckoutPicker = ({title, op1, op2, op3 }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-black text-base font-medium mb-6">{title}</h4>
      <select className="rounded-2xl py-4 px-4 w-[33rem] h-20 border border-[#9F9F9F] outline-none text-black">
        <option value="option1">{op1}</option>
        <option value="option1">{op2}</option>
        <option value="option1">{op3}</option>
      </select>
    </div>
  );
};

export default CheckoutPicker;
