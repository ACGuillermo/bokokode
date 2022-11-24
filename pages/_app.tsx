import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProductProvider } from "../context/ProductsContext";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </ShoppingCartProvider>
  );
}

export default MyApp;
