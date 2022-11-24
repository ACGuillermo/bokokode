// ShoppingCartContext with typescript and useState
import React, { createContext, useContext, useState } from "react";
import { product, shoppingCartProduct } from "../types";

interface ShoppingCartContextProps {
  shoppingCart: shoppingCartProduct[];
  isVisible: boolean;
  increaseProductQuantity: (product: product) => void;
  decreaseProductQuantity: (product: product) => void;
  removeFromShoppingCart: (product: product) => void;
  clearShoppingCart: () => void;
  setisVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [shoppingCart, setShoppingCart] = useState<shoppingCartProduct[]>([]);
  const [isVisible, setisVisible] = useState<boolean>(false);

  console.log(shoppingCart);

  const increaseProductQuantity = (product: product) => {
    setShoppingCart((prev) => {
      const itemInCart = shoppingCart.find(
        (prod) => prod.product._id === product._id
      );
      if (itemInCart) {
        return prev.map((prod) =>
          prod.product._id === product._id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const decreaseProductQuantity = (product: product) => {
    setShoppingCart((prev) => {
      if (
        shoppingCart.find((prod) => prod.product._id === product._id)
          ?.quantity === 1
      ) {
        return prev.filter((prod) => prod.product._id !== product._id);
      } else {
        return prev.map((prod) =>
          prod.product._id === product._id
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
        );
      }
    });
  };

  const removeFromShoppingCart = (product: product) => {
    setShoppingCart((prev) => {
      return prev.filter((prod) => prod.product._id !== product._id);
    });
  };

  const clearShoppingCart = () => {
    setShoppingCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        isVisible,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeFromShoppingCart,
        clearShoppingCart,
        setisVisible,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
