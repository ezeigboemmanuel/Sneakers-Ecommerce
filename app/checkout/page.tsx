import Recommendations from "@/components/Recommendations";
import Image2 from "@/assets/sneakers/image2.png";
import Image3 from "@/assets/sneakers/image3.png";
import Up from "@/assets/icons/filterup.svg";
import Line from "@/assets/icons/line.svg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const product = [
    {
      Image: Image2,
      name: "Novaweave Phantom Pulse",
      category: "Men's Shoes",
      colours: [],
      price: "100,540",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      quantity: ["1", "2", "3", "4", "5"],
    },
    {
      Image: Image3,
      name: "Atlas Ascent GTX",
      category: "Women's Shoes",
      colours: [],
      price: "260,000",
      sizes: ["40", "41", "42", "43", "44", "45", "46"],
      quantity: ["1", "2", "3", "4", "5"],
    },
  ];
  return (
    <div className="px-4 py-2 lg:px-16 md:py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[65%] md:mr-5">
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
                    type="text"
                    placeholder="williamjones@gmail.com"
                  />
                </div>
                <div className="w-full">
                  <p className="text-sm font-[400] text-[#2E2E2E] mb-1">
                    Phone Number
                  </p>
                  <input
                    className="h-[36px] border-[1px] border-[#4F4F4F] focus:border-black/[0.85] text-sm rounded-[8px] w-full py-2 px-3 text-[#2E2E2E]/[0.7] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    type="text"
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
                  type="text"
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

        <div className="hidden md:inline-block bg-[#F8F8F8] border border-[#C0C0C0] rounded-[16px] px-6 pt-6 pb-10 w-[35%] md:h-[550px] lg:h-[500px]">
          <h1 className="font-[500] uppercase text-2xl mb-5">Summary</h1>
          <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
            <p className="text-[15px]">Sub total</p>
            <p className="font-[500] text-[15px]">₦ 360,540</p>
          </div>
          <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
            <p className="text-[15px]">Estimated Delivery</p>
            <p className="font-[500] text-[15px]">₦ 60,000</p>
          </div>
          <Image src={Line} alt="line" />
          <div>
            <div className="flex justify-between items-center cursor-pointer mt-3 mb-3">
              <p className="font-[500] text-[15px]">Total</p>
              <p className="font-[500] text-[15px]">₦ 420,540</p>
            </div>
          </div>
          <Image src={Line} alt="line" className="mb-10" />

          <div className="flex space-y-2 flex-col">
            <h1 className="font-[500] uppercase text-2xl">Shipping</h1>
            <p className="font-light text-sm">
              Two items to be shipped within{" "}
              <span className="font-semibold">July 24th - August 1st</span>
            </p>
            {product.map((item, index) => (
              <div key={index}>
                <div className="flex space-x-4">
                  <Image
                    src={item.Image}
                    alt="image"
                    className="h-[80px] w-[90px] rounded-lg"
                  />
                  <div className="flex justify-between w-full">
                    <div>
                      <h1 className="font-[500] text-sm text-[#141414] mb-1">
                        {item.name}
                      </h1>
                      <p className="font-light text-xs mb-1">₦ {item.price}</p>

                      <div className="flex items-center space-x-10">
                        <div className="flex space-x-2 items-center">
                          <p className="font-light text-xs">Size: 40</p>
                        </div>

                        <div className="flex space-x-2 items-center">
                          <p className="font-light text-xs">Quantity: 1</p>
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
