"use client";

import Filter from "@/components/Filter";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
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
    <div className="relative px-4 md:px-8 mb-16">
      <div className="py-4 md:py-8 lg-md:px-0 lg:px-8 max-w-[1150px]">
        <Filter />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-5 md:gap-y-7 max-w-[1150px] mx-auto">
        {collections?.items.map((collection, index) => (
          <div
            key={index}
            className="transition-all duration-500 ease-out max-w-[24rem] w-[98%] mx-auto"
          >
            <Link href={`/products/${collection.id}`} key={index}>
              <Image
                src={`https://api.timbu.cloud/images/${collection.photos[2].url}`}
                alt={collection.name}
                className="rounded-lg md:rounded-2xl h-[200px] md:h-[380px] w-full"
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
        ))}
      </div>

      <div className="w-full flex justify-center items-center mt-6">
        <Link href="/products">
          <button className="border border-black rounded-full font-light w-[180px] h-[43px] mt-8 bg-transparent hover:bg-black/[0.8] hover:text-white transition-colors duration-500 ease-in-out">
            Load more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
