import clsx from "clsx";

interface ProductPictureProps {
  image: string;
  status: string;
  align: string;
}

function ProductPicture({ image, status, align }: ProductPictureProps) {
  return (
    <article className="relative aspect-square bg-accent rounded-picture flex w-full">
      <img src={image} alt="Product" className={`ms-auto ${align}`} />
      <p
        className={clsx(
          !status && "hidden",
          status === "new in" && "bg-primary border-2 border-white",
          status && "bg-accent-2 border-2 border-white",
          "absolute uppercase top-6 -right-6 rounded-full font-bold text-sm text-white px-4 py-2"
        )}
      >
        {status}
      </p>
    </article>
  );
}

export default ProductPicture;
