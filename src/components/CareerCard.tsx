import PillButton from "./PillButton";

interface CareerCardProps {
  title: string;
  department: string;
  location: string;
  salary: string;
}
function CareerCard({ title, department, location, salary }: CareerCardProps) {
  return (
    <section className="border-2 border-accent rounded-picture p-6 md:p-14">
      <p className="font-bold text-xl md:text-heading-md">{title}</p>
      <article className="mt-4 mb-10 md:hidden">
        <p>{department} -</p>
        <p>
          {location} - {salary}
        </p>
      </article>
      <p className="hidden mt-6 mb-12 text-xl md:block">
        {department} - {location} - {salary}
      </p>
      <PillButton content="Apply" />
    </section>
  );
}

export default CareerCard;
