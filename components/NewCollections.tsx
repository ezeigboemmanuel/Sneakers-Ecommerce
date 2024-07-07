"use client";

import Image4 from "@/assets/sneakers/image4.png";
import Image2 from "@/assets/sneakers/image2.png";
import Image3 from "@/assets/sneakers/image3.png";
import Image5 from "@/assets/sneakers/image5.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ArrowBack from "@/assets/icons/arrowback.svg";
import ArrowForward from "@/assets/icons/arrowforward.svg";

const NewCollections = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const collections = [
    {
      image: Image2,
      name: "Novaweave Phantom",
      category: "Men's Shoes",
      noOfColours: 3,
      price: "100,540",
    },
    {
      image: Image4,
      name: "Zephyr Swiftstrike Pro",
      category: "Men's Shoes",
      noOfColours: 1,
      price: "140,540",
    },
    {
      image: Image3,
      name: "Atlas Ascent GTX",
      category: "Women's Shoes",
      noOfColours: 4,
      price: "260,000",
    },
    {
      image: Image5,
      name: "Zephyr Swiftstrike Pro",
      category: "Men's Shoes",
      noOfColours: 1,
      price: "140,540",
    },
  ];
  return (
    <div className="pt-14 px-8">
      <h1 className="text-[#2E2E2E] uppercase text-center text-[30px] font-[500] mb-8">
        NEW COLLECTIONS
      </h1>

      <div className="flex justify-between items-center">
        <div className="slider-controler max-w-[20px] mx-auto">
          <div className="swiper-button-prev slider-arrow">
            <Image src={ArrowBack} alt="arrow-back" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[Navigation]}
          className="mySwiper max-w-[788px] max-h-[420px] min-h-[420px] w-[100%]"
        >
          {collections.map((collection, index) => (
            <SwiperSlide
              className={`transition-all duration-500 ease-out max-h-[400px] cursor-pointer min-h-[400px] ${
                activeIndex === index ? "max-w-80 pb-5" : "max-w-52 "
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(1)}
            >
              <div
                className={`transition-all duration-500 ease-out cursor-pointer ${
                  activeIndex === index ? "max-w-80" : "max-w-52"
                }`}
              >
                <Link href="/" key={index}>
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    className={`rounded-2xl w-full  ${
                      activeIndex === index ? "" : "brightness-75 h-60"
                    }`}
                  />
                  <div
                    className={` ${activeIndex === index ? "" : "opacity-50"}`}
                  >
                    <p
                      className={`font-[500] ${
                        activeIndex === index
                          ? "text-[20px] text-[#141414]"
                          : "text-[17px] text-[#141414]/[0.5]"
                      }`}
                    >
                      {collection.name}
                    </p>
                    <p
                      className={`text-sm ${
                        activeIndex === index
                          ? "text-base text-[#141414]/[0.8]"
                          : "text-[#141414]/[0.3]"
                      }`}
                    >
                      {collection.category}
                    </p>
                    <p
                      className={`text-sm ${
                        activeIndex === index
                          ? "text-base text-[#141414]/[0.8]"
                          : "text-[#141414]/[0.3]"
                      }`}
                    >
                      {collection.noOfColours > 1
                        ? `${collection.noOfColours} Colours`
                        : `${collection.noOfColours} Colour`}
                    </p>
                    <p
                      className={`font-[500] ${
                        activeIndex === index
                          ? "text-base text-[#141414]"
                          : "text-[15px] text-[#141414]/[0.5]"
                      }`}
                    >
                      ₦ {collection.price}
                    </p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-controler max-w-[20px] mx-auto">
          <div className="swiper-button-next slider-arrow">
            <Image src={ArrowForward} alt="arrow-forward" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
