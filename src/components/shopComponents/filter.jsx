import React from "react";
import { SlidersHorizontal, Grip, AlignVerticalSpaceAround } from "lucide-react";

const Filter = ({ filters, setFilters, currentPage }) => {
  const handleCategoryChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, category: e.target.value }));
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: { ...prevFilters.priceRange, [name]: value },
    }));
  };

  const handleStockChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, stockLevel: e.target.value }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: "",
      priceRange: { min: 0, max: 1000 },
      stockLevel: "all",
    });
  };

  return (
    <div className="flex flex-wrap justify-between w-full items-center my-4 bg-[#FAF4F4] p-4 sm:p-8 lg:px-16">
      {/* Left Section */}
      <div className="flex gap-4 items-center flex-wrap">
        <SlidersHorizontal color="black" />
        <p className="text-black text-lg sm:text-xl font-normal">Filter</p>
        <Grip color="black" />
        <AlignVerticalSpaceAround color="black" />
        <div className="bg-[#9F9F9F] w-0.5 h-6"></div>
        <p className="text-black text-sm sm:text-base font-normal">
          Showing {currentPage === 1 ? "1-12" : currentPage === 2 ? "13-24" : "24-32"} of 32 results
        </p>
      </div>

      <div className="flex gap-4 items-center flex-wrap mt-4 sm:mt-0">
        <h5 className="text-black text-sm sm:text-xl font-normal">Category</h5>
        <select
          value={filters.category}
          onChange={handleCategoryChange}
          className="text-[#9F9F9F] text-sm sm:text-xl font-normal bg-white p-2 px-4"
        >
          <option value="">All</option>
          <option value="electronics">chair</option>
          <option value="clothing">sofa</option>
          <option value="clothing">bed</option>
        </select>

        <h5 className="text-black text-sm sm:text-xl font-normal">Price Range</h5>
        <div className="flex gap-2">
          <input
            type="number"
            name="min"
            value={filters.priceRange.min}
            onChange={handlePriceRangeChange}
            className="text-[#9F9F9F] text-sm sm:text-xl font-normal bg-white p-2 px-4"
          />
          <span>-</span>
          <input
            type="number"
            name="max"
            value={filters.priceRange.max}
            onChange={handlePriceRangeChange}
            className="text-[#9F9F9F] text-sm sm:text-xl font-normal bg-white p-2 px-4"
          />
        </div>

        <h5 className="text-black text-sm sm:text-xl font-normal">Stock Level</h5>
        <select
          value={filters.stockLevel}
          onChange={handleStockChange}
          className="text-[#9F9F9F] text-sm sm:text-xl font-normal bg-white p-2 px-4"
        >
          <option value="all">All</option>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>

        <button
          onClick={handleClearFilters}
          className="bg-[#FF0000] text-white px-4 py-2 rounded-lg"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;