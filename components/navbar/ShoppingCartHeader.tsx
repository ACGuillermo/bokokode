import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { ShoppingCartDropdown } from "./ShoppingCartDropdown";

interface ShoppingCartHeaderProps {}

export const ShoppingCartHeader: React.FC<ShoppingCartHeaderProps> = ({}) => {
  const { shoppingCart, isVisible } = useShoppingCart();
  return (
    <div className="flex justify-center items-center">
      {shoppingCart.length > 0 ? (
        <div className="text-center px-1 bg-black mr-12 relative">
          <span className="text-sm font-light tracking-widest text-white">
            {shoppingCart.reduce((acc, curr) => acc + curr.quantity, 0)}
          </span>
          {isVisible ? <ShoppingCartDropdown /> : null}
        </div>
      ) : null}
      <ShoppingCartButton />
    </div>
  );
};
