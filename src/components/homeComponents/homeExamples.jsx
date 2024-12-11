import Image from "next/image";
import React from "react";
import Side1 from "../../../public/assets/sideTable1.png";
import Side2 from "../../../public/assets/sideTable2.png";

const HomeExamples = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center bg-[#FAF4F4] px-6 sm:px-16 py-8 sm:py-16 gap-8 sm:gap-16 w-full">
      {/* Left Side Table */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <Image
          src={Side1}
          width={400}
          height={400}
          className="w-full max-w-[300px] sm:max-w-[400px] mx-auto sm:mx-0"
          alt="Side Table 1"
        />
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mt-4 sm:mt-6 mb-2">
          Side table
        </h3>
        <h3 className="text-black text-base sm:text-lg lg:text-xl font-medium mb-4">
          View More
        </h3>
        <div className="bg-black h-0.5 w-20 sm:w-28 mx-auto sm:mx-0"></div>
      </div>

      {/* Right Side Table */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <Image
          src={Side2}
          width={400}
          height={400}
          className="w-full max-w-[300px] sm:max-w-[432px] mx-auto sm:mx-0"
          alt="Side Table 2"
        />
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mt-4 sm:mt-6 mb-2">
          Side table
        </h3>
        <h3 className="text-black text-base sm:text-lg lg:text-xl font-medium mb-4">
          View More
        </h3>
        <div className="bg-black h-0.5 w-20 sm:w-28 mx-auto sm:mx-0"></div>
      </div>
    </div>
  );
};

export default HomeExamples;
