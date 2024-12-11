"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-4 w-full px-4 sm:px-8 lg:px-20 py-8 bg-white">
      {/* Address Section */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-6 sm:mb-8 lg:mb-0">
        <p className="text-[#9F9F9F] text-sm sm:text-base font-normal text-center lg:text-left">
          400 University Drive Suite 200 Coral <br /> Gables, FL 33134 USA
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-6 sm:mb-8 lg:mb-0">
        <h4 className="text-[#9F9F9F] text-sm sm:text-base font-medium mb-4">
          Links
        </h4>
        <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4">
          <a href="/" className="text-black text-sm sm:text-base font-medium">
            Home
          </a>
          <a href="/shop" className="text-black text-sm sm:text-base font-medium">
            Shop
          </a>
          <a href="/blog" className="text-black text-sm sm:text-base font-medium">
            Blog
          </a>
          <a href="/contact" className="text-black text-sm sm:text-base font-medium">
            Contact
          </a>
        </div>
      </div>

      {/* Help Section */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-6 sm:mb-8 lg:mb-0">
        <h4 className="text-[#9F9F9F] text-sm sm:text-base font-medium mb-4">
          Help
        </h4>
        <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4">
          <a href="#" className="text-black text-sm sm:text-base font-medium">
            Payment Options
          </a>
          <a href="#" className="text-black text-sm sm:text-base font-medium">
            Returns
          </a>
          <a href="#" className="text-black text-sm sm:text-base font-medium">
            Privacy Policies
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/4">
        <h4 className="text-[hsl(0,0%,62%)] text-sm sm:text-base font-medium mb-4 text-center lg:text-left">
          Newsletter
        </h4>
        <div className="flex flex-col sm:flex-row items-center lg:items-stretch gap-3 sm:gap-4">
          <input
            className="border-b border-black outline-none w-full sm:w-56 p-2 placeholder-black text-sm sm:text-base"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <button className="w-full sm:w-auto p-2 border-b border-b-black text-black text-sm sm:text-base font-medium">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
