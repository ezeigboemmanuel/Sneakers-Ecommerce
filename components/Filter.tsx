"use client";

import FilterUp from "@/assets/icons/filterup.svg";
import FilterDown from "@/assets/icons/filterdown.svg";
import Close from "@/assets/icons/close.svg";
import Image from "next/image";
import { useState } from "react";

const Filter = () => {
  const [open, setOpen] = useState(false);

  const filters = [
    { genders: ["Men", "Women", "Kids", "Unisex"] },
    {
      firstcolours: ["Blue", "Green", "Yellow", "Red"],
    },
    {
      secondcolours: ["Orange", "Grey", "White", "Multicolor"],
    },
    {
      prices: [
        "₦ 40,000 - ₦ 100,000",
        "₦ 100,001 - ₦ 200,000",
        "₦ 200,001 - ₦ 300,000",
        "Over ₦ 300,000",
      ],
    },
    {
      sorts: [
        "Best sellers",
        "New Collections",
        "Price: High - Low",
        "Price: Low - High",
      ],
    },
  ];
  return (
    <div>
      <div className="flex justify-between md:justify-normal md:space-x-5">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p className="text-[#2E2E2E]/[0.8]">Filter & Sort</p>
          <Image src={FilterDown} alt="filter_down" />
        </div>

        <div className="flex items-center space-x-3 cursor-pointer">
          <p className="text-[#2E2E2E]/[0.8]">Clear all</p>
          <Image src={Close} alt="close" />
        </div>
      </div>

      {open && (
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row p-5 font-light justify-around items-start border md:border-[#C0C0C0] md:rounded-xl bg-[#F8F8F8] mt-3">
          <div>
            <h1 className="font-[500] mb-2">Gender</h1>
            <div>
              {filters.map((filter) =>
                filter.genders?.map((gender, index) => (
                  <p key={index} className="text-sm mb-1 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {gender}
                  </p>
                ))
              )}
            </div>
          </div>
          <div>
            <h1 className="font-[500] md:pl-4 mb-2">Colour</h1>
            <div className="flex ">
              {filters.map((filter, index) => (
                <div key={index} className="flex mr-4 -ml-2 md:mr-0 md:ml-0">
                  <div className="md:pr-4">
                    {filter.firstcolours?.map((colour, index) => (
                      <p key={index} className="text-sm mb-1 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <div className="w-3 h-3 rounded-full mr-1" style={{backgroundColor: colour}}></div>
                        {colour}
                      </p>
                    ))}
                  </div>
                  <div>
                    {filter.secondcolours?.map((colour, index) => (
                      <p key={index} className="text-sm mb-1 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <div className="w-3 h-3 rounded-full mr-1" style={{backgroundColor: colour}}></div>
                        {colour}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-[500] mb-2">Price</h1>
            <div>
              {filters.map((filter) =>
                filter.prices?.map((price, index) => (
                  <p key={index} className="text-sm mb-1 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {price}
                  </p>
                ))
              )}
            </div>
          </div>
          <div>
            <h1 className="font-[500] mb-2">Sort by</h1>
            <div>
              {filters.map((filter) =>
                filter.sorts?.map((sort, index) => (
                  <p key={index} className="text-sm mb-1 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {sort}
                  </p>
                ))
              )}
            </div>
          </div>
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setOpen(false)}>
            <p className="text-[#2E2E2E]/[0.8]">Close</p>
            <Image src={Close} alt="close" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
