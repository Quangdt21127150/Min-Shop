import { useState } from "react";
import PillButton from "./PillButton";
import SelectField from "./SelectField";
import TextField from "./TextField";
import PillButton2 from "./PillButton2";

interface CareersFilterProps {
  onApply: (title: string, location: string, department: string) => void;
  onClear: () => void;
}

const location = [
  "San Francisco, California",
  "Los Angeles, California",
  "Remote (US)",
  "New York City, New York",
];
const department = ["Sales & Marketing"];

function CareersFilter({ onApply, onClear }: CareersFilterProps) {
  const [title, setTitle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleApply = () => {
    onApply(title, selectedLocation, selectedDepartment);
  };

  const handleClear = () => {
    setTitle("");
    setSelectedLocation("");
    setSelectedDepartment("");
    onClear();
  };

  return (
    <section>
      <TextField
        title="Job Title"
        placeholder="Job Title"
        type="text"
        className="mb-12"
        value={title}
        onChange={setTitle}
      />
      <SelectField
        title="Location"
        items={location}
        className="mb-12"
        value={selectedLocation}
        onChange={setSelectedLocation}
      />
      <SelectField
        title="Department"
        items={department}
        className="mb-20"
        value={selectedDepartment}
        onChange={setSelectedDepartment}
      />
      <PillButton
        content="Apply Filters"
        className="mb-8 w-full"
        onClick={handleApply}
      />
      <PillButton2
        content="Clear All"
        className="w-full"
        onClick={handleClear}
      />
    </section>
  );
}

export default CareersFilter;
