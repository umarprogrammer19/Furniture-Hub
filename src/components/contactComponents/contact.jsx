import React from "react";
import Navbar from "../navbar";
import HeroBanner from "../banner";
import { MapPin, Phone, Clock4 } from "lucide-react";
import ContactData from "./contactData";
import ContactField from "./contactField";
import Banner from "../authComponents/authBanner/authBanner";
import Footer from "../authComponents/authFooter/authFooter";

const ContactPage = () => {
  return (
    <div className="bg-white flex flex-col">
      <Navbar bgColor={"white"} />
      <HeroBanner title={"Contact"} />
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
        <h2 className="text-black font-semibold text-2xl sm:text-4xl mb-2">
          Get In Touch With Us
        </h2>
        <h4 className="text-[#9F9F9F] text-center text-sm sm:text-base font-normal w-full sm:w-2/3 lg:w-2/5 mb-12">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </h4>
        <div className="flex flex-col sm:flex-row items-start justify-evenly gap-8 sm:gap-12 lg:gap-16 w-full">
          {/* Contact Info Section */}
          <div className="flex flex-col gap-8 sm:w-1/3 w-full">
            <ContactData
              title={"Address"}
              data={"236 5th SE Avenue, New York NY10000, United States"}
              photo={<MapPin color="black" />}
            />
            <ContactData
              title={"Phone"}
              data={"Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"}
              photo={<Phone color="black" />}
            />
            <ContactData
              title={"Working Time"}
              data={"Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"}
              photo={<Clock4 color="black" />}
            />
          </div>
          
          {/* Contact Form Section */}
          <div className="flex flex-col gap-8 sm:w-1/3 w-full">
            <ContactField title={"Your name"} placeholder={'Abc'} />
            <ContactField title={"Email address"} placeholder={'Abc@def.com'} />
            <ContactField title={"Subject"} placeholder={'This is an optional'} />
            <ContactField title={"Message"} placeholder={"Hi I'd like to ask about"} />
            <button
              type="submit"
              className="py-2 px-16 rounded-2xl border border-black cursor-pointer text-black text-lg sm:text-xl font-normal w-full sm:w-56 mb-20"
            >
              Submit
            </button>
          </div>
        </div>

        <Banner />
        <Footer />

        <div className="bg-[#D9D9D9] w-full h-0.5 flex justify-center my-12"></div>
        <div className="justify-start items-start flex w-full sm:w-9/12">
          <p className="text-black text-sm sm:text-base font-normal mb-8">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
