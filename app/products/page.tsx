"use client";

import Filter from "@/components/Filter";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const page = () => {
  const [collections, setCollections] = useState<Collections | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCollections(data);
      });
  }, []);

  // For Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = collections?.items.slice(firstItemIndex, lastItemIndex);

  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(30 / itemsPerPage);
    i++
  ) {
    pages.push(i);
  }

  const maxPageNum = 5; // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible

  let activePages = pages.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pages.length)
  );

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}
      >
        <PaginationLink onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      );
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pages.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      );
    }

    return renderedPages;
  };

  return (
    <div className="relative px-4 md:px-8 mb-16">
      <div className="py-4 md:py-8 lg-md:px-0 lg:px-8 max-w-[1150px]">
        <Filter />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-5 md:gap-y-7 max-w-[1150px] mx-auto">
        {currentItems?.map((collection, index) => (
          <div
            key={index}
            className="transition-all duration-500 ease-out max-w-[24rem] w-[98%] mx-auto"
          >
            <Link href={`/products/${collection.id}`} key={index}>
              <Image
                src={`https://api.timbu.cloud/images/${collection.photos[0].url}`}
                alt={collection.name}
                className="rounded-lg md:rounded-2xl h-[200px] md:h-[380px] w-full hover:rotate-2"
                width={100}
                height={100}
              />
              <div className="">
                <p className="text-[17px] text-[#141414] font-[500]">
                  {collection.name}
                </p>
                <p className="text-[14px] text-[#141414]/[0.8]">
                  {collection.categories[0].name}
                </p>
                <p className="text-[14px] text-[#141414]/[0.8]">3 Colours</p>
                <p className="font-[500] text-[15px] text-[#141414]">
                  ₦ {collection.current_price[0].NGN[0]}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>

            {renderPages()}

            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default page;
