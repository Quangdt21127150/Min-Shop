import clsx from "clsx";
import Heading from "./Heading";
import QuantityButton from "./QuantityButton";
import PillButton from "./PillButton";
import LikeButton from "./LikeButton";

interface Product {
  name: string;
  status: string;
  price: number;
  old_price: number;
  category: string;
  image: string;
  align: string;
}

interface SellingFastProps {
  product: Product;
}

function SellingFast({ product }: SellingFastProps) {
  const updateQuantity = () => {};

  return (
    <section className="text-center xl:w-1/2 xl:text-left">
      <Heading title="Selling Fast" content={product.name} className="mb-8" />

      <span className="uppercase font-bold text-sm px-4 py-2 rounded-full text-tertiary bg-tertiary-10%">
        {product.category}
      </span>

      <s
        className={clsx(
          !product.old_price && "hidden",
          "decoration-1 font-semibold text-dark-24% ms-6"
        )}
      >
        ${product.old_price}
      </s>

      <span
        className={clsx(
          (!product.old_price && "ms-6") || "ms-2",
          "font-semibold text-xl"
        )}
      >
        ${product.price}
      </span>

      <p className="font-medium mt-8 mb-10 md:mb-12">
        <span className="text-dark-40%">SKU: </span>
        123456789
      </p>

      <section className="flex flex-col gap-6 items-center justify-center md:flex-row xl:justify-start">
        <QuantityButton quantity={1} onChangeQuantity={updateQuantity} />
        <section className="flex gap-6">
          <PillButton content="Add to Cart" />
          <LikeButton />
        </section>
      </section>
    </section>
  );
}

export default SellingFast;
