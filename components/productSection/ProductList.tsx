import React from "react";
import { product } from "../../types";
import { Pagination } from "./Pagination";
import { ProductCard } from "../shared/ProductCard";

interface ProductListProps {
  products: product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      <div className="w-full flex justify-center">
        <Pagination />
      </div>
    </>
  );
};
