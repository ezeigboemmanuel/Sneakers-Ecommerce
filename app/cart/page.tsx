import Recommendations from "@/components/Recommendations";
import Image2 from "@/assets/sneakers/image2.png";
import Image3 from "@/assets/sneakers/image3.png";
import DeleteIcon from "@/assets/icons/delete.svg";
import ColourIcon from "@/assets/icons/colouricon.svg";
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
    <div className="px-16 py-8">
      <div className="flex">
        <div className="w-[65%]">
          <h1 className="text-3xl font-[500] uppercase mb-8">Bag (2)</h1>
          {product.map((item, index) => (
            <div key={index}>
              <div className="flex space-x-4">
                <Image
                  src={item.Image}
                  alt="image"
                  className="h-[150px] w-[160px] rounded-lg"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <h1 className="font-[500] text-[22px] text-[#141414]">
                      {item.name}
                    </h1>
                    <p className="font-light text-sm mb-3">{item.category}</p>

                    <div className="flex space-x-2 items-center mb-3">
                      <p className="font-light text-sm">Colour:</p>
                      <Image src={ColourIcon} alt="colour" />
                    </div>

                    <div className="flex items-center space-x-10">
                      <div className="flex space-x-2 items-center">
                        <p className="font-light text-sm">Size:</p>
                        <select className="font-light text-xs border border-[#C0C0C0] flex justify-center items-center w-10 h-6 rounded-[3px] cursor-pointer">
                          {item.sizes.map((size, index) => (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex space-x-2 items-center">
                        <p className="font-light text-sm">Quantity:</p>
                        <select className="font-light text-xs border border-[#C0C0C0] flex justify-center items-center w-10 h-6 rounded-[3px] cursor-pointer">
                          {item.quantity.map((number, index) => (
                            <option key={index} value={number}>
                              {number}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mr-8 flex flex-col justify-between h-[120px]">
                    <p className="font-[500]">₦ {item.price}</p>
                    <Image
                      src={DeleteIcon}
                      alt="delete"
                      className="h-5 w-5 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <Image src={Line} alt="line" className="mt-4 mb-4" />
            </div>
          ))}
        </div>

        <div className="bg-[#F8F8F8] border border-[#C0C0C0] rounded-[16px] px-6 pt-6 pb-10 w-[35%] h-[310px]">
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

          <Link href="/checkout">
            <div className="flex flex-1 space-x-2 justify-center items-center py-3 rounded-[100px] bg-[#141414] text-white cursor-pointer">
              <p className="font-light text-sm">Proceed to Checkout</p>
            </div>
          </Link>
        </div>
      </div>

      <div>
        <Recommendations />
      </div>
    </div>
  );
};

export default page;
