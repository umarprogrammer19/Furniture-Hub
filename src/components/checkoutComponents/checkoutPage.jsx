import React from "react";
import Navbar from "../navbar";
import HeroBanner from "../banner";
import ContactField from "../contactComponents/contactField";
import CheckoutPicker from "./checkoutPicker";
import CheckoutBill from "./checkoutBill";
import Banner from "../authComponents/authBanner/authBanner";
import Footer from "../authComponents/authFooter/authFooter";
import { useCart } from "@/data/useCartStore";

const CheckoutPage = () => {
  const { cart } = useCart();

  return (
    <div className="bg-white flex flex-col">
      {/* Navbar */}
      <Navbar bgColor={"white"} />

      {/* Hero Banner */}
      <HeroBanner title={"Checkout"} />

      {/* Checkout Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4 lg:px-16 py-8 w-full">
        {/* Billing Details */}
        <div className="flex flex-col gap-8 lg:w-2/3">
          <h1 className="text-black text-2xl lg:text-4xl font-semibold">
            Billing details
          </h1>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <ContactField title={"First Name"} />
            <ContactField title={"Last Name"} />
          </div>
          <ContactField title={"Company Name (Optional)"} />
          <CheckoutPicker
            title={"Country / Region"}
            op1={"Pakistan"}
            op2={"India"}
            op3={"Turkey"}
          />
          <ContactField title={"Street address"} />
          <ContactField title={"Town / City"} />
          <CheckoutPicker
            title={"Province"}
            op1={"Sindh"}
            op2={"Punjab"}
            op3={"Khyber Pakhtun"}
          />
          <ContactField title={"ZIP code"} />
          <ContactField title={"Phone"} />
          <ContactField title={"Email address"} />
          <textarea
            placeholder="Additional Information"
            className="rounded-2xl py-4 px-4 w-full lg:w-[33rem] h-20 border border-[#9F9F9F] outline-none text-black"
          />
        </div>

        {/* Checkout Bill */}
        <div className="lg:w-1/3 w-full">
          <CheckoutBill />
        </div>
      </div>

      {/* Banner */}
      <Banner />

      {/* Footer */}
      <Footer />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#D9D9D9] w-full lg:w-9/12 h-0.5 flex my-12"></div>
        <div className="justify-center lg:justify-start items-center w-full lg:w-9/12 px-4">
          <p className="text-black text-sm lg:text-base font-normal mb-8 text-center lg:text-left">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
