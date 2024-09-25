import clsx from "clsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface LegalCardProps {
  title: string;
  content: string;
}

function LegalCard({ title, content }: LegalCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <section className="flex justify-between gap-6 items-center">
        <p className="font-semibold text-xl lg:text-2xl">{title}</p>
        <section>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border-2 border-accent rounded-full py-3 px-4"
          >
            <FontAwesomeIcon
              icon={isOpen ? faAngleUp : faAngleDown}
              className="w-4"
            />
          </button>
        </section>
      </section>
      <p
        className={clsx(
          isOpen ? "max-h-screen translate-y-0" : "max-h-0 -translate-y-full",
          "transition-all duration-300 ease-in-out overflow-hidden mt-4"
        )}
      >
        {!content.includes("reviews page") ? (
          content
        ) : (
          <p>
            Please visit our{" "}
            <Link
              to="/"
              className="cursor-pointer underline underline-offset-4 font-semibold active:text-primary hover:text-primary"
            >
              reviews page
            </Link>{" "}
            to find out more about that.
          </p>
        )}
      </p>
    </section>
  );
}

export default LegalCard;
