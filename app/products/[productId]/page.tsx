"use client";

import Recommendations from "@/components/Recommendations";
import Stars1 from "@/assets/icons/stars1.svg";
import Stars2 from "@/assets/icons/stars2.svg";
import Minus from "@/assets/icons/minus.svg";
import Add from "@/assets/icons/add.svg";
import Bag from "@/assets/icons/bagfilled.svg";
import Love from "@/assets/icons/darkloveoutline.svg";
import Up from "@/assets/icons/filterup.svg";
import Line from "@/assets/icons/line.svg";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/hooks/useCart";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import { products } from "@/lib/data";

const page = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();
  const [collection, setCollection] = useState(
    products.filter((product) => product.id === params.productId)
  );

  const [activeImage, setActiveImage] = useState<StaticImageData>(
    collection[0].images.map((image) => image.imageUrl)[0]
  );
  const [activeSize, setActiveSize] = useState("40");

  const addToCart = useCartStore((state) => state.addToCart);
  const setSize = useCartStore((state) => state.setSize);
  const quantity = useCartStore();

  const [open, setOpen] = useState("description");

  const handleAddToCart = () => {
    try {
      if (collection !== null) {
        addToCart(collection);
      }
      quantity.setQuantity(1);
      toast.success(`${quantity.quantity} ${collection[0].name} added to bag.`);
      router.push("/cart");
    } catch (error) {
      console.log("Adding to cart error", error);
    }
  };

  const sizes = [
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
  ];

  const handleSize = (size: string) => {
    setActiveSize(size);
    setSize(size);
  };
  const reviews = [
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
  ];

  return (
    <div className="px-4 md:px-6 lg-md:px-16 lg:px-16">
      <div className="py-2 md:py-8">
        <p className="text-sm font-light hidden md:inline-block">
          Collections / {collection[0].category}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:space-x-6 md:w-1/2 md:mr-4">
          <div className="w-full md:w-[40px] justify-around md:justify-normal md:min-w-[40px] lg-md:min-w-[50px] lg:min-w-[60px] flex items-center space-x-1 md:space-x-0 md:space-y-2 md:flex-col mt-3 mb-2 md:mb-0 md:mt-0">
            {collection[0].images.slice(0, 6).map((photo, index) => (
              <div key={index} className="">
                <Image
                  src={photo.imageUrl}
                  alt="img"
                  className="cursor-pointer h-14 md:h- md:w-[45px] md:hover:w-[50px] lg:w-[55px] lg-md:w-[45px] lg-md:hover:w-[50px] lg:hover:w-[60px] lg:h-[83px] rounded-md"
                  onClick={() => setActiveImage(photo.imageUrl)}
                  width={5000}
                  height={5000}
                />
              </div>
            ))}
          </div>
          <div className="">
            {collection ? (
              <Image
                src={activeImage || ""}
                alt="img"
                className="w-full max-w-[400px] md:max-w-full mx-auto h-[430px] md:h-[420px] lg:h-[540px] md:w-[400px] lg-md:h-[459px] lg-md:w-[350px] rounded-xl"
                width={5000}
                height={5000}
              />
            ) : (
              <Skeleton className="w-full h-[400px] rounded-lg" />
            )}
          </div>
        </div>

        <div className="md:w-1/2">
          <div>
            <h1 className="font-[500] text-3xl mb-1">{collection[0].name}</h1>
            <p className="font-light text-sm mb-3">{collection[0].category}</p>
            <p className="font-[500] mb-3">₦ {collection[0].price}</p>

            <div className="flex mb-3 items-center space-x-6">
              <p className="font-light mr-2">Colours: </p>
              <div className="flex space-x-1">
                {collection[0].images.slice(0, 3).map((photo, index) => (
                  <div key={index}>
                    <Image
                      src={photo.imageUrl}
                      alt="colour"
                      className="w-6 h-6"
                      width={5000}
                      height={5000}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex mb-3 space-x-12">
              <p className="font-light mr-2">Size: </p>
              <div className="flex flex-wrap items-center justify-start">
                {sizes.map((size, index) => (
                  <p
                    key={index}
                    onClick={() => handleSize(size)}
                    className={
                      activeSize === size
                        ? "bg-black text-white font-light text-sm border border-[#C0C0C0] hover:border-black flex justify-center items-center w-7 h-7 rounded-[4px] cursor-pointer  transition-colors duration-500 ease-in-out mr-2 mb-1"
                        : "font-light text-sm border border-[#C0C0C0] hover:border-black flex justify-center items-center w-7 h-7 rounded-[4px] cursor-pointer  transition-colors duration-500 ease-in-out mr-2 mb-1"
                    }
                  >
                    {size}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex mb-4 space-x-5">
              <p className="font-light mr-2">Quantity: </p>
              <div className="flex space-x-2">
                <Image
                  src={Minus}
                  onClick={quantity.minusQuantity}
                  alt="minus"
                  className="cursor-pointer"
                />
                <p>{quantity.quantity}</p>
                <Image
                  src={Add}
                  onClick={quantity.addQuantity}
                  alt="add"
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div
              className="flex items-center space-x-4 mt-3 mb-8 cursor-pointer"
              onClick={handleAddToCart}
            >
              <div className="flex flex-1 space-x-2 justify-center items-center py-3 rounded-[100px] bg-[#141414] text-white cursor-pointer">
                <Image src={Bag} alt="bag" className="h-4 w-4" />
                <p className="font-light text-sm">Add to Bag</p>
              </div>

              <Image
                src={Love}
                alt="love"
                className="h-5 w-5 cursor-pointer"
                width={5000}
                height={5000}
              />
            </div>

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
                  <p className="font-normal">{collection[0].description}</p>
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
                  <p className="font-normal">
                    We strive to deliver your order promptly and efficiently.
                    All orders are processed within 1-2 business days. Standard
                    shipping typically takes 5-7 business days. Expedited and
                    express shipping options are available at checkout for an
                    additional fee.
                  </p>
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
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <div className="flex space-x-3 items-center mb-1">
                        <Image src={review.stars} alt="stars" />
                        <p className="text-[#141414]/[0.8] text-sm">
                          {review.name} - {review.date}
                        </p>
                      </div>
                      <p className="mb-2 text-[#141414] text-sm">
                        {review.review}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Image src={Line} alt="line" />
          </div>
        </div>
      </div>

      <div>
        <Recommendations />
      </div>
    </div>
  );
};

export default page;
