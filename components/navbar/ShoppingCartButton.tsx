import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

interface ShoppingCartButtonProps {}

export const ShoppingCartButton: React.FC<ShoppingCartButtonProps> = ({}) => {
  const { setisVisible } = useShoppingCart();
  return (
    <button
      className="w-6 h-6 lg:w-8 lg:h-8"
      onClick={() => setisVisible((prev) => !prev)}
    >
      <svg
        id="i-cart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
        <circle cx="25" cy="27" r="2" />
        <circle cx="12" cy="27" r="2" />
      </svg>
    </button>
  );
};
