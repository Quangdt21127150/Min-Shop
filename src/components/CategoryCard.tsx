interface CategoryCardProps {
  item: {
    name: string;
    image: string;
  };
}

function CategoryCard({ item }: CategoryCardProps) {
  return (
    <article className="flex flex-col gap-4 items-center px-3 py-7 bg-accent rounded-3xl">
      <img src={item.image} alt="Category" className="w-8" />
      <article className="text-center font-semibold w-26">{item.name}</article>
    </article>
  );
}

export default CategoryCard;
