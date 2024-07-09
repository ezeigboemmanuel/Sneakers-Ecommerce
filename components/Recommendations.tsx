"use client";

import Image4 from "@/assets/sneakers/image4.png";
import Image2 from "@/assets/sneakers/image2.png";
import Image3 from "@/assets/sneakers/image3.png";
import Image5 from "@/assets/sneakers/image5.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ArrowBack from "@/assets/icons/arrowback.svg";
import ArrowForward from "@/assets/icons/arrowforward.svg";
import "@/styles/bestsellers.css";

const Recommendations = () => {
  const collections = [
    {
      id: "1",
      image: Image2,
      name: "Novaweave Phantom Pulse",
      category: "Men's Shoes",
      noOfColours: 3,
      price: "100,540",
    },
    {
      id: "2",
      image: Image4,
      name: "Zephyr Swiftstrike Pro",
      category: "Men's Shoes",
      noOfColours: 1,
      price: "140,540",
    },
    {
      id: "3",
      image: Image3,
      name: "Atlas Ascent GTX",
      category: "Women's Shoes",
      noOfColours: 4,
      price: "260,000",
    },
    {
      id: "4",
      image: Image5,
      name: "Zephyr Swiftstrike Pro",
      category: "Men's Shoes",
      noOfColours: 1,
      price: "140,540",
    },
    {
      id: "5",
      image: Image3,
      name: "Atlas Ascent GTX",
      category: "Women's Shoes",
      noOfColours: 4,
      price: "260,000",
    },
    {
      id: "6",
      image: Image5,
      name: "Zephyr Swiftstrike Pro",
      category: "Men's Shoes",
      noOfColours: 1,
      price: "140,540",
    },

    {
      id: "7",
      image: Image2,
      name: "Novaweave Phantom",
      category: "Men's Shoes",
      noOfColours: 3,
      price: "100,540",
    },
  ];
  return (
    <div className="pt-8 md:pt-16 mb-16">
      <div className="flex justify-between items-center">
        <h1 className="text-[#2E2E2E] uppercase w-full text-center md:text-left text-[24px] md:text-[30px] font-[500] mb-4 md:mb-8">
          you might also like
        </h1>
        <div className="slider-controler slider-controler2 !space-x-12 !mr-8 !hidden md:!flex">
          <div className="swiper-button-prev swiper-button-prev2 slider-arrow slider-arrow2">
            <Image src={ArrowBack} alt="arrow-back" />
          </div>
          <div className="swiper-button-next swiper-button-next2 slider-arrow slider-arrow2">
            <Image src={ArrowForward} alt="arrow-forward" />
          </div>
          <div className="swiper-pagination swiper-pagination2"></div>
        </div>
      </div>

      <Swiper
        pagination={true}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        className="mySwiper md:!hidden max-w-[1240px]"
      >
        {collections.map((collection, index) => (
          <SwiperSlide key={index} className="max-w-[270px] pb-5">
            <div className="max-w-80">
              <Link
                href="/products/productdetails"
                key={index}
                className="max-w-80 cursor-pointer"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  className="rounded-lg hover:w-64 w-full"
                />
                <div className="">
                  <p className="text-[17px] text-[#141414] font-[500]">
                    {collection.name}
                  </p>
                  <p className="text-[14px] text-[#141414]/[0.8]">
                    {collection.category}
                  </p>
                  <p className="text-[14px] text-[#141414]/[0.8]">
                    {collection.noOfColours > 1
                      ? `${collection.noOfColours} Colours`
                      : `${collection.noOfColours} Colour`}
                  </p>
                  <p className="font-[500] text-[15px] text-[#141414]">
                    ₦ {collection.price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        navigation={{
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        }}
        slidesPerView={"auto"}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper !hidden md:!inline-block max-w-[1240px]"
      >
        {collections.map((collection, index) => (
          <SwiperSlide key={index} className="max-w-[270px]">
            <div className="max-w-80">
              <Link
                href="/products/productdetails"
                key={index}
                className="max-w-80 cursor-pointer"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  className="rounded-2xl hover:w-64 w-full"
                />
                <div className="">
                  <p className="text-[17px] text-[#141414] font-[500]">
                    {collection.name}
                  </p>
                  <p className="text-[14px] text-[#141414]/[0.8]">
                    {collection.category}
                  </p>
                  <p className="text-[14px] text-[#141414]/[0.8]">
                    {collection.noOfColours > 1
                      ? `${collection.noOfColours} Colours`
                      : `${collection.noOfColours} Colour`}
                  </p>
                  <p className="font-[500] text-[15px] text-[#141414]">
                    ₦ {collection.price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommendations;
