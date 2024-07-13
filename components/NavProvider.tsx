"use client";

import BestSellers from "@/components/BestSellers";
import Hero from "@/components/Hero";
import NewCollections from "@/components/NewCollections";
import { useNav } from "@/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import Close from "@/assets/icons/hamclose.svg";

const NavProvider = () => {
  const nav = useNav();
  return (
    <div className="relative">
      {nav.isOpen && (
        <div className="bg-[#1A1A1A] px-4 py-2 text-white fixed top-0 left-0 w-full h-screen z-10">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={nav.onClose}>
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
            <div className="relative w-full ">
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
            <Link href="/men" onClick={nav.onClose}>
              <p className="font-light text-white/[0.8] hover:font-normal hover:text-white transition-colors duration-500 ease-in-out">
                Men
              </p>
            </Link>

            <Link href="/women" onClick={nav.onClose}>
              <p className="font-light text-white/[0.8] hover:font-normal hover:text-white transition-colors duration-500 ease-in-out">
                Women
              </p>
            </Link>
            <Link href="/kids" onClick={nav.onClose}>
              <p className="font-light text-white/[0.8] hover:font-normal hover:text-white transition-colors duration-500 ease-in-out">
                Kids
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavProvider;
