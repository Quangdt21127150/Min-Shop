import { useState } from "react";

interface CheckboxProps {
  title: string;
  initState: boolean;
}

function Checkbox({ title, initState }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(initState);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <section className="w-5 h-5 rounded-full border-[6px] bg-primary border-primary peer-checked:bg-white flex items-center justify-center transition-colors duration-300">
        <section className="w-2.5 h-2.5 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></section>
      </section>
      <span className="ms-4 md:text-xl">{title}</span>
    </label>
  );
}

export default Checkbox;
