import React from "react";
import { DesktopCategoryFilter } from "./DesktopCategoryFilter";
import { ProductList } from "./ProductList";
import { ProductSectionHeader } from "./ProductSectionHeader";
import { useProducts } from "../../context/ProductsContext";

interface ProductSectionProps {}

export const ProductSection: React.FC<ProductSectionProps> = ({}) => {
  const { products } = useProducts();
  return (
    <section id="productListSection" className="w-full">
      <ProductSectionHeader />
      <div className="flex mt-8">
        <div className="hidden md:flex w-3/12">
          <DesktopCategoryFilter
            categories={[
              "People",
              "Premium",
              "Pets",
              "Food",
              "Landmarks",
              "Cities",
              "Nature",
            ]}
          />
        </div>
        <div className="w-full">
          <div className="sm:flex sm:flex-row mt-6 sm:flex-wrap sm:justify-around md:justify-between md:gap-y-12 md:gap-x-6">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};
