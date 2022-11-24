import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useAddProduct } from "../../hooks/addProduct";
import { product } from "../../types";

interface ProductCardProps {
  product: product;
  alsoBuy?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  alsoBuy = false,
}) => {
  const { handleButtonClick } = useAddProduct();

  const conditionalClasses = alsoBuy
    ? "w-1/4"
    : "w-4/4 sm:w-2/5 md:w-1/4 mb-12 md:mb-0";
  return (
    <div className={conditionalClasses}>
      <div className="relative group">
        <img
          src={product.image.src}
          alt={product.image.alt}
          className="h-full w-full aspect-[3/4]"
        />
        {/* top left div */}

        <div className="absolute bottom-0 left-0 w-full flex md:opacity-0 md:group-hover:opacity-100 transition ease-in-out duration-300">
          <button
            className={`md:text-xl font-medium text-white bg-black w-full ${
              alsoBuy ? "py-1 text-xs sm:py-4 sm:text-lg" : "py-4 text-2xl"
            }`}
            onClick={() => handleButtonClick(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="whitespace-normal break-words mt-6">
        <p className="text-md text-gray-600/70 font-extrabold">
          {product.category}
        </p>
        <p className="text-lg font-extrabold line-clamp-2">{product.name}</p>
        <p className="text-gray-500 font-medium text-lg">{product.price} €</p>
      </div>
    </div>
  );
};
