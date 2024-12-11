import React from "react";

const ContactField = ({ title, placeholder }) => {
  return (
    <div className="flex flex-col h-min gap-2">
      <h4 className="text-black text-base font-medium">{title}</h4>
      <input
        type="text"
        placeholder={placeholder}
        className={`rounded-xl w-96 py-4 px-4 ${title == 'Message' ? ' h-28' : ' h-16' } border border-[#9F9F9F] outline-none text-black`}
      />
    </div>
  );
};

export default ContactField;
