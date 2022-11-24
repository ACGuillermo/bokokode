import React from "react";
import Image from "next/image";
import { product } from "../../types";

interface FeaturedProductImageProps {
  featuredProduct: product;
}

export const FeaturedProductImage: React.FC<FeaturedProductImageProps> = ({
  featuredProduct,
}) => {
  return (
    <div className="relative">
      <Image
        src={featuredProduct?.image?.src}
        width={800}
        height={800}
        className="w-full object-cover"
        priority
        alt={featuredProduct?.image?.alt}
      />

      <div className="absolute bottom-0 left-0 bg-white px-8 py-1 sm:py-4 sm:px-18 md:py-5 md:px-16 flex justify-center items-center ">
        <span className="text-lg font-bold md:font-extrabold">
          Photo of the day
        </span>
      </div>
    </div>
  );
};
