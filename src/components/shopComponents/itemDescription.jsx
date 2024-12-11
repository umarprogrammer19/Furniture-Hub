import Image from "next/image";
import React, { useState } from "react";
import Sofa from "../../../public/assets/cloudSofa.png";

const ItemDescription = () => {
  const [selectedTitle, setselectedTitle] = useState("Description");

  const handleTitleClick = (title) => {
    setselectedTitle(title);
  };

  return (
    <div className="w-full bg-white flex flex-col justify-center">
      {/* Title Section */}
      <div className="flex flex-wrap gap-8 justify-center sm:gap-14 mb-6">
        <p
          className={
            selectedTitle === "Description"
              ? "text-black text-xl sm:text-2xl font-normal cursor-pointer"
              : "text-[#9F9F9F] text-xl sm:text-2xl font-normal cursor-pointer"
          }
          onClick={() => handleTitleClick("Description")}
        >
          Description
        </p>
        <p
          className={
            selectedTitle === "Additional Information"
              ? "text-black text-xl sm:text-2xl font-normal cursor-pointer"
              : "text-[#9F9F9F] text-xl sm:text-2xl font-normal cursor-pointer"
          }
          onClick={() => handleTitleClick("Additional Information")}
        >
          Additional Information
        </p>
        <p
          className={
            selectedTitle === "Reviews [5]"
              ? "text-black text-xl sm:text-2xl font-normal cursor-pointer"
              : "text-[#9F9F9F] text-xl sm:text-2xl font-normal cursor-pointer"
          }
          onClick={() => handleTitleClick("Reviews [5]")}
        >
          Reviews [5]
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6 sm:gap-10 justify-center w-full sm:px-16 px-4 mt-4">
        <p className="text-[#9F9F9F] text-justify text-base sm:text-lg font-normal">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[#9F9F9F] text-justify text-base sm:text-lg font-normal">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine-tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      {/* Image Section - Align two images in one row */}
      <div className="flex justify-center gap-8 sm:gap-12 px-4 sm:px-12 mt-8">
        {/* Each image will now take 48% of the space on large screens */}
        <div className="w-full sm:w-[48%] h-auto ">
          <Image
            src={Sofa}
            width={657}
            height={436}
            className="bg-[#FBEBB5] rounded-xl w-full h-auto"
            alt="Sofa Image"
          />
        </div>
        <div className="w-full sm:w-[48%] h-auto">
          <Image
            src={Sofa}
            width={657}
            height={436}
            className="bg-[#FBEBB5] rounded-xl w-full h-auto"
            alt="Sofa Image"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
