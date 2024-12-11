import React from "react";
import { SlidersHorizontal, Grip, AlignVerticalSpaceAround } from "lucide-react";

const Filter = ({ currentPage }) => {
  return (
    <div className="flex flex-wrap justify-between w-full items-center my-4 bg-[#FAF4F4] p-4 sm:p-8 lg:px-16">
      {/* Left Section */}
      <div className="flex gap-4 items-center flex-wrap">
        <SlidersHorizontal color="black" />
        <p className="text-black text-lg sm:text-xl font-normal">Filter</p>
        <Grip color="black" />
        <AlignVerticalSpaceAround color="black" />
        <div className="bg-[#9F9F9F] w-0.5 h-6"></div>
        <p className="text-black text-sm sm:text-base font-normal">
          Showing {currentPage === 1 ? "1-12" : currentPage === 2 ? "13-24" : "24-32"} of 32 results
        </p>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 items-center flex-wrap mt-4 sm:mt-0">
        <h5 className="text-black text-sm sm:text-xl font-normal">Show</h5>
        <p className="text-[#9F9F9F] text-sm sm:text-xl font-normal bg-white p-2 px-4">12</p>
        <h5 className="text-black text-sm sm:text-xl font-normal">Sort by</h5>
        <p className="text-[#9F9F9F] text-sm sm:text-xl font-normal bg-white p-2 px-4">Default</p>
      </div>
    </div>
  );
};

export default Filter;
