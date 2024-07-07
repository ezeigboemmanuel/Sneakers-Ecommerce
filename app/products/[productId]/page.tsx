"use client";

import Recommendations from "@/components/Recommendations";
import PreImg1 from "@/assets/sneakers/preimg1.png";
import PreImg2 from "@/assets/sneakers/preimg2.png";
import PreImg3 from "@/assets/sneakers/preimg3.png";
import PreImg4 from "@/assets/sneakers/preimg4.png";
import PreImg5 from "@/assets/sneakers/preimg5.png";
import PreImg6 from "@/assets/sneakers/preimg6.png";
import { useState } from "react";
import Image from "next/image";

const page = () => {
  const [activeImage, setActiveImage] = useState(PreImg1);
  const images = [
    {
      image: PreImg1,
    },
    {
      image: PreImg2,
    },
    {
      image: PreImg3,
    },
    {
      image: PreImg4,
    },
    {
      image: PreImg5,
    },
    {
      image: PreImg6,
    },
  ];
  return (
    <div className="px-8">
      <div className="py-8">
        <p className="text-sm font-light">Collections / Men's Shoes</p>
      </div>

      <div>
        <div className="flex space-x-6">
          <div className="min-w-[60px] flex flex-col space-y-4">
            {images.map((image) => (
              <Image
                src={image.image}
                alt="img"
                className="cursor-pointer w-[55px] hover:w-[60px]"
                onClick={() => setActiveImage(image.image)}
              />
            ))}
          </div>
          <div className="">
            <Image src={activeImage} alt="img" className="h-[550px] w-[400px]" />
          </div>
        </div>

        <div></div>
      </div>

      <div>
        <Recommendations />
      </div>
    </div>
  );
};

export default page;
