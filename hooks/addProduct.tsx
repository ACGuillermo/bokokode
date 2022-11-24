// custom hook for adding a product to the cart

import { useState, useEffect } from "react";
import { product } from "../types";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const useAddProduct = () => {
  const { increaseProductQuantity, setisVisible } = useShoppingCart();

  const handleButtonClick = (product: product) => {
    increaseProductQuantity(product);
    setisVisible(true);
  };

  return { handleButtonClick };
};
