"use client";

import Recommendations from "@/components/Recommendations";
import PreImg1 from "@/assets/sneakers/preimg1.png";
import PreImg2 from "@/assets/sneakers/preimg2.png";
import PreImg3 from "@/assets/sneakers/preimg3.png";
import PreImg4 from "@/assets/sneakers/preimg4.png";
import PreImg5 from "@/assets/sneakers/preimg5.png";
import PreImg6 from "@/assets/sneakers/preimg6.png";
import Minus from "@/assets/icons/minus.svg";
import Add from "@/assets/icons/add.svg";
import Bag from "@/assets/icons/bagfilled.svg";
import Love from "@/assets/icons/darkloveoutline.svg";
import Up from "@/assets/icons/filterup.svg";
import Line from "@/assets/icons/line.svg";
import Image2 from "@/assets/sneakers/image2.png";
import Image3 from "@/assets/sneakers/image3.png";
import Image5 from "@/assets/sneakers/image5.png";
import Stars1 from "@/assets/icons/stars1.svg";
import Stars2 from "@/assets/icons/stars2.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [activeImage, setActiveImage] = useState(PreImg1);
  const [open, setOpen] = useState("description");
  const [quantity, setQuantity] = useState(1);

  const AddFunc = () => {
    setQuantity(quantity + 1);
  };

  const MinusFunc = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
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

  const product = [
    {
      name: "Novaweave Phantom Pulse",
      category: "Men's Shoes",
      colours: [Image2, Image3, Image5],
      price: "100,540",
      sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
      description: `We're passionate about getting your fresh kicks to you fast. That's why we offer a variety of shipping options to choose from at checkout, ensuring you get your new favourites exactly when you need them. \n\nDidn't find your perfect fit? No worries! We understand that sometimes things don't work out as planned. Our hassle-free return policy allows you to return unworn items within 3 days for a full refund or exchange.`,
      shipping: `We strive to deliver your order promptly and efficiently. All orders are processed within 1-2 business days. Standard shipping typically takes 5-7 business days. Expedited and express shipping options are available at checkout for an additional fee.`,
      reviews: [
        {
          stars: Stars1,
          name: "Taiwo",
          date: "8 July, 2024",
          review:
            "These shoes are incredible! So light and breathable, it feels like I'm walking on air",
        },
        {
          stars: Stars2,
          name: "Sarah B",
          date: "8 July, 2024",
          review:
            "Not sure what the 'Phantom Pulse' does exactly, but these sneakers are amazing for running",
        },
      ],
    },
  ];
  return (
    <div className="px-16">
      <div className="py-8">
        <p className="text-sm font-light">Collections / Men's Shoes</p>
      </div>

      <div className="flex mx-auto">
        <div className="flex space-x-6 w-1/2">
          <div className="min-w-[60px] lg-md:min-w-[50px] flex flex-col space-y-4">
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image.image}
                  alt="img"
                  className="cursor-pointer w-[55px] lg-md:w-[45px] lg-md:hover:w-[50px] hover:w-[60px]"
                  onClick={() => setActiveImage(image.image)}
                />
              </div>
            ))}
          </div>
          <div className="">
            <Image
              src={activeImage}
              alt="img"
              className="h-[550px] w-[400px] lg-md:h-[459px] lg-md:w-[350px]"
            />
          </div>
        </div>

        <div className="w-1/2">
          {product.map((item, index) => (
            <div key={index}>
              <h1 className="font-[500] text-3xl mb-1">{item.name}</h1>
              <p className="font-light text-sm mb-3">{item.category}</p>
              <p className="font-[500] mb-3">₦ {item.price}</p>

              <div className="flex mb-3 items-center">
                <p className="font-light mr-2">Colours: </p>
                <div className="flex space-x-1">
                  {item.colours.map((colour, index) => (
                    <div key={index}>
                      <Image src={colour} alt="colour" className="w-6 h-6" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex mb-3">
                <p className="font-light mr-2">Size: </p>
                <div className="flex space-x-2">
                  {item.sizes.map((size, index) => (
                    <p
                      key={index}
                      className="font-light text-sm border border-[#C0C0C0] flex justify-center items-center w-7 h-7 rounded-[4px] cursor-pointer hover:bg-black hover:text-white transition-colors duration-500 ease-in-out"
                    >
                      {size}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex mb-4">
                <p className="font-light mr-2">Quantity: </p>
                <div className="flex space-x-2">
                  <Image
                    src={Minus}
                    onClick={MinusFunc}
                    alt="minus"
                    className="cursor-pointer"
                  />
                  <p>{quantity}</p>
                  <Image
                    src={Add}
                    onClick={AddFunc}
                    alt="add"
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <Link href="/cart">
                <div className="flex items-center space-x-4 mt-3 mb-8">
                  <div className="flex flex-1 space-x-2 justify-center items-center py-3 rounded-[100px] bg-[#141414] text-white cursor-pointer">
                    <Image src={Bag} alt="bag" className="h-4 w-4" />
                    <p className="font-light text-sm">Add to Bag</p>
                  </div>

                  <Image
                    src={Love}
                    alt="love"
                    className="h-5 w-5 cursor-pointer"
                  />
                </div>
              </Link>

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => setOpen("description")}
                >
                  <p className="font-[500] text-[17px]">Description</p>
                  <Image src={Up} alt="up" className="h-[14px] w-[14px]" />
                </div>
                {open === "description" && (
                  <div className="mb-4">
                    <p className="font-normal">{item.description}</p>
                  </div>
                )}
              </div>

              <Image src={Line} alt="line" />

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer mt-4 mb-3"
                  onClick={() => setOpen("shipping")}
                >
                  <p className="font-[500] text-[17px]">Shipping & Returns</p>
                  <Image src={Up} alt="up" className="h-[14px] w-[14px]" />
                </div>
                {open === "shipping" && (
                  <div className="mb-4">
                    <p className="font-normal">{item.shipping}</p>
                  </div>
                )}
              </div>

              <Image src={Line} alt="line" />

              <div>
                <div
                  className="flex justify-between items-center cursor-pointer mt-4 mb-3"
                  onClick={() => setOpen("reviews")}
                >
                  <p className="font-[500] text-[17px]">Reviews (32)</p>
                  <Image src={Up} alt="up" className="h-[14px] w-[14px]" />
                </div>
                {open === "reviews" && (
                  <div className="mb-4">
                    {item.reviews.map((review, index) => (
                      <div key={index}>
                        <div className="flex space-x-3 items-center mb-1">
                          <Image src={review.stars} alt="stars" />
                          <p className="text-[#141414]/[0.8] text-sm">{review.name} - {review.date}</p>
                        </div>
                        <p className="mb-2 text-[#141414] text-sm">{review.review}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Image src={Line} alt="line" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Recommendations />
      </div>
    </div>
  );
};

export default page;
