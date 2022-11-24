import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useAddProduct } from "../../hooks/addProduct";
import { product } from "../../types";

interface FeaturedProductHeaderProps {
  featuredProduct: product;
}

export const FeaturedProductHeader: React.FC<FeaturedProductHeaderProps> = ({
  featuredProduct,
}) => {
  const { increaseProductQuantity, setisVisible } = useShoppingCart();
  const { handleButtonClick } = useAddProduct();
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl md:text-4xl font-extrabold text-clip md:w-3/5">
        {featuredProduct.name}
      </h2>
      <button
        className="hidden md:block text-md 4xl:text-xl font-medium text-white bg-black px-10 py-3 tracking-[.30em] 4xl:tracking-[.40em] uppercase"
        onClick={() => handleButtonClick(featuredProduct)}
      >
        Add to cart
      </button>
    </div>
  );
};
