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
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ArrowBack from "@/assets/icons/arrowback.svg";
import ArrowForward from "@/assets/icons/arrowforward.svg";
import "@/styles/collections.css";

const NewCollections = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const collections = [
    {
      image: Image2,
      name: "Novaweave Phantom Pulse",
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
    <div className="pt-7 md:pt-14 px-4 md:px-8">
      <h1 className="text-[#2E2E2E] uppercase text-center text-[24px] md:text-[30px] font-[500] mb-4 md:mb-8">
        NEW COLLECTIONS
      </h1>

      <div className="flex justify-between items-center">
        <Swiper
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper md:!hidden"
        >
          {collections.map((collection, index) => (
            <SwiperSlide className={`cursor-pointer pb-5 mr-2 text-center`} key={index}>
              <div className={`cursor-pointer`}>
                <Link href="/products/productdetails" key={index}>
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    className={`rounded-2xl w-full`}
                  />
                  <div className={``}>
                    <p className={`font-[500] text-[20px] text-[#141414]`}>
                      {collection.name}
                    </p>
                    <p className={`"text-base text-[#141414]/[0.8]`}>
                      {collection.category}
                    </p>
                    <p className={`"text-base text-[#141414]/[0.8]`}>
                      {collection.noOfColours > 1
                        ? `${collection.noOfColours} Colours`
                        : `${collection.noOfColours} Colour`}
                    </p>
                    <p className={`font-[500] text-base text-[#141414]`}>
                      ₦ {collection.price}
                    </p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-controler !hidden md:!inline-block slider-controler1 swiper1 max-w-[20px] mx-auto">
          <div className="swiper-button-prev swiper-button-prev1 swiperbtn swiperbtn1 slider-arrow slider-arrow1">
            <Image src={ArrowBack} alt="arrow-back" />
          </div>
          <div className="swiper-pagination swiper-pagination1"></div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
          }}
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[Navigation]}
          className="mySwiper swiper-container !hidden md:!inline-block swiper1 md:max-w-[630px] lg-md:max-w-[788px] lg:max-w-[788px] max-h-[420px] min-h-[420px] w-[100%]"
        >
          {collections.map((collection, index) => (
            <SwiperSlide
              className={`h-[400px] cursor-pointer min-h-[400px] ${
                activeIndex === index ? "md:max-w-[247px] lg-md:max-w-80 lg:max-w-80 pb-5" : "md:max-w-[167px] lg-md:max-w-52 lg:max-w-52"
              }`}
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(1)}
            >
              <div
                className={`transition-transform duration-500 ease-out cursor-pointer h-[400px] ${
                  activeIndex === index ? "md:max-w-[247px] lg-md:max-w-80 lg:max-w-80 pb-5" : "md:max-w-[167px] lg-md:max-w-52 lg:max-w-52"
                }`}
              >
                <Link href="/products/productdetails" key={index}>
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    className={`rounded-2xl w-full  ${
                      activeIndex === index ? "" : "brightness-75 md:h-52 lg-md:h-60 lg:h-60"
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
        <div className="slider-controler !hidden md:!inline-block slider-controler1 swiper1 max-w-[20px] mx-auto">
          <div className="swiper-button-next swiper-button-next1 swiper-btn swiper-btn1 slider-arrow slider-arrow1">
            <Image src={ArrowForward} alt="arrow-forward" />
          </div>
          <div className="swiper-pagination swiper-pagination1"></div>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
