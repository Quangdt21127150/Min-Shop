import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import AddressBar from "../components/AddressBar";
import Heading from "../components/Heading";
import Dropdown from "../components/Dropdown";
import ProductsGrid from "../components/ProductsGrid";
import Newsletter from "../components/Newsletter";

function Category() {
  const { name } = useParams<{ name: string }>();
  const products = useSelector((state: RootState) => state.products.products);
  const [isFilter, setIsFilter] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [isUseCase, setIsUseCase] = useState(false);
  const [isPriceRange, setIsPriceRange] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const filteredProducts = products.filter(
    (product) => product.category === name
  );

  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };

  const toggleColor = () => {
    setIsColor(!isColor);
  };

  const toggleUseCase = () => {
    setIsUseCase(!isUseCase);
  };

  const togglePriceRange = () => {
    setIsPriceRange(!isPriceRange);
  };

  const toggleSort = () => {
    setIsSort(!isSort);
  };

  return (
    <>
      <AddressBar pages={["Home Page", "Navigation", `${name}`]} />

      <Heading
        title={`${name} Products`}
        content={`Explore the ${name} Products`}
        className="mb-14 md:hidden"
      />
      <section className="hidden mb-16 md:block xl:mb-[4.5rem]">
        <Heading title={`${name} Products`} content={`Explore the ${name}`} />
        <p className="text-heading-md font-bold lg:text-heading-lg">Products</p>
      </section>

      <section className="flex justify-between">
        <Dropdown
          content="Filter By"
          isOpen={isFilter}
          onClick={toggleFilter}
          className="lg:hidden"
        />

        <section className="hidden gap-8 lg:flex">
          <Dropdown content="Color" isOpen={isColor} onClick={toggleColor} />
          <Dropdown
            content="Use Case"
            isOpen={isUseCase}
            onClick={toggleUseCase}
          />
          <Dropdown
            content="Price Range"
            isOpen={isPriceRange}
            onClick={togglePriceRange}
          />
        </section>

        <Dropdown content="Sort By" isOpen={isSort} onClick={toggleSort} />
      </section>

      <ProductsGrid
        products={filteredProducts}
        className="mb-26 md:mb-28 xl:mb-36"
      />

      <Newsletter />
    </>
  );
}

export default Category;
