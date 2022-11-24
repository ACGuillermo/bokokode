import React from "react";
import { product } from "../../types";

interface FeaturedProductInfoProps {
  featuredProduct: product;
}

export const FeaturedProductInfo: React.FC<FeaturedProductInfoProps> = ({
  featuredProduct,
}) => {
  return (
    <div className="mb-6 lg:mb-0">
      <p className="text-xl md:text-2xl font-bold mb-2">
        About {featuredProduct.name}
      </p>
      <p className="hidden md:block mb-2 text-gray-600/70 text-xl m:text-2xl font-extrabold">
        {featuredProduct.category}
      </p>
      <p className="text-gray-500 font-medium text-lg">
        {featuredProduct.description}
      </p>
    </div>
  );
};
