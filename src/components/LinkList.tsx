import { Link } from "react-router-dom";

interface LinkListProps {
  heading: string;
  items: string[];
}

function LinkList({ heading, items }: LinkListProps) {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4 md:mb-6">{heading}</h2>
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={`${heading === "Categories" ? "/Categories" : ""}/${item}`}
              className="cursor-pointer active:text-primary hover:text-primary"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
