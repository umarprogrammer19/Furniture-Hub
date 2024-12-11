import React from "react";
import Image from "next/image";
import arrow from "../../public/assets/arrowImage.svg";
import MySvg from "../../public/assets/companyLogo.svg";

const HeroBanner = ({ title }) => {
  return (
    <div className="w-full h-[400px] bg-[url('../../public/assets/bannerImage.png')] bg-cover bg-center bg-white text-center flex items-center mb-12">
      <div className="w-full flex flex-col items-center">
        <Image src={MySvg} alt="company logo" height={100} width={100} />
        <h1 className=" text-black text-5xl font-medium">{title}</h1>
        <div className="flex justify-center items-center">
          <p className="text-black text-2xl font-medium mr-4 mb-1"> Home </p>
          <Image src={arrow} alt="company logo" height={20} width={20} />
          <p className="text-black text-2xl m-3 font-light">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
