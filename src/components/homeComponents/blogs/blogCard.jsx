import Image from "next/image";
import React from "react";
import { Clock4, Calendar } from "lucide-react";

const BlogCard = ({ image }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={image} width={393} height={393} />
      <p className="text-black text-xl font-normal mt-8 mb-4">
        Going all-in with millennial design
      </p>
      <div>
        <h3 className="text-black text-xl font-medium mb-2">Read More</h3>
        <div className="bg-black h-0.5 w-28"></div>
      </div>
      <div className="flex gap-3 mt-4">
        <Clock4 color="black" />
        <p className="text-black text-base font-light">5 min</p>
        <Calendar color="black" />
        <p className="text-black text-base font-light">12th Oct 2022</p>
      </div>
    </div>
  );
};

export default BlogCard;
