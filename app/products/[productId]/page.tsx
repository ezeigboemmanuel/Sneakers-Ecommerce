"use client";

import Recommendations from "@/components/Recommendations";
import PreImg1 from "@/assets/sneakers/preimg1.png";
import Minus from "@/assets/icons/minus.svg";
import Add from "@/assets/icons/add.svg";
import Bag from "@/assets/icons/bagfilled.svg";
import Love from "@/assets/icons/darkloveoutline.svg";
import Up from "@/assets/icons/filterup.svg";
import Line from "@/assets/icons/line.svg";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { useRouter } from "next/navigation";

const page = ({ params }: { params: { productId: string } }) => {
  const router = useRouter()
  const product = products.find((product) => product.id === params.productId);
  console.log("PPPP", product);

  if(!product){
    router.push("/products")
  }

  const [activeImage, setActiveImage] = useState<StaticImageData | "">(
    product?.images[0].imageUrl || ""
  );
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

  return (
    <div className="px-4 md:px-6 lg-md:px-16 lg:px-16">
      <div className="py-2 md:py-8">
        <p className="text-sm font-light hidden md:inline-block">
          Collections / Men's Shoes
        </p>
      </div>

      <div className="flex flex-col md:flex-row mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:space-x-6 md:w-1/2 md:mr-4">
          <div className="w-full md:w-[40px] justify-around md:justify-normal md:min-w-[40px] lg-md:min-w-[50px] lg:min-w-[60px] flex items-center space-x-1 md:space-x-0 md:space-y-2 md:flex-col mt-3 mb-2 md:mb-0 md:mt-0">
            {product?.images.map((image, index) => (
              <div key={index} className="">
                <Image
                  src={image.imageUrl}
                  alt="img"
                  className="cursor-pointer h-14 md:h-full md:w-[45px] md:hover:w-[50px] lg:w-[55px] lg-md:w-[45px] lg-md:hover:w-[50px] lg:hover:w-[60px] rounded-xl"
                  onClick={() => setActiveImage(image.imageUrl)}
                />
              </div>
            ))}
          </div>
          <div className="">
            <Image
              src={activeImage}
              alt="img"
              className="w-full max-w-[400px] md:max-w-full mx-auto h-[430px] md:h-[420px] lg:h-[550px] md:w-[400px] lg-md:h-[459px] lg-md:w-[350px] rounded-xl"
            />
          </div>
        </div>

        <div className="md:w-1/2">
            <div>
              <h1 className="font-[500] text-3xl mb-1">{product?.name}</h1>
              <p className="font-light text-sm mb-3">{product?.category}</p>
              <p className="font-[500] mb-3">₦ {product?.price}</p>

              <div className="flex mb-3 items-center space-x-6">
                <p className="font-light mr-2">Colours: </p>
                <div className="flex space-x-1">
                  {product?.colours.map((colour, index) => (
                    <div key={index}>
                      <Image src={colour} alt="colour" className="w-6 h-6" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex mb-3 space-x-12">
                <p className="font-light mr-2">Size: </p>
                <div className="flex flex-wrap items-center justify-start">
                  {product?.sizes.map((size, index) => (
                    <p
                      key={index}
                      className="font-light text-sm border border-[#C0C0C0] flex justify-center items-center w-7 h-7 rounded-[4px] cursor-pointer hover:bg-black hover:text-white transition-colors duration-500 ease-in-out mr-2 mb-1"
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
                    <p className="font-normal">{product?.description}</p>
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
                    <p className="font-normal">{product?.shipping}</p>
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
                    {product?.reviews.map((review, index) => (
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
