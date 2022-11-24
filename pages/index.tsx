import type { NextPage } from "next";
import Head from "next/head";
import { CategoryFilterMobile } from "../components/CategoryFilterMobile";
import { FeaturedProduct } from "../components/featuredProduct/FeaturedProduct";
import { Navbar } from "../components/navbar/Navbar";
import { ProductSection } from "../components/productSection/ProductSection";
import { Separator } from "../components/shared/Separator";
import { useProducts } from "../context/ProductsContext";

const Home: NextPage = () => {
  const { isFilterVisible } = useProducts();
  return (
    <>
      <div className={`flex min-h-screen px-4 py-6 lg:px-16`}>
        <Head>
          <title>BEJAMAS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full max-w-[1440px] mx-auto">
          <Navbar />
          <Separator />
          <FeaturedProduct />
          <Separator />
          <ProductSection />
        </main>
      </div>
      {isFilterVisible ? (
        <CategoryFilterMobile
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
      ) : null}
    </>
  );
};

export default Home;
