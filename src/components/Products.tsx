import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Heading from "./Heading";
import AngleButton from "./AngleButton";
import PillButton from "./PillButton";
import ProductsGrid from "./ProductsGrid";

function Products() {
  const products = useSelector((state: RootState) => state.products.products);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(0);

  useEffect(() => {
    const updateVisibleProducts = () => {
      if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setVisibleProducts(9);
      } else {
        setVisibleProducts(8);
      }

      setCurrentIndex(0);
    };

    window.addEventListener("resize", updateVisibleProducts);
    updateVisibleProducts();

    return () => {
      window.removeEventListener("resize", updateVisibleProducts);
    };
  }, []);

  const handleRightClick = () => {
    if (
      currentIndex <
      products.length - (visibleProducts ? visibleProducts : 1)
    ) {
      setCurrentIndex(currentIndex + visibleProducts);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - visibleProducts);
    }
  };

  return (
    <section className="flex flex-col gap-14 md:gap-16">
      <section className="flex justify-between">
        <Heading
          title="Our Products"
          content="Explore our Products"
          className="text-center md:text-left"
        />

        <section className="hidden items-end md:flex">
          <AngleButton
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
          />
        </section>
      </section>

      <ProductsGrid
        products={products.slice(
          currentIndex,
          visibleProducts ? currentIndex + visibleProducts : products.length
        )}
      />

      <section className="text-center">
        <PillButton content="View All" />
      </section>
    </section>
  );
}

export default Products;
