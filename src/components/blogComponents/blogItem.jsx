import React from "react";
import Image from "next/image";
import { User, Calendar, Tag } from "lucide-react";

const BlogItem = ({ tag, title, photo, recentPosts = [] }) => {
  // Check if recentPosts is an array
  if (!Array.isArray(recentPosts)) {
    recentPosts = [];
  }

  return (
    <div className="flex flex-col justify-start w-full mb-8 px-4 sm:px-8 lg:w-[600px] mx-auto relative">
      {/* Search Bar (Visible only on mobile) */}
      <div className="absolute top-0 left-0 w-full px-4 py-2 bg-white shadow-md z-10 sm:hidden">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Image Section */}
      <div className="w-full mt-12 sm:mt-0">
        <Image
          src={photo}
          width={600}
          height={350}
          alt="blog-photo"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Metadata Section */}
      <div className="mt-4 gap-4 sm:gap-6 flex flex-col sm:flex-row sm:flex-nowrap">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <User color="#9F9F9F" />
          <p className="text-[#9F9F9F] text-sm sm:text-base font-normal">Admin</p>
        </div>
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Calendar color="#9F9F9F" />
          <p className="text-[#9F9F9F] text-sm sm:text-base font-normal">14 Oct 2022</p>
        </div>
        <div className="flex items-center gap-2">
          <Tag color="#9F9F9F" />
          <p className="text-[#9F9F9F] text-sm sm:text-base font-normal">{tag}</p>
        </div>
      </div>

      {/* Title Section */}
      <h3 className="text-black text-2xl sm:text-3xl font-medium my-4">{title}</h3>

      {/* Content Section */}
      <p className="text-[#9F9F9F] text-sm sm:text-base text-justify font-normal leading-6 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
      </p>

      {/* Recent Posts Section (only visible on small devices) */}
      {recentPosts.length > 0 && (
        <div className="sm:hidden mt-6">
          <h4 className="text-xl font-medium mb-2">Recent Posts</h4>
          <ul className="space-y-2">
            {recentPosts.map((post, index) => (
              <li key={index} className="text-sm text-[#555]">
                <a href="#" className="hover:underline">{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Read More Section */}
      <h3 className="text-black text-xl sm:text-2xl font-medium mb-2">Read More</h3>
      <div className="bg-black h-0.5 w-28 mb-6"></div>
    </div>
  );
};

export default BlogItem;
