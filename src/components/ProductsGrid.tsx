import clsx from "clsx";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  status: string;
  price: number;
  old_price: number;
  category: string;
  image: string;
  align: string;
}

interface ProductsGridProps {
  products: Product[];
  className?: string;
}

function ProductsGrid({ products, className }: ProductsGridProps) {
  return (
    <ul
      className={`grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-3 lg:gap-x-14 xl:grid-cols-4 xl:gap-x-12 xl:gap-y-18 ${className}`}
    >
      {products.map((item, index) => (
        <li key={index}>
          <ProductCard
            item={item}
            className={clsx(
              index % 4 === 0 && "text-tertiary bg-tertiary-10%",
              index % 4 === 1 && "text-secondary bg-secondary-10%",
              index % 4 === 2 && "text-tertiary-2 bg-tertiary-2-10%",
              "text-primary bg-primary-10%"
            )}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductsGrid;
