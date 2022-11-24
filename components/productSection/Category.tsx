import React from "react";
import { useProducts } from "../../context/ProductsContext";

interface CategoryProps {
  category: string;
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
  const { filter, setFilter, setPagination } = useProducts();

  const handleCategoryClicked = (category: string, filter: string[]) => {
    if (
      filter.map((cat) => cat.toLowerCase()).includes(category.toLowerCase())
    ) {
      setFilter(
        filter.filter((cat) => cat.toLowerCase() !== category.toLowerCase())
      );
    } else {
      setFilter([...filter, category.toLocaleLowerCase()]);
    }

    setPagination(1);
  };
  return (
    <div
      key={category}
      className="flex items-center my-4 cursor-pointer"
      onClick={() => handleCategoryClicked(category, filter)}
    >
      <input
        checked={
          filter.find(
            (cat) => cat.toLocaleLowerCase() === category.toLocaleLowerCase()
          )
            ? true
            : false
        }
        type="checkbox"
        name={category}
        id={category}
        className="mr-4 accent-black w-4 h-4 cursor-pointer"
      />
      <label className="text-sm font-medium cursor-pointer w-full">
        {category}
      </label>
    </div>
  );
};
