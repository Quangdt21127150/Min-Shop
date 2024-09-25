import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownProps {
  content: string;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}
function Dropdown({ content, isOpen, onClick, className }: DropdownProps) {
  return (
    <section
      className={`w-fit flex gap-4 py-3 px-4 rounded-full border-2 border-accent mb-14 md:mb-16 md:gap-6 md:py-4 md:px-6 ${className}`}
    >
      <p className="font-bold md:text-xl">{content}</p>
      <button onClick={onClick}>
        <FontAwesomeIcon
          icon={isOpen ? faAngleUp : faAngleDown}
          className="w-4"
        />
      </button>
    </section>
  );
}

export default Dropdown;
