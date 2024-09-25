import clsx from "clsx";
import ProductPicture from "./ProductPicture";

interface Product {
  name: string;
  status: string;
  price: number;
  old_price: number;
  category: string;
  image: string;
  align: string;
}

interface SimilarProductsProps {
  products: Product[];
  current: number;
  onSelectProduct: (index: number) => void;
  className?: string;
}

function SimilarProducts({
  products,
  current,
  onSelectProduct,
  className,
}: SimilarProductsProps) {
  return (
    <ul className={`hidden gap-6 lg:flex-col ${className}`}>
      {products.map((item, index) => (
        <li key={index} className="w-1/3 lg:w-full aspect-square">
          <button
            onClick={() => onSelectProduct(index)}
            className={clsx(
              index === current ? "border-primary" : "border-white",
              "cursor-pointer rounded-picture border-2 hover:border-primary"
            )}
          >
            <ProductPicture image={item.image} status="" align={item.align} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SimilarProducts;
