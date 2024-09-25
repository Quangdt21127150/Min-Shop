interface ReviewCardProps {
  name: string;
  content: string;
  image: string;
}
function ReviewCard({ name, content, image }: ReviewCardProps) {
  return (
    <section className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <img
        src={image}
        alt="Avatar"
        className="rounded-full border-2 border-transparent outline outline-2 outline-primary outline-offset-2 mt-14 mb-8 ms-1"
      />

      <p className="font-semibold text-2xl mb-4">{name}</p>
      <p className="text-xl">{content}</p>
    </section>
  );
}

export default ReviewCard;
