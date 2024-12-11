"use client";
import React, { useState } from "react";
import Navbar from "../navbar";
import HeroBanner from "../banner";
import BlogItem from "./blogItem";
import blogPhotoFirst from "../../../public/assets/blogFirst.png";
import blogPhotoSecond from "../../../public/assets/blogSecond.png";
import blogPhotoThird from "../../../public/assets/blogThird.png";
import BlogCategories from "./blogCategories";
import RecentPosts from "./recentPosts";
import Banner from "../authComponents/authBanner/authBanner";
import Footer from "../authComponents/authFooter/authFooter";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white flex flex-col">
      <Navbar bgColor={"white"} />
      <HeroBanner title={"Blog"} />

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-4 lg:px-28 mt-8">
        
        {/* Blog Items (Left Section) */}
        <div className="flex flex-col gap-8 lg:w-2/3">
          <BlogItem
            tag={"Wood"}
            title={"Going all-in with millennial design"}
            photo={blogPhotoFirst}
          />
          <BlogItem
            tag={"Handmade"}
            title={"Exploring new ways of decorating"}
            photo={blogPhotoSecond}
          />
          <BlogItem
            tag={"Wood"}
            title={"Handmade pieces that took time to make"}
            photo={blogPhotoThird}
          />
        </div>

        {/* Sidebar (Right Section) */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <BlogCategories />
          <RecentPosts />
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex gap-4 justify-center mt-12 mb-6">
        {Array.from({ length: 3 }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={
              currentPage === index + 1
                ? "border cursor-pointer bg-[#FBEBB5] mx-[5px] my-0 px-3 py-2 rounded-[5px] border-solid border-[#ccc] text-black"
                : "border cursor-pointer bg-[#FFF9E5] mx-[5px] my-0 px-3 py-2 rounded-[5px] border-solid border-[#ccc] text-black"
            }
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Banner />
      <Footer />

      {/* Footer Note Section */}
      <div className="flex flex-col items-center">
        <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
        <div className="justify-start items-start flex w-9/12 pl-4 lg:pl-24">
          <p className="text-black text-base font-normal mb-8">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
