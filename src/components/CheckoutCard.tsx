import clsx from "clsx";
import ProductPicture from "./ProductPicture";
import ExitButton from "./ExitButton";

interface CheckoutCardProps {
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
  onDelete: () => void;
}

function CheckoutCard({ item, volumn, onDelete }: CheckoutCardProps) {
  return (
    <article className="flex flex-col justify-between items-center md:flex-row">
      <article className="w-full flex flex-col gap-6 items-center md:flex-row">
        <section className="w-24 mx-auto md:m-0">
          <ProductPicture image={item.image} status={""} align={item.align} />
        </section>

        <section className="text-center md:text-left">
          <p className="font-semibold text-xl">{item.name + " " + volumn}</p>

          <article className="mt-4 mb-10 md:mb-0">
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
        </section>
      </article>

      <ExitButton
        onClick={onDelete}
        className="bg-white border-2 border-accent md:p-4"
        imgWidth="md:w-8"
      />
    </article>
  );
}

export default CheckoutCard;
