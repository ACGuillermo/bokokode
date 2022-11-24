import React from "react";
import { ShoppingCartHeader } from "./ShoppingCartHeader";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className="flex justify-between items-center pb-4">
      <div className="text-lg font-medium tracking-widest">BEJAMAS_</div>
      <ShoppingCartHeader />
    </header>
  );
};
