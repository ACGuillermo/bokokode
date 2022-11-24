import React, { useState } from "react";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { useProducts } from "../../context/ProductsContext";

interface FeaturedProductProps {}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({}) => {
  const { loading } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pb-16">
      <FeaturedProductCard />
    </div>
  );
};
