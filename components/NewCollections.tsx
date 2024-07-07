"use client";

import Image4 from "@/assets/sneakers/image4.png";
import Image2 from "@/assets/sneakers/image2.png";
import Image3 from "@/assets/sneakers/image3.png";
import Image5 from "@/assets/sneakers/image5.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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
      <h1 className="text-[#2E2E2E] text-center text-[30px] font-[500] mb-8">
        NEW COLLECTIONS
      </h1>

      <div className="flex items-end justify-center space-x-5 h-96">
        {collections.map((collection, index) => (
          <Link href="/"
            key={index}
            className={`transition-all duration-500 ease-out ${
              activeIndex === index ? "w-80" : "w-52 cursor-pointer"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(1)}
          >
            <Image
              src={collection.image}
              alt={collection.name}
              className={`rounded-2xl w-full  ${
                activeIndex === index ? "" : "brightness-75 h-60"
              }`}
            />
            <div className={` ${activeIndex === index ? "" : "opacity-50"}`}>
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
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
