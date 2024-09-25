import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";
import AddressBar from "../components/AddressBar";
import ProductPicture from "../components/ProductPicture";
import SimilarProducts from "../components/SimilarProducts";
import SellingFast from "../components/SellingFast";
import AngleButton from "../components/AngleButton";
import Heading from "../components/Heading";
import WhyUsCard from "../components/WhyUsCard";
import feature from "../assets/water-drop.svg";
import feature2 from "../assets/shield.svg";
import feature3 from "../assets/value.svg";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { name } = useParams<{ name: string }>();
  const products = useSelector((state: RootState) => state.products.products);
  const currentProducts = [
    products.find((p) => p.name === name)!,
    products[11],
    products[17],
  ];
  const [current, setCurrent] = useState(0);

  const handleSelectProduct = (index: number) => {
    setCurrent(index);
  };

  const handleRightClick = () => {
    if (current < 2) {
      setCurrent(current + 1);
    }
  };

  const handleLeftClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <main className="flex flex-col gap-26 md:gap-28">
      <section>
        <AddressBar
          pages={[
            "Home Page",
            "Categories",
            `${currentProducts[0].category}`,
            `${name} 950 ml`,
          ]}
        />

        <section className="flex flex-col w-full gap-14 md:gap-16 xl:gap-18 xl:flex-row xl:items-center">
          <section className="flex flex-col gap-10 md:gap-6 md:mx-[5.25rem] lg:flex-row lg:ms-[7.75rem] lg:m-0 xl:m-0 xl:w-1/2">
            <SimilarProducts
              products={currentProducts}
              current={current}
              onSelectProduct={handleSelectProduct}
              className="lg:flex"
            />

            <ProductPicture
              image={currentProducts[current].image}
              status={currentProducts[current].status}
              align={currentProducts[current].align}
            />

            <AngleButton
              handleLeftClick={handleLeftClick}
              handleRightClick={handleRightClick}
              className="md:hidden"
            />

            <SimilarProducts
              products={currentProducts}
              current={current}
              onSelectProduct={handleSelectProduct}
              className="md:flex lg:hidden"
            />
          </section>

          <SellingFast product={currentProducts[current]} />
        </section>
      </section>

      <section className="flex flex-col xl:flex-row xl:mx-[5.25rem] xl:justify-between xl:gap-5">
        <Heading
          title="Product Features"
          content="Explore the Features"
          className="text-center mb-14 md:mb-16 xl:text-left xl:m-0 xl:w-1/2"
        />

        <ul className="flex flex-col gap-14 md:gap-16 xl:w-1/2">
          <li>
            <WhyUsCard
              title="Natural"
              content="We are using natural ingredients only when creating our products."
              image={feature}
              className="xl:flex-row xl:items-start xl:gap-8"
              className2="xl:items-start xl:text-start"
            />
          </li>
          <li>
            <WhyUsCard
              title="Full Protection"
              content="This product provides broad spectrum SPF 50 and blue light protection."
              image={feature2}
              className="xl:flex-row xl:items-start xl:gap-8"
              className2="xl:items-start xl:text-start"
            />
          </li>
          <li>
            <WhyUsCard
              title="Trending"
              content="It is one of our most popular products that we have on offer."
              image={feature3}
              className="xl:flex-row xl:items-start xl:gap-8"
              className2="xl:items-start xl:text-start"
            />
          </li>
        </ul>
      </section>

      <Reviews />
      <RelatedProducts />
      <Newsletter />
    </main>
  );
}

export default Product;
