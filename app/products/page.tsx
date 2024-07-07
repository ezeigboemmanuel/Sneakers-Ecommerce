import Filter from "@/components/Filter";
import Image4 from "@/assets/sneakers/image4.png";
import Image2 from "@/assets/sneakers/image2.png";
import Image3 from "@/assets/sneakers/image3.png";
import Image5 from "@/assets/sneakers/image5.png";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const products = [
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

    {
      image: Image2,
      name: "Novaweave Phantom",
      category: "Men's Shoes",
      noOfColours: 3,
      price: "100,540",
    },
  ];
  return (
    <div className="px-8 mb-16">
      <div className="py-8 pl-8">
        <Filter />
      </div>

      <div className="grid grid-cols-3 gap-x-5 gap-y-7 max-w-[1150px] mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="transition-all duration-500 ease-out h-[440px] max-w-[24rem] w-[22rem] hover:w-[23rem] mx-auto"
          >
            <Link href="/" key={index}>
              <Image
                src={product.image}
                alt={product.name}
                className="rounded-2xl  w-full"
              />
              <div className="">
                <p className="text-[17px] text-[#141414] font-[500]">
                  {product.name}
                </p>
                <p className="text-[14px] text-[#141414]/[0.8]">
                  {product.category}
                </p>
                <p className="text-[14px] text-[#141414]/[0.8]">
                  {product.noOfColours > 1
                    ? `${product.noOfColours} Colours`
                    : `${product.noOfColours} Colour`}
                </p>
                <p className="font-[500] text-[15px] text-[#141414]">
                  ₦ {product.price}
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
