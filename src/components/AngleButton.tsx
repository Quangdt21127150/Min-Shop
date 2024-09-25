import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface AngleButtonProps {
  handleLeftClick: () => void;
  handleRightClick: () => void;
  isBorder?: boolean;
  className?: string;
}
function AngleButton({
  handleLeftClick,
  handleRightClick,
  isBorder,
  className,
}: AngleButtonProps) {
  return (
    <section className={`flex gap-4 justify-center ${className}`}>
      <button
        className={clsx(
          isBorder && "border-2 border-dark",
          "bg-accent py-3 px-4 rounded-full"
        )}
        onClick={handleLeftClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="w-4" />
      </button>
      <button
        className={clsx(
          isBorder && "border-2 border-dark",
          "bg-accent py-3 px-4 rounded-full"
        )}
        onClick={handleRightClick}
      >
        <FontAwesomeIcon icon={faAngleRight} className="w-4" />
      </button>
    </section>
  );
}

export default AngleButton;
