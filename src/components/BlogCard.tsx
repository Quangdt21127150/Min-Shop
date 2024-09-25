import clsx from "clsx";

interface BlogCardProps {
  item: {
    title: string;
    category: string;
    status: string;
    image: string;
  };

  className: string;
}

function BlogCard({ item, className }: BlogCardProps) {
  return (
    <>
      <article className="relative aspect-square md:aspect-auto rounded-picture">
        <img src={item.image} alt="Blog" className="w-full h-full" />
        <p
          className={clsx(
            !item.status && "hidden",
            item.status === "recent" && "bg-primary border-2 border-white",
            item.status === "popular" && "bg-accent-2 border-2 border-white",
            "absolute uppercase top-6 -right-6 rounded-full font-bold text-sm text-white px-4 py-2"
          )}
        >
          {item.status}
        </p>
      </article>
      <p className="mt-8 mb-4 font-semibold text-2xl">{item.title}</p>

      <span
        className={`uppercase font-bold text-sm px-4 py-2 rounded-full ${className}`}
      >
        {item.category}
      </span>
    </>
  );
}

export default BlogCard;
