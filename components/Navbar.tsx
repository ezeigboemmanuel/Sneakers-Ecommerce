"use client";

import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import Link from "next/link";
import { useState } from "react";
import BagOutline from "@/assets/icons/bagoutline.svg";
import BagFilled from "@/assets/icons/bagfilled.svg";
import LoveOutline from "@/assets/icons/loveoutline.svg";
import LoveFilled from "@/assets/icons/lovefilled.svg";
import PersonOutline from "@/assets/icons/personoutline.svg";
import PersonFilled from "@/assets/icons/personfilled.svg";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const icons = [
    {
      outline: BagOutline,
      filled: BagFilled,
    },
    {
      outline: LoveOutline,
      filled: LoveFilled,
    },
    {
      outline: PersonOutline,
      filled: PersonFilled,
    },
  ];
  return (
    <div className="bg-[#1A1A1A] text-white/[0.8] flex justify-between items-center px-8 py-3">
      <Link href="/">
        <Image src={Logo} alt="logo" />
      </Link>
      <div className="flex space-x-10 ">
        <Link href="/products">
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out">Men</p>
        </Link>
        <Link href="/products">
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out">Women</p>
        </Link>
        <Link href="/products">
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out">Kids</p>
        </Link>
      </div>
      <div className="flex space-x-8">
        <div className="relative w-[300px] ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-white/[0.7]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            className="h-[36px] relative pl-10 border-[1px] border-white/[0.7] focus:border-white text-sm rounded-[8px] w-full py-2 px-3 text-white/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            id="links"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex space-x-4 justify-center items-center">
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={hoveredIndex === index ? icon.filled : icon.outline}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              alt="icons"
              className="w-[18.67px] h-[24px] cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
