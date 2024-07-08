import Image from "next/image";
import HeroImg from "@/assets/sneakers/heroimg.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#1A1A1A] text-white px-4 md:px-8 h-[60vh] lg-md:h-[90vh] md:h-[60vh] lg:h-[90vh] flex  items-center">
      <div className="">
        <h1 className="text-[26px] md:text-[40px] lg-md:text-[54px] lg:text-[60px] uppercase font-medium max-w-[200px] md:max-w-[450px] lg:max-w-[550px]">
          Crafted for Champions. made for you!!!
        </h1>

        <Link href="/products">
          <button className="border border-white rounded-full text-sm md:text-base font-light w-[120px] h-[35px] md:w-[180px] md:h-[43px] mt-8 bg-transparent hover:bg-white/[0.8] hover:text-black transition-colors duration-500 ease-in-out">
            Our Collections
          </button>
        </Link>
      </div>
      <div className="absolute -right-12 lg:right-0 ">
        <Image src={HeroImg} alt="hero_img" className="w-[300px] md:w-[540px] -rotate-12 md:rotate-0" />
      </div>
    </div>
  );
};

export default Hero;
