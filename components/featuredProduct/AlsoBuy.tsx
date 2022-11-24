import React from "react";
import { product } from "../../types";
import { ProductCard } from "../shared/ProductCard";

interface AlsoBuyProps {
  mobile: boolean;
  product: product;
}

export const AlsoBuy: React.FC<AlsoBuyProps> = ({ mobile, product }) => {
  if (mobile) {
    return (
      <div className="lg:hidden w-full">
        <div className="text-2xl font-bold mb-2 text-right">
          People also buy
        </div>
        <div className="flex flex-row justify-between md:gap-24 mt-6">
          {product.people_also_buy?.map((prod) => (
            <ProductCard key={prod._id} product={prod} alsoBuy={true} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="hidden lg:block">
      <div className="text-2xl font-bold mb-2 text-right">People also buy</div>
      <div className="flex flex-row justify-end gap-6 mt-6">
        {product.people_also_buy?.map((prod) => (
          <ProductCard key={prod._id} product={prod} alsoBuy={true} />
        ))}
      </div>
    </div>
  );
};
