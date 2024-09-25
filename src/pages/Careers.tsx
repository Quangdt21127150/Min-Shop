import clsx from "clsx";
import { useState } from "react";
import Heading from "../components/Heading";
import AddressBar from "../components/AddressBar";
import CareersFilter from "../components/CareersFilter";
import CareerCard from "../components/CareerCard";
import Dropdown from "../components/Dropdown";

const careersData = [
  {
    title: "Sr. Sales Manager",
    department: "Sales & Marketing",
    location: "San Francisco, California",
    salary: "$125k+",
  },
  {
    title: "Junior Marketing Designer",
    department: "Sales & Marketing",
    location: "Los Angeles, California",
    salary: "$55k+",
  },
  {
    title: "Digital Marketing Consultant",
    department: "Sales & Marketing",
    location: "Remote (US)",
    salary: "$85k+",
  },
  {
    title: "Marketing Manager (Sales)",
    department: "Sales & Marketing",
    location: "New York City, New York",
    salary: "$75k+",
  },
  {
    title: "Sr. Marketing Designer",
    department: "Sales & Marketing",
    location: "San Francisco, California",
    salary: "$150k+",
  },
];

function Careers() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    department: "",
  });

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const applyFilters = (
    title: string,
    location: string,
    department: string
  ) => {
    setFilters({ title, location, department });
  };

  const clearFilters = () => {
    setFilters({ title: "", location: "", department: "" });
  };

  const filteredCareers = careersData.filter((career) => {
    return (
      (!filters.title ||
        career.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (!filters.location || career.location === filters.location) &&
      (!filters.department || career.department === filters.department)
    );
  });

  return (
    <>
      <AddressBar pages={["Home Page", "Navigation", "Careers"]} />

      <Heading
        title="Join our Team"
        content="Explore the Careers"
        className="mb-14 md:mb-16 xl:mb-[4.5rem]"
      />

      <section className="justify-between xl:flex xl:gap-24">
        <Dropdown
          content="Filter By"
          isOpen={isOpen}
          onClick={toggleFilter}
          className="xl:hidden"
        />

        <section
          className={clsx(
            isOpen ? "max-h-screen translate-y-0" : "max-h-0 -translate-y-full",
            "transition-all duration-300 ease-in-out overflow-hidden xl:hidden"
          )}
        >
          <CareersFilter onApply={applyFilters} onClear={clearFilters} />
        </section>

        <section className="hidden w-fit h-fit border-2 border-accent rounded-picture p-14 xl:inline">
          <p className="font-semibold mb-12 md:text-heading-md">Filter By</p>
          <CareersFilter onApply={applyFilters} onClear={clearFilters} />
        </section>

        <ul className="flex flex-col gap-10 mt-14 md:mt-16 md:gap-12 xl:mt-0 xl:h-[53rem] xl:overflow-y-auto">
          {filteredCareers.map((career, index) => (
            <li key={index}>
              <CareerCard
                title={career.title}
                department={career.department}
                location={career.location}
                salary={career.salary}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Careers;
