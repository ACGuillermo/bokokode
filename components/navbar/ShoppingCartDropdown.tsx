import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Separator } from "../shared/Separator";
import { ShoppingCartProductCard } from "./ShoppingCartProductCard";

interface ShoppingCartDropdownProps {}

export const ShoppingCartDropdown: React.FC<
  ShoppingCartDropdownProps
> = ({}) => {
  const { shoppingCart, clearShoppingCart, setisVisible } = useShoppingCart();
  return (
    <aside className="absolute top-8 -right-16 w-[280px]  md:top-6 md:right-5 md:w-[420px] max-h-[560px] bg-white border-2 border-gray-300 z-30 overflow-y-auto flex-row flex-wrap items-center text-black">
      {/* close button */}
      <div className="flex justify-end px-8 py-2">
        <button
          className="text-2xl font-bold"
          onClick={() => setisVisible(false)}
        >
          x
        </button>
      </div>
      {shoppingCart.map((item) => {
        return (
          <ShoppingCartProductCard
            key={item.product._id}
            cartProductInfo={item}
          />
        );
      })}

      <div className="absolute sticky bottom-0 right-0 bg-white pb-10">
        <div className="w-[90%] mx-auto pt-8">
          <Separator />
          <div className="flex justify-center items-center">
            <button
              className="text-xl font-bold tracking-widest text-center w-[90%] bg-white text-black border-4 border-black py-4"
              onClick={() => clearShoppingCart()}
            >
              CLEAR
            </button>
          </div>
        </div>
        {/* clear shopping cart button */}
      </div>
    </aside>
  );
};
