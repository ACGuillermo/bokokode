import React, { useState } from "react";
import { useProducts } from "../../context/ProductsContext";

interface PaginationProps {}

export const Pagination: React.FC<PaginationProps> = ({}) => {
  const { pagination, setPagination } = useProducts();

  const handleButtonClick = (option: string) => {
    const position = document.getElementById("productListSection");
    setPagination((prev) => {
      if (option === "next") {
        return prev + 1;
      } else {
        return prev - 1;
      }
    });

    // https://github.com/facebook/react/issues/20770
    // Disabled button state interrupts smooth scrolling
    setTimeout(() => {
      position &&
        position.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };
  return (
    <nav
      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <button
        id="productListSection-"
        disabled={pagination === 1}
        className="relative inline-flex items-center bg-white px-20 md:px-12 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:z-20 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={(e) => handleButtonClick("prev")}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        id="productListSection-"
        disabled={pagination === 9}
        className="relative inline-flex items-center bg-white px-20 md:px-12 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:z-20 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={(e) => handleButtonClick("next")}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};
