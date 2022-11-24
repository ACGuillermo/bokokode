import React from "react";
import { AlsoBuy } from "./AlsoBuy";
import Image from "next/image";
import { useProducts } from "../../context/ProductsContext";
import { FeaturedProductInfo } from "./FeaturedProductInfo";
import { FeaturedProductHeader } from "./FeaturedProductHeader";
import { FeaturedProductImage } from "./FeaturedProductImage";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { product } from "../../types";
import { useAddProduct } from "../../hooks/addProduct";

interface FeaturedProductCardProps {}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({}) => {
  const { featuredProduct } = useProducts();
  const { increaseProductQuantity, setisVisible } = useShoppingCart();
  const { handleButtonClick } = useAddProduct();

  return (
    <>
      <FeaturedProductHeader featuredProduct={featuredProduct} />

      <div className="my-6">
        <FeaturedProductImage featuredProduct={featuredProduct} />

        <button
          className="md:hidden w-full py-4 mt-8 text-lg font-medium text-white bg-black tracking-[.30sem] uppercase"
          onClick={() => handleButtonClick(featuredProduct)}
        >
          Add to cart
        </button>

        <div className="mt-6">
          <div className="flex justify-between lg:gap-24">
            <div className="w-full">
              <FeaturedProductInfo featuredProduct={featuredProduct} />
              {/*  MOBILE */}
              <AlsoBuy product={featuredProduct} mobile={true} />
            </div>
            {/* DESKTOP */}
            <AlsoBuy product={featuredProduct} mobile={false} />
          </div>
        </div>
      </div>
    </>
  );
};
