"use client";
import React, { useState } from "react";
import ItemCard from "./itemCard";
import Link from "next/link";
import Filter from "./filter";
import { useProducts } from "@/data/useProductStore";

const ItemList = ({ itemsPerPage }) => {
  const { products } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      <Filter currentPage={currentPage} />
      
      {/* Grid Layout - Adjust the number of columns based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {currentItems.map((item) => (
          <Link key={item.id} href={`/${item.id}`}>
            <ItemCard item={item} />
          </Link>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex gap-4 justify-center mt-12 mb-6">
        {Array.from(
          { length: Math.ceil(products.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`
                ${currentPage === index + 1 ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"} 
                border cursor-pointer mx-1 px-4 py-2 rounded-lg text-black 
                hover:bg-[#FBEBB5] transition-colors duration-300
              `}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ItemList;
