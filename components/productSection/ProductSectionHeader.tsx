import React, { useState } from "react";
import { useProducts } from "../../context/ProductsContext";
import { SortBy } from "./SortBy";

interface ProductSectionHeaderProps {
  category?: string;
  subcategory?: string;
  sortBy?: string;
}

export const ProductSectionHeader: React.FC<ProductSectionHeaderProps> = ({
  category = "Photography",
  subcategory = "Premium Photos",
}) => {
  const { setIsFilterVisible } = useProducts();
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-md sm:text-2xl font-medium tracking-widest flex">
        <h3>{category}</h3>
        <span className="ml-2">/</span>
        <span className="text-gray-400 ml-2">{subcategory}</span>
      </div>
      <SortBy />
      <button
        className="lg:hidden"
        onClick={() => setIsFilterVisible((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 64 64"
        >
          <g id="Layer_23" data-name="Layer 23">
            <path d="M59.59,50.42H51c-2.28-10-16.45-10-18.73,0H4.41a2,2,0,1,0,0,4H32.3c2.29,10,16.46,10,18.73,0h8.56A2,2,0,0,0,59.59,50.42ZM41.67,58c-7.38-.26-7.38-10.9,0-11.16C49.05,47.1,49.05,57.74,41.67,58Z" />
            <path d="M59.59,30H28.52C26.24,20,12.07,20,9.79,30H4.41a2,2,0,1,0,0,4H9.79c2.28,10,16.45,10,18.73,0H59.59A2,2,0,0,0,59.59,30ZM19.16,37.58c-7.38-.24-7.37-10.93,0-11.16C26.53,26.66,26.53,37.35,19.16,37.58Z" />
            <path d="M4.41,13.58H22.63c2.29,10,16.46,10,18.74,0H59.59a2,2,0,0,0,0-4H41.37c-2.29-10-16.46-10-18.74,0H4.41A2,2,0,0,0,4.41,13.58ZM32,6c7.38.26,7.38,10.9,0,11.16C24.62,16.9,24.62,6.26,32,6Z" />
          </g>
        </svg>
      </button>
    </div>
  );
};