"use client";


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
import { useEffect, useState } from "react";

const Recommendations = () => {
  const [collections, setCollections] = useState<Collections | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCollections(data);
      });
  }, []);
  
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
      {collections?.items.slice(0, 8).map((collection, index) => (
        <SwiperSlide key={index} className="max-w-[270px] pb-5">
          <div className="max-w-80">
            <Link
              href={`/products/${collection.id}`}
              key={index}
              className="max-w-80 cursor-pointer"
            >
              <Image
                src={`https://api.timbu.cloud/images/${collection.photos[0].url}`}
                alt={collection.name}
                className="rounded-lg hover:w-64 w-full"
                width={100}
                height={100}
              />
              <div className="">
                <p className="text-[17px] text-[#141414] font-[500]">
                  {collection.name}
                </p>
                <p className="text-[14px] text-[#141414]/[0.8]">
                  {collection.categories[0].name}
                </p>
                <p className="text-[14px] text-[#141414]/[0.8]">3 Colours</p>
                <p className="font-[500] text-[15px] text-[#141414]">
                  ₦ {collection.current_price[0].NGN[0]}
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
      {collections?.items.map((collection, index) => (
        <SwiperSlide key={index} className="max-w-[270px]">
          <div className="max-w-80">
            <Link
              href={`/products/${collection.id}`}
              key={index}
              className="max-w-80 cursor-pointer"
            >
              <Image
                src={`https://api.timbu.cloud/images/${collection.photos[2].url}`}
                alt={collection.name}
                className="rounded-2xl h-[276px] w-[276px] hover:w-64 hover:h-64"
                width={100}
                height={100}
              />
              <div className="">
                <p className="text-[17px] text-[#141414] font-[500]">
                  {collection.name}
                </p>
                <p className="text-[14px] text-[#141414]/[0.8]">
                  {collection.categories[0].name}
                </p>
                <p className="text-[14px] text-[#141414]/[0.8]">3 Colours</p>
                <p className="font-[500] text-[15px] text-[#141414]">
                  ₦ {collection.current_price[0].NGN[0]}
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
