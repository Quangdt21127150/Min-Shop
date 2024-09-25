interface HeadingProps {
  title: string;
  content: string;
  className?: string;
}

function Heading({ title, content, className }: HeadingProps) {
  return (
    <article className={`flex flex-col gap-2 ${className}`}>
      <p className="font-semibold text-secondary">
        <i>- {title}</i>
      </p>
      <p className="text-heading-md lg:text-heading-lg font-bold">{content}</p>
    </article>
  );
}

export default Heading;
