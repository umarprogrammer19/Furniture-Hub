import React from "react";

const Banner = () => {
  return (
    <div className="m-0 p-12 flex flex-col lg:flex-row bg-[#FAF4F4] w-full justify-center gap-8 py-16 px-4 sm:px-8 lg:px-16">
      {/* Free Delivery Section */}
      <div className="flex flex-col p-5 m-1 text-center w-full lg:w-1/3">
        <h4 className="text-black text-3xl font-medium">Free Delivery</h4>
        <p className="text-[#9F9F9F] text-xl font-normal w-full sm:w-80 mx-auto">
          For all orders over $50, consectetur adipim scing elit.
        </p>
      </div>

      {/* 90 Days Return Section */}
      <div className="flex flex-col p-5 m-1 text-center w-full lg:w-1/3">
        <h4 className="text-black text-3xl font-medium">90 Days Return</h4>
        <p className="text-[#9F9F9F] text-xl font-normal w-full sm:w-80 mx-auto">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>

      {/* Secure Payment Section */}
      <div className="flex flex-col p-5 m-1 text-center w-full lg:w-1/3">
        <h4 className="text-black text-3xl font-medium">Secure Payment</h4>
        <p className="text-[#9F9F9F] text-xl font-normal w-full sm:w-80 mx-auto">
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  );
};

export default Banner;
