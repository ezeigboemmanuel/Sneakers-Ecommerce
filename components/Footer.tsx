import Twitter from "@/assets/icons/twitter.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Tiktok from "@/assets/icons/tiktok.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] px-4 md:px-8 py-10 text-white flex flex-col md:flex-row justify-between md:items-center h-full">
      <div className="mb-5 md:mb-0  md:mr-5">
        <h1 className="uppercase text-[15px] md:text-base mb-2 md:mb-5">
          be the first to know about new products
        </h1>
        <div className="flex">
          <input
            className="h-[36px] pr-10 border-[1px] border-white/[0.7] focus:border-white text-sm rounded-[8px] w-full py-2 px-3 text-white/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            id="links"
            type="text"
            placeholder="Your email address"
          />

          <div className="flex items-center -ml-[35px]">
            <svg
              className="w-[35px] h-[36px] text-white/[0.7] rounded-r-[8px] cursor-pointer"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" fill="white" />
              <path
                d="M13.133 26.02C12.8623 26.1287 12.6057 26.1067 12.363 25.954C12.1203 25.8013 11.9993 25.5793 12 25.288V21.346L17.846 20L12 18.654V14.712C12 14.42 12.1213 14.198 12.364 14.046C12.6067 13.894 12.8633 13.8717 13.134 13.979L25.646 19.248C25.9727 19.398 26.136 19.65 26.136 20.004C26.136 20.3573 25.9727 20.6067 25.646 20.752L13.133 26.02Z"
                fill="#1E1E1E"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg-md:space-x-16 lg:space-x-16">
        <div>
          <h1 className="uppercase font-[500] mb-1 md:mb-4">Explore</h1>
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
            New Collections
          </p>
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
            Best Sellers
          </p>
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
            Our Collections
          </p>
        </div>
        <div>
          <h1 className="uppercase font-[500] mb-1 md:mb-4">Contact us</h1>
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
            +234 8123456789
          </p>
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
            +234 8123456789
          </p>
          <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
            sneakers@gmail.com
          </p>
        </div>
        <div className="">
          <h1 className="uppercase font-[500] mb-1 md:mb-4">Social</h1>
          <div className="flex space-x-1 justify-start items-center">
            <Image src={Twitter} alt="twitter" />
            <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
              Twitter
            </p>
          </div>
          <div className="flex space-x-1 justify-start items-center">
            <Image src={Instagram} alt="instagram" />
            <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
              Instagram
            </p>
          </div>
          <div className="flex space-x-1 justify-start items-center">
            <Image src={Tiktok} alt="tiktok" />
            <p className="font-light hover:font-normal hover:text-white transition-colors duration-500 ease-in-out cursor-pointer text-white/[0.8] md:mb-1">
              Tiktok
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
