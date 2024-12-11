import React from "react";
import ItemCard from "../shopComponents/itemCard";

// Replace the image URLs with paths to images in the public/assets folder
const TopPicks = ({ title, desc }) => {
  const data = [
    {
      id: 0,
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imageUrl: "/assets/ss002_1.png", // Image from public/assets folder
    },
    {
      id: 1,
      title: "Granite dining table with dining chair",
      price: "Rs. 28,500.00",
      imageUrl: "/assets/ss003_1.png", // Image from public/assets folder
    },
    {
      id: 2,
      title: "Outdoor bar table and stool",
      price: "Rs. 32,000.00",
      imageUrl: "/assets/ss004_1.png", // Image from public/assets folder
    },
    {
      id: 3,
      title: "Plain console with teak mirror",
      price: "Rs. 22,800.00",
      imageUrl: "/assets/ss005_1.png", // Image from public/assets folder
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full px-4 sm:px-16">
      <h2 className="text-black text-4xl font-normal mb-4 mt-16 text-center">
        {title}
      </h2>
      <p className="text-[#9F9F9F] text-base font-medium mb-16 text-center">
        {desc}
      </p>

      {/* Grid for Item Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {data.map((item) => (
          <div key={item.id} className="w-full">
            {/* Image without card styling */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-gray-700 font-semibold mt-4">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Section */}
      <div className="my-20 text-center">
        <h3 className="text-black text-xl font-medium mb-4">View More</h3>
        <div className="bg-black h-0.5 w-28 mx-auto"></div>
      </div>
    </div>
  );
};

export default TopPicks;
