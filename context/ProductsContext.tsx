import React, { createContext, useContext, useEffect, useState } from "react";
import { product } from "../types";

interface ProductContextProps {
  products: product[];
  featuredProduct: product;
  pagination: number;
  filter: string[];
  sort: string;
  loading: boolean;
  sortBy: string;
  isFilterVisible: boolean;
  setProducts: React.Dispatch<React.SetStateAction<product[]>>;
  setFeaturedProduct: React.Dispatch<React.SetStateAction<product>>;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setIsFilterVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProductProviderProps {
  children: React.ReactNode;
}

interface requestBody {
  sort: {
    key: string;
    type: string;
  };
}

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [featuredProduct, setFeaturedProduct] = useState<product>(
    {} as product
  );
  const [pagination, setPagination] = useState(1);
  const [filter, setFilter] = useState<string[]>([]);
  const [sort, setSort] = useState("ASC");
  const [sortBy, setSortBy] = useState("price");
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);

  const fetchProducts = async (pagination: number, data?: requestBody) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/products?page=${pagination}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        ...(data ? { body: JSON.stringify(data) } : {}), //
      }
    );

    return response.json();
  };

  useEffect(() => {
    //Request body
    const data = {
      sort: {
        key: sortBy,
        type: sort,
      },
      ...(filter.length > 0 ? { categories: filter } : {}),
    };

    fetchProducts(pagination, data).then((response) => {
      setProducts(response.data.data);
      setLoading(false);
    });
  }, [sort, pagination, filter, sortBy]);

  useEffect(() => {
    fetchProducts(1).then((response) => {
      setFeaturedProduct(response.data.data[0]);
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        featuredProduct,
        pagination,
        filter,
        sort,
        sortBy,
        isFilterVisible,
        setFeaturedProduct,
        setFilter,
        setPagination,
        setProducts,
        setSort,
        setSortBy,
        setIsFilterVisible,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
