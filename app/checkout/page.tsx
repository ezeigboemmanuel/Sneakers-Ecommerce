"use client"

import Up from "@/assets/icons/filterup.svg";
import Line from "@/assets/icons/line.svg";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/hooks/useCart";

const page = () => {
  const cart = useCartStore();
  const numArr = cart.cart.map((item) => item.current_price * item.quantity);
  const subtotal = numArr.reduce((acc, curr) => acc + curr, 0);
  const total = subtotal + 60000;

  const totalQuantity = cart.cart.map((item) => item.quantity).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="px-4 py-2 lg:px-16 md:py-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-[100%] md:w-[65%] md:mr-5">
          <h1 className="text-2xl md:text-3xl font-[500] uppercase mb-4 md:mb-8">
            Check out
          </h1>

          <div className="">
            <div className="flex justify-between items-center cursor-pointer mb-3">
              <h1 className="font-[500] text-[18px] md:text-[22px] uppercase">
                1. Contact information
              </h1>
              <Image src={Up} alt="up" className="h-[14px] w-[14px]" />
            </div>

            <div className="mb-5 md:mb-10">
              <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 w-full mb-3 md:mb-6">
                <div className="w-full">
                  <p className="text-sm font-[400] text-[#2E2E2E] mb-1">
                    First Name
                  </p>
                  <input
                    className="h-[36px] border-[1px] border-[#4F4F4F] focus:border-black/[0.85] text-sm rounded-[8px] w-full py-2 px-3 text-[#2E2E2E]/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    type="text"
                    placeholder="Williams"
                  />
                </div>
                <div className="w-full">
                  <p className="text-sm font-[400] text-[#2E2E2E] mb-1">
                    Last Name
                  </p>
                  <input
                    className="h-[36px] border-[1px] border-[#4F4F4F] focus:border-black/[0.85] text-sm rounded-[8px] w-full py-2 px-3 text-[#2E2E2E]/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    type="text"
                    placeholder="Jones"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 w-full">
                <div className="w-full">
                  <p className="text-sm font-[400] text-[#2E2E2E] mb-1">
                    Email address
                  </p>
                  <input
                    className="h-[36px] border-[1px] border-[#4F4F4F] focus:border-black/[0.85] text-sm rounded-[8px] w-full py-2 px-3 text-[#2E2E2E]/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    type="email"
                    placeholder="williamjones@gmail.com"
                  />
                </div>
                <div className="w-full">
                  <p className="text-sm font-[400] text-[#2E2E2E] mb-1">
                    Phone Number
                  </p>
                  <input
                    className="h-[36px] border-[1px] border-[#4F4F4F] focus:border-black/[0.85] text-sm rounded-[8px] w-full py-2 px-3 text-[#2E2E2E]/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    type="number"
                    placeholder="090373388838"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center cursor-pointer mb-3">
            <h1 className="font-[500] text-[18px] md:text-[22px] uppercase">
              2. Address
            </h1>
            <Image src={Up} alt="up" className="h-[14px] w-[14px]" />
          </div>

          <div className="mb-5 md:mb-10">
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 w-full mb-3 md:mb-6">
              <div className="w-full">
                <p className="text-sm font-[400] text-[#2E2E2E] mb-1">
                  Address
                </p>
                <input
                  className="h-[36px] border-[1px] border-[#4F4F4F] focus:border-black/[0.85] text-sm rounded-[8px] w-full py-2 px-3 text-[#2E2E2E]/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  type="text"
                  placeholder="2464 Royal Ln. Mesa, New Jersey 45463"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 w-full">
              <div className="w-full">
                <p className="text-sm font-[400] text-[#2E2E2E] mb-1">City</p>
                <input
                  className="h-[36px] border-[1px] border-[#4F4F4F] focus:border-black/[0.85] text-sm rounded-[8px] w-full py-2 px-3 text-[#2E2E2E]/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  type="text"
                  placeholder="Lagos"
                />
              </div>
              <div className="w-full">
                <p className="text-sm font-[400] text-[#2E2E2E] mb-1">
                  Phone Number
                </p>
                <input
                  className="h-[36px] border-[1px] border-[#4F4F4F] focus:border-black/[0.85] text-sm rounded-[8px] w-full py-2 px-3 text-[#2E2E2E]/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  type="number"
                  placeholder="08128222228888"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center cursor-pointer mb-5 md:mb-10">
            <h1 className="font-[500] text-[18px] md:text-[22px] uppercase">
              3. Payment
            </h1>
            <Image src={Up} alt="up" className="h-[14px] w-[14px]" />
          </div>

          <Link href="/paid">
            <div className="flex w-full justify-center items-center mb-10">
              <div className="flex flex-1 space-x-2 max-w-[500px] justify-center items-center py-3 rounded-[100px] bg-[#141414] text-white cursor-pointerhover:font-[400]">
                <p className="font-light text-sm hover:font-[400]">Pay Now</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden md:inline-block bg-[#F8F8F8] border border-[#C0C0C0] rounded-[16px] px-6 pt-6 pb-10 w-[35%] h-full]">
          <h1 className="font-[500] uppercase text-2xl mb-5">Summary</h1>
          <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
            <p className="text-[15px]">Sub total</p>
            <p className="font-[500] text-[15px]">₦ {subtotal}</p>
          </div>
          <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
            <p className="text-[15px]">Estimated Delivery</p>
            <p className="font-[500] text-[15px]">₦ {subtotal === 0 ? 0 : "60000"}</p>
          </div>
          <Image src={Line} alt="line" />
          <div>
            <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
              <p className="font-[500] text-[15px]">Total</p>
              <p className="font-[500] text-[15px]">₦ {subtotal === 0 ? 0 : total}</p>
            </div>
          </div>
          <Image src={Line} alt="line" className="mb-10" />

          <div className="flex space-y-2 flex-col">
            <h1 className="font-[500] uppercase text-2xl">Shipping</h1>
            <p className="font-light text-sm">
              {totalQuantity} items to be shipped within{" "}
              <span className="font-semibold">July 24th - August 1st</span>
            </p>
            {cart.cart.map((item, index) => (
              <div key={index}>
                <div className="flex space-x-4">
                  <Image
                    src={`https://api.timbu.cloud/images/${item.photos[2].url}`}
                    alt="image"
                    className="h-[80px] w-[90px] rounded-lg"
                    width={100}
                    height={100}
                  />
                  <div className="flex justify-between w-full">
                    <div>
                      <h1 className="font-[500] text-sm text-[#141414] mb-1">
                        {item.name}
                      </h1>
                      <p className="font-light text-xs mb-1">₦ {item.current_price}</p>

                      <div className="flex items-center space-x-10">
                        <div className="flex space-x-2 items-center">
                          <p className="font-light text-xs">Size: {cart.size}</p>
                        </div>

                        <div className="flex space-x-2 items-center">
                          <p className="font-light text-xs">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
