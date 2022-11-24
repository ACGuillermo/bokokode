import React from "react";
import { useProducts } from "../../context/ProductsContext";
import { Category } from "./Category";

interface DesktopCategoryFilter {
  categories: string[];
}

export const DesktopCategoryFilter: React.FC<DesktopCategoryFilter> = ({
  categories,
}) => {
  return (
    <div className="">
      <span className="font-xl font-bold">Category</span>
      <div className="mt-4">
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </div>
  );
};
