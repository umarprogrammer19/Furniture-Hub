import React from "react";
import Image from "next/image";
import facebookIcon from "../../../public/assets/facebookIcon.svg";
import linkedInIcon from "../../../public/assets/linkedinIcon.svg";
import twitterIcon from "../../../public/assets/twitterIcon.svg";

const ItemSku = () => {
  return (
    <div className="flex gap-4">
      <div className="item-sku-categories">
        <p className="text-[#9F9F9F] text-base font-normal mb-2">SKU</p>
        <p className="text-[#9F9F9F] text-base font-normal mb-2">Category</p>
        <p className="text-[#9F9F9F] text-base font-normal mb-2">Tags</p>
        <p className="text-[#9F9F9F] text-base font-normal mb-2">Share</p>
      </div>
      <div className="item-two-dot">
        {Array(4).fill(
          <p className="text-[#9F9F9F] text-base font-normal mb-2">:</p>
        )}
      </div>
      <div className="item-sku-data">
        <p className="text-[#9F9F9F] text-base font-normal mb-2">SS001</p>
        <p className="text-[#9F9F9F] text-base font-normal mb-2">Sofas</p>
        <p className="text-[#9F9F9F] text-base font-normal mb-2">
          Sofa, Chair, Home, Shop
        </p>
        <div className="flex gap-4">
          <Image src={facebookIcon} alt="socialIcon" width={20} height={20} className="mb-2" />
          <Image src={linkedInIcon} alt="socialIcon" width={20} height={20} className="mb-2" />
          <Image src={twitterIcon} alt="socialIcon" width={20} height={20} className="mb-2" />
        </div>
      </div>
    </div>
  );
};

export default ItemSku;
