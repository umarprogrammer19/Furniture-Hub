import React from "react";
import LoginForm from "../login/login";
import RegisterForm from "../register/register";
import AuthBanner from "../authBanner/authBanner";
import AuthFooter from "../authFooter/authFooter";
import Navbar from "@/components/navbar";
import HeroBanner from "@/components/banner";

const AuthPage = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Banner */}
      <HeroBanner title={"My Account"} />

      {/* Login and Register Forms */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-8 lg:gap-16 px-4 lg:px-16 my-8 lg:my-12">
        <LoginForm />
        <RegisterForm />
      </div>

      {/* Auth Banner */}
      <AuthBanner />

      {/* Footer Section */}
      <AuthFooter />

      {/* Divider and Footer Note */}
      <div className="flex flex-col items-center px-4">
        {/* Divider */}
        <div className="bg-[#D9D9D9] w-full lg:w-9/12 h-0.5 flex my-8 lg:my-12"></div>
        
        {/* Footer Text */}
        <div className="flex justify-center lg:justify-start items-center lg:w-9/12">
          <p className="text-black text-sm sm:text-base font-normal mb-8 text-center lg:text-left">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
