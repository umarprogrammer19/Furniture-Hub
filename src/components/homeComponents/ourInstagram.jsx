import React from "react";

const OurInstagram = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-instagram bg-no-repeat bg-cover py-20 px-4 sm:px-6 md:px-12">
      {/* Title */}
      <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-center">
        Our Instagram
      </h1>

      {/* Description */}
      <p className="text-black text-lg sm:text-xl md:text-2xl font-normal mb-4 text-center">
        Follow our store on Instagram
      </p>

      {/* Button */}
      <button className="text-black text-lg sm:text-xl md:text-2xl font-normal px-10 sm:px-12 md:px-16 py-3 sm:py-4 md:py-4 rounded-full bg-white">
        Follow Us
      </button>
    </div>
  );
};

export default OurInstagram;
