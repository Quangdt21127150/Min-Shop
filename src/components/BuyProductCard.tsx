import clsx from "clsx";
import ProductPicture from "./ProductPicture";
import QuantityButton from "./QuantityButton";
import ExitButton from "./ExitButton";

interface BuyProductCardProps {
  item: {
    name: string;
    status: string;
    price: number;
    old_price: number;
    category: string;
    image: string;
    align: string;
  };
  volumn: string;
  quantity: number;
  onChangeQuantity: (newQuantity: number) => void;
  onDelete: () => void;
}

function BuyProductCard({
  item,
  volumn,
  quantity,
  onChangeQuantity,
  onDelete,
}: BuyProductCardProps) {
  return (
    <article className="flex justify-between items-center p-6 rounded-picture border-2 border-accent md:p-14">
      <article className="w-full flex flex-col gap-6 md:gap-14 md:flex-row">
        <section className="w-24 md:w-48 mx-auto md:m-0">
          <ProductPicture image={item.image} status={""} align={item.align} />
        </section>

        <section className="justify-between flex-col text-center md:text-left lg:flex">
          <article>
            <p className="hidden font-semibold text-2xl lg:block">
              {item.name + " " + volumn}
            </p>
            <p className="font-semibold text-2xl lg:hidden">{item.name}</p>
            <p className="font-semibold text-2xl lg:hidden">{volumn}</p>
          </article>
          <article className="mt-4 mb-10 md:mb-6 lg:m-0">
            <s
              className={clsx(
                !item.old_price && "hidden",
                "decoration-1 font-semibold text-dark-24%"
              )}
            >
              ${item.old_price}
            </s>

            <span
              className={clsx(
                item.old_price && "ms-2",
                "font-semibold text-xl"
              )}
            >
              ${item.price}
            </span>
          </article>
          <section className="flex items-center gap-6 justify-center md:justify-start">
            <QuantityButton
              quantity={quantity}
              onChangeQuantity={onChangeQuantity}
            />
            <ExitButton
              onClick={onDelete}
              className="bg-white border-2 border-accent lg:hidden xl:inline"
            />
          </section>
        </section>
      </article>

      <ExitButton
        onClick={onDelete}
        className="hidden bg-white border-2 border-accent lg:block xl:hidden"
      />
    </article>
  );
}

export default BuyProductCard;
