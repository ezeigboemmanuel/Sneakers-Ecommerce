"use client";

import Recommendations from "@/components/Recommendations";
import DeleteIcon from "@/assets/icons/delete.svg";
import ColourIcon from "@/assets/icons/colouricon.svg";
import Line from "@/assets/icons/line.svg";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/hooks/useCart";
import Close from "@/assets/icons/close.svg";

const page = () => {
  const cart = useCartStore();
  const numArr = cart.cart.map((item) => item.current_price * item.quantity);
  const subtotal = numArr.reduce((acc, curr) => acc + curr, 0);
  const total = subtotal + 60000;

  return (
    <div className="px-4 py-2 lg:px-16 md:py-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[65%]">
          <div className="flex justify-between md:justify-normal space-x-3 items-center mb-2 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-[500] uppercase">
              Bag {`(${cart.cart.length})`}
            </h1>
            {cart.cart.length > 0 && (
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={cart.clearCart}
              >
                <p className="text-[#2E2E2E]/[0.8]">Clear all</p>
                <Image src={Close} alt="close" />
              </div>
            )}
          </div>

          {cart.cart.map((item, index) => (
            <div key={index}>
              <div className="flex space-x-4">
                <Image
                  src={`https://api.timbu.cloud/images/${item.photos[2].url}`}
                  alt="image"
                  className="w-[165px] h-[160px] md:h-[150px] md:w-[160px] rounded-lg"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col md:flex-row justify-between w-full">
                  <div>
                    <h1 className="font-[500] text-[17px] md:text-[20px] lg:text-[22px] text-[#141414]">
                      {item.name}
                    </h1>
                    <p className="font-light text-xs md:text-sm md:mb-3">
                      {item.categories[0].name}
                    </p>
                    <p className="font-[500] text-sm md:text-base mb-1 md:mb-3 md:hidden">
                      ₦ {item.current_price}
                    </p>

                    <div className="flex space-x-6 md:space-x-3 items-center mb-1 md:mb-3">
                      <p className="font-light text-xs md:text-sm">Colour:</p>
                      <Image
                        src={ColourIcon}
                        alt="colour"
                        className="w-4 h-4 md:w-auto"
                      />
                    </div>

                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-5 lg-md:space-x-10 lg:space-x-10 mb-3 md:mb-0">
                      <div className="flex space-x-10 md:space-x-3 items-center">
                        <p className="font-light text-xs md:text-sm">Size:</p>
                        {/* <select className="font-light text-xs border border-[#C0C0C0] flex justify-center items-center w-10 h-5 md:w-10 md:h-6 rounded-[3px] cursor-pointer">
                          {item.sizes.map((size, index) => (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          ))}
                        </select> */}
                        <p className="font-light text-xs md:text-sm">
                          {cart.size}
                        </p>
                      </div>

                      <div className="flex space-x-4 md:space-x-1 items-center">
                        <p className="font-light text-xs md:text-sm">
                          Quantity:
                        </p>
                        {/* <select className="font-light text-xs border border-[#C0C0C0] flex justify-center items-center w-10 h-5 md:w-10 md:h-6  rounded-[3px] cursor-pointer">
                          {item.quantity.map((number, index) => (
                            <option key={index} value={number}>
                              {number}
                            </option>
                          ))}
                        </select> */}
                        <p className="font-light text-xs md:text-sm">
                          {item.quantity}
                        </p>
                      </div>

                      <Image
                        src={DeleteIcon}
                        alt="delete"
                        onClick={() => cart.removeFromCart(item.id)}
                        className="h-3 w-3 md:h-5 md:w-5 cursor-pointer hidden md:inline-block"
                      />

                      <div
                        className="cursor-pointer"
                        onClick={() => cart.removeFromCart(item.id)}
                      >
                        <Image
                          src={DeleteIcon}
                          alt="delete"
                          className="h-3 w-3 md:h-5 md:w-5 cursor-pointer md:hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:mr-8 hidden md:flex flex-col w-full justify-between h-[120px]">
                    <p className="font-[500] md:text-[15px] flex-1">{`₦ ${item.current_price}`}</p>
                  </div>
                </div>
              </div>
              <Image
                src={Line}
                alt="line"
                className="mt-4 mb-4 md:w-[400px] lg-md:w-[500px] lg:w-[590px]"
              />
            </div>
          ))}
        </div>

        <div className="bg-[#F8F8F8] border border-[#C0C0C0] rounded-[16px] px-6 pt-6 pb-10 w-full md:w-[35%] h-[310px]">
          <h1 className="font-[500] uppercase text-2xl mb-5">Summary</h1>
          <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
            <p className="text-[15px]">Sub total</p>
            <p className="font-[500] text-[15px]">₦ {subtotal}</p>
          </div>
          <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
            <p className="text-[15px]">Estimated Delivery</p>
            <p className="font-[500] text-[15px]">
              ₦ {subtotal === 0 ? 0 : "60000"}
            </p>
          </div>
          <Image src={Line} alt="line" />
          <div>
            <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
              <p className="font-[500] text-[15px]">Total</p>
              <p className="font-[500] text-[15px]">
                ₦ {subtotal === 0 ? 0 : total}
              </p>
            </div>
          </div>
          <Image src={Line} alt="line" className="mb-10" />

          {cart.cart.length > 0 && (
            <Link href="/checkout">
              <div className="flex flex-1 space-x-2 justify-center items-center py-3 rounded-[100px] bg-[#141414] text-white cursor-pointer">
                <p className="font-light text-sm">Proceed to Checkout</p>
              </div>
            </Link>
          )}
        </div>
      </div>

      <div>
        <Recommendations />
      </div>
    </div>
  );
};

export default page;
