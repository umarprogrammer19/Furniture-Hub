"use client"
import React, { useState } from "react";
import Link from "next/link";
import { IoMdPerson, IoMdSearch, IoMdHeartEmpty, IoMdCart } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ bgColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility on small screens
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`flex items-center justify-between absolute bg-${bgColor} text-white w-full px-12 p-8 z-30`}>
      {/* Logo and Navigation Links for Larger Screens */}
      <div className="hidden lg:flex gap-14 w-full justify-center">
        <a className="text-[black] text-base not-italic font-medium leading-[normal] no-underline" href="/">
          Home
        </a>
        <a className="text-[black] text-base not-italic font-medium leading-[normal] no-underline" href="/shop">
          Shop
        </a>
        <a className="text-[black] text-base not-italic font-medium leading-[normal] no-underline" href="/blog">
          Blog
        </a>
        <a className="text-[black] text-base not-italic font-medium leading-[normal] no-underline" href="/contact">
          Contact
        </a>
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="lg:hidden flex items-center">
        <IoMdMenu
          className="text-2xl text-black cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Navigation and Icons for Small Screens */}
      <div className="lg:hidden absolute top-0 left-0 w-full bg-white z-20 flex flex-col items-center mt-16" style={{ display: menuOpen ? "flex" : "none" }}>
        <a className="text-black text-base font-medium py-2" href="/">
          Home
        </a>
        <a className="text-black text-base font-medium py-2" href="/shop">
          Shop
        </a>
        <a className="text-black text-base font-medium py-2" href="/blog">
          Blog
        </a>
        <a className="text-black text-base font-medium py-2" href="/contact">
          Contact
        </a>
      </div>

      {/* Icons (Profile, Search, Heart, Cart) */}
      <div className="flex gap-8 absolute right-12">
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
