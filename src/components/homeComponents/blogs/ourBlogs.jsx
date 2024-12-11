import React from "react";
import Blog1 from "../../../../public/assets/blog1.png";
import Blog2 from "../../../../public/assets/blog2.png";
import Blog3 from "../../../../public/assets/blog3.png";
import BlogCard from "./blogCard";

const OurBlogs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-12">
      {/* Title Section */}
      <h2 className="text-black text-3xl sm:text-4xl font-normal mb-4 mt-16 text-center">
        Our Blogs
      </h2>
      <p className="text-[#9F9F9F] text-sm sm:text-base font-medium mb-16 text-center">
        Find a bright ideal to suit your taste with our great selection
      </p>

      {/* Blog Cards Section */}
      <div className="flex flex-col sm:flex-row lg:flex-row gap-12 mb-16 w-full justify-center">
        <BlogCard image={Blog1} />
        <BlogCard image={Blog2} />
        <BlogCard image={Blog3} />
      </div>

      {/* View All Post Section */}
      <div className="text-center mt-2 mb-8"> 
        <h3 className="text-black text-lg sm:text-xl font-medium mb-4">View All Post</h3>
        <div className="bg-black h-0.5 w-28 mx-auto"></div>
      </div>
    </div>
  );
};

export default OurBlogs;
