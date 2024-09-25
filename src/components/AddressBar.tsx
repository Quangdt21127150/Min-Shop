import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface AddressBarProps {
  pages: string[];
}

function AddressBar({ pages }: AddressBarProps) {
  return (
    <section className="hidden gap-6 items-center mb-12 xl:flex">
      {pages.slice(0, pages.length - 1).map((page, index) => (
        <article key={index} className="flex gap-4 items-center">
          <p className="font-medium text-xl">{page}</p>
          <FontAwesomeIcon icon={faAngleRight} className="w-4" />
        </article>
      ))}

      <p className="font-medium text-xl">{pages[pages.length - 1]}</p>
    </section>
  );
}

export default AddressBar;
