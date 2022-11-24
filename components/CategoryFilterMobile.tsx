import React from "react";
import { useProducts } from "../context/ProductsContext";

interface CategoryFilterMobileProps {
  categories: string[];
}

export const CategoryFilterMobile: React.FC<CategoryFilterMobileProps> = ({
  categories = [],
}) => {
  const { filter, setFilter, setPagination } = useProducts();
  const [inputSelected, setInputSelected] = React.useState<string[]>([]);
  const { setIsFilterVisible } = useProducts();

  const handleCategoryClicked = (category: string, filter: string[]) => {
    if (
      inputSelected.find((cat) => cat.toLowerCase() === category.toLowerCase())
    ) {
      setInputSelected(
        inputSelected.filter(
          (cat) => cat.toLowerCase() !== category.toLowerCase()
        )
      );
    } else {
      setInputSelected([...inputSelected, category.toLowerCase()]);
    }
  };

  const handleSaveClicked = () => {
    setFilter(inputSelected);
    setPagination(1);
    setIsFilterVisible(false);
  };
  return (
    <div className="fixed bottom-0 w-full h-full bg-black/30 flex flex-row items-end touch-none">
      <div className="w-full h-[70%] bg-white absolute overflow-y-auto">
        <div className="flex flex-row justify-between items-center px-4 py-4">
          <span className="font-xl font-bold">Filter</span>
          <span
            className="font-bold text-xl cursor-pointer"
            onClick={() => setIsFilterVisible(false)}
          >
            x
          </span>
        </div>
        <div>
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center m-4 cursor-pointer"
              onClick={() => handleCategoryClicked(category, filter)}
            >
              {/* input label */}
              <input
                checked={
                  inputSelected.find(
                    (cat) =>
                      cat.toLocaleLowerCase() === category.toLocaleLowerCase()
                  )
                    ? true
                    : false
                }
                type="checkbox"
                name={category}
                id={category}
                className="mr-4 accent-black w-4 h-4 cursor-pointer"
              />
              <label className="text-lg font-medium cursor-pointer w-full">
                {category}
              </label>
            </div>
          ))}
        </div>

        <div className="absolute sticky bottom-0 left-0 pb-4 flex justify-around w-full bg-white">
          {/* Cancel and save buttons */}
          <button
            className="text-lg font-medium w-1/3 border-2 border-black"
            onClick={() => setFilter([])}
          >
            Clear
          </button>
          <button
            className="text-lg font-medium w-1/3 text-white bg-black"
            onClick={() => handleSaveClicked()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
