import React from "react";
import { shoppingCartProduct } from "../../types";

interface ShoppingCartProductCardProps {
  cartProductInfo: shoppingCartProduct;
}

export const ShoppingCartProductCard: React.FC<
  ShoppingCartProductCardProps
> = ({ cartProductInfo }) => {
  return (
    <div className="grid grid-cols-6 py-4 px-4">
      <div
        key={cartProductInfo.product._id}
        className="col-span-4 flex flex-col justify-around text-start h-full"
      >
        <p className="text-xl font-bold">{cartProductInfo.product.name}</p>
        <p className="text-xl font-bold text-gray-800/70">
          {cartProductInfo.product.price}€
        </p>
      </div>
      <img
        src={cartProductInfo.product.image.src}
        alt={cartProductInfo.product.image.alt}
        className="col-span-2  object-fit object-center"
      />
    </div>
  );
};
