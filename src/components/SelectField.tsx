import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent } from "react";
import clsx from "clsx";
import "./SelectField.scss";

interface SelectFieldProps {
  title: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

function SelectField({
  title,
  items,
  value,
  onChange,
  className,
}: SelectFieldProps) {
  return (
    <section className={className}>
      <p className="mb-4">{title}</p>
      <section className="relative">
        <select
          value={value}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onChange(e.target.value)
          }
          className={clsx(
            value === "" ? "text-dark-40%" : "font-semibold",
            "text-xl rounded-full border-2 border-accent py-4 ps-6 w-full cursor-pointer custom-select"
          )}
        >
          <option value="" className="text-dark">
            Select {title}
          </option>
          {items.map((item, index) => (
            <option key={index} value={item} className="text-dark">
              {item}
            </option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="absolute right-6 top-[36%] w-4 cursor-pointer"
        />
      </section>
    </section>
  );
}

export default SelectField;
