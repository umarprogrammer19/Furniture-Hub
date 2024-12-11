import React from "react";
import { Search } from "lucide-react";

const BlogCategories = () => {
  return (
    <div className="pr-28">
      <div className="relative">
        <input
          type="text"
          className="rounded-2xl py-4 px-4 w-80 border border-[#9F9F9F] outline-none text-black"
        />
        <span className="absolute right-3 top-4 text-gray-500">
          <Search color="black" />
        </span>
      </div>
      <div className="px-4">
        <p className="text-black text-2xl font-medium my-9">Categories</p>
        <div className="flex items-center justify-between my-6">
          <p className="text-[#9F9F9F] text-base font-normal">Crafts</p>
          <p className="text-[#9F9F9F] text-base font-normal">2</p>
        </div>
        <div className="flex items-center justify-between my-6">
          <p className="text-[#9F9F9F] text-base font-normal">Design</p>
          <p className="text-[#9F9F9F] text-base font-normal">8</p>
        </div>
        <div className="flex items-center justify-between my-6">
          <p className="text-[#9F9F9F] text-base font-normal">Handmade</p>
          <p className="text-[#9F9F9F] text-base font-normal">7</p>
        </div>
        <div className="flex items-center justify-between my-6">
          <p className="text-[#9F9F9F] text-base font-normal">Interior</p>
          <p className="text-[#9F9F9F] text-base font-normal">1</p>
        </div>
        <div className="flex items-center justify-between my-6">
          <p className="text-[#9F9F9F] text-base font-normal">Wood</p>
          <p className="text-[#9F9F9F] text-base font-normal">6</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
