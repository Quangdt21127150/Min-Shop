import clsx from "clsx";
import { Link } from "react-router-dom";
import ProductPicture from "./ProductPicture";

interface ProductCardProps {
  item: {
    name: string;
    status: string;
    price: number;
    old_price: number;
    category: string;
    image: string;
    align: string;
  };

  className: string;
}

function ProductCard({ item, className }: ProductCardProps) {
  return (
    <article>
      <Link to={`/Products/${item.name}`} className="cursor-pointer">
        <ProductPicture
          image={item.image}
          status={item.status}
          align={item.align}
        />
      </Link>

      <p className="mt-8 mb-4 font-semibold text-2xl">{item.name}</p>

      <span
        className={`uppercase font-bold text-sm px-4 py-2 rounded-full ${className}`}
      >
        {item.category}
      </span>

      <s
        className={clsx(
          !item.old_price && "hidden",
          "decoration-1 font-semibold text-dark-24% ms-6"
        )}
      >
        ${item.old_price}
      </s>

      <span
        className={clsx(
          (!item.old_price && "ms-6") || "ms-2",
          "font-semibold text-xl"
        )}
      >
        ${item.price}
      </span>
    </article>
  );
}

export default ProductCard;
