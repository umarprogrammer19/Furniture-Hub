import React from "react";
import { useState } from "react";

const SizeChoise = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="flex items-center gap-4">
      <p
        className={
          selectedSize === "XS"
            ? "bg-[#FBEBB5] py-3 px-4 rounded-md m-0 cursor-pointer mb-2 text-black"
            : "bg-[#F4F4F4] py-3 px-4 rounded-md m-0 cursor-pointer mb-2 text-black"
        }
        onClick={() => handleSizeClick("XS")}
      >
        XS
      </p>
      <p
        className={
          selectedSize === "L"
            ? "bg-[#FBEBB5] py-3 px-4 rounded-md m-0 cursor-pointer mb-2 text-black"
            : "bg-[#F4F4F4] py-3 px-4 rounded-md m-0 cursor-pointer mb-2 text-black"
        }
        onClick={() => handleSizeClick("L")}
      >
        L
      </p>
      <p
        className={
          selectedSize === "XL"
            ? "bg-[#FBEBB5] py-3 px-4 rounded-md m-0 cursor-pointer mb-2 text-black"
            : "bg-[#F4F4F4] py-3 px-4 rounded-md m-0 cursor-pointer mb-2 text-black"
        }
        onClick={() => handleSizeClick("XL")}
      >
        XL
      </p>
    </div>
  );
};

export default SizeChoise;
