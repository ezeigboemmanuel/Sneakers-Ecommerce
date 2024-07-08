"use client";

import BestSellers from "@/components/BestSellers";
import Hero from "@/components/Hero";
import NewCollections from "@/components/NewCollections";
import { useNav } from "@/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import Close from "@/assets/icons/hamclose.svg";

const page = () => {
  const nav = useNav();
  return (
    <div className="relative">
      {nav.isOpen && (
        <div className="bg-[#1A1A1A] px-4 py-2 text-white fixed top-0 left-0 w-full h-screen z-10">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src={Logo} alt="logo" className="w-14 h-14" />
            </Link>

            <Image
              src={Close}
              alt="close"
              className="w-[17px] h-[23px] cursor-pointer "
              onClick={nav.onClose}
            />
          </div>
          <div className="mt-10 flex flex-col space-y-2">
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
        </div>
      )}
      <Hero />
      <NewCollections />
      <BestSellers />
    </div>
  );
};

export default page;
