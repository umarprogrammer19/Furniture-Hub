import React from "react";
import Link from "next/link";

import {
  IoMdPerson,
  IoMdSearch,
  IoMdHeartEmpty,
  IoMdCart,
} from "react-icons/io";

const Navbar = ({ bgColor }) => {
  return (
    <nav
      className={`flex items-center absolute bg-${bgColor} text-white relative px-12 p-8 w-full z-30`}
    >
      <div className="w-full justify-center flex gap-14">
        <a
          className="text-[black] text-base not-italic font-medium leading-[normal] no-underline"
          href="/"
        >
          Home
        </a>
        <a
          className="text-[black] text-base not-italic font-medium leading-[normal] no-underline"
          href="/shop"
        >
          Shop
        </a>
        <a
          className="text-[black] text-base not-italic font-medium leading-[normal] no-underline"
          href="/blog"
        >
          Blog
        </a>
        <a
          className="text-[black] text-base not-italic font-medium leading-[normal] no-underline"
          href="/contact"
        >
          Contact
        </a>
      </div>

      <div className="flex gap-8 absolute w-max right-12">
        <Link href={"/profile"}>
          <IoMdPerson className="text-2xl text-[black] ml-[15px]" />
        </Link>
        <IoMdSearch className="text-2xl text-[black] ml-[15px]" />
        <IoMdHeartEmpty className="text-2xl text-[black] ml-[15px]" />
        <Link href={"/cart"}>
          <IoMdCart className="text-2xl text-[black] ml-[15px]" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
