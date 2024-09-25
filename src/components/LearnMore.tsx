import Heading from "../components/Heading";
import about1 from "../assets//about1.jpg";
import about1bis from "../assets/blog2.svg";

function LearnMore() {
  return (
    <section>
      <Heading
        title="Learn More"
        content="All About Us"
        className="mb-14 md:mb-16 xl:mb-[4.5rem]"
      />

      <article className="aspect-square rounded-picture md:hidden">
        <img src={about1bis} alt="About" />
      </article>
      <img
        src={about1}
        alt="About"
        className="hidden rounded-picture md:block"
      />
    </section>
  );
}

export default LearnMore;
