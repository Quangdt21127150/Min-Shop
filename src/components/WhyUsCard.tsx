interface WhyUsCardProps {
  title: string;
  content: string;
  image: string;
  className?: string;
  className2: string;
}

function WhyUsCard({
  title,
  content,
  image,
  className,
  className2,
}: WhyUsCardProps) {
  return (
    <article className={`flex flex-col items-center ${className}`}>
      <article className="p-4 bg-accent rounded-full mb-8">
        <img src={image} alt="WhyUs" className="w-8" />
      </article>
      <article
        className={`flex flex-col items-center text-center ${className2}`}
      >
        <article className="text-2xl font-semibold mb-4">{title}</article>
        <article className="text-xl">{content}</article>
      </article>
    </article>
  );
}

export default WhyUsCard;
