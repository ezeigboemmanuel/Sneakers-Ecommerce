import Image from "next/image";
import HeroImg from "@/assets/sneakers/heroimg.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#1A1A1A] text-white px-8 h-[90vh] flex justify-around items-center">
      <div className="">
        <h1 className="uppercase font-medium text-[60px] max-w-[550px]">
          Crafted for Champions. made for you!!!
        </h1>

        <Link href="/products">
          <button className="border border-white rounded-full font-light w-[180px] h-[43px] mt-8 bg-transparent hover:bg-white/[0.8] hover:text-black transition-colors duration-500 ease-in-out">
            Our Collections
          </button>
        </Link>
      </div>
      <div>
        <Image src={HeroImg} alt="hero_img" className="w-[540px]" />
      </div>
    </div>
  );
};

export default Hero;
