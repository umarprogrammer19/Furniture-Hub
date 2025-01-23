"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Filter from "./filter";
import ItemCard from "./itemCard";
import { client } from "@/sanity/lib/client";
import { useSearch } from "../../../context/searchContext";

const query = `*[_type == "product"]{
  _id,
  name,
  "imageUrl": imageUrl.asset->url,
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category,
}`;

const ItemList = ({ itemsPerPage }) => {
  const { searchQuery } = useSearch();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: { min: 0, max: 1000 },
    stockLevel: "all",
  });

  useEffect(() => {
    (async () => {
      try {
        const pro = await client.fetch(query);
        setProducts(pro);
        setFilteredProducts(pro);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const filteredProduct = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) => product.price >= filters.priceRange.min && product.price <= filters.priceRange.max
      );
    }

    if (filters.stockLevel !== "all") {
      filtered = filtered.filter((product) => product.stockLevel === filters.stockLevel);
    }

    if (
      filters.category === "" &&
      filters.priceRange.min === 0 &&
      filters.priceRange.max === 1000 &&
      filters.stockLevel === "all"
    ) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(filtered);
    }
  }, [filters, products]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProduct.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredProduct.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full">
      <Filter filters={filters} setFilters={setFilters} currentPage={currentPage} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {currentItems.map((item) => (
          <Link key={item._id} href={`/${item._id}`}>
            <ItemCard item={item} />
          </Link>
        ))}
      </div>

      <div className="flex gap-4 justify-center mt-12 mb-6">
        <button
          onClick={handlePreviousPage}
          className="bg-[#FFF9E5] border cursor-pointer px-4 py-2 rounded-lg text-black hover:bg-[#FBEBB5] transition-colors duration-300"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from(
          { length: Math.ceil(filteredProduct.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`${
                currentPage === index + 1 ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
              } border cursor-pointer mx-1 px-4 py-2 rounded-lg text-black hover:bg-[#FBEBB5] transition-colors duration-300`}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          onClick={handleNextPage}
          className="bg-[#FFF9E5] border cursor-pointer px-4 py-2 rounded-lg text-black hover:bg-[#FBEBB5] transition-colors duration-300"
          disabled={currentPage === Math.ceil(filteredProduct.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemList;
