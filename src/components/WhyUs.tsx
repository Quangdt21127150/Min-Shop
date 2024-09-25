import Heading from "./Heading";
import WhyUsCard from "./WhyUsCard";
import why_us from "../assets/why-us.svg";
import why_us_2 from "../assets/why-us-2.svg";
import why_us_3 from "../assets/why-us-3.svg";

function WhyUs() {
  return (
    <section>
      <Heading
        title="Why Us"
        content="Why People Choose Us"
        className="text-center mb-14 md:mb-16"
      />

      <ul className="flex flex-col gap-14 md:gap-16 lg:flex-row lg:justify-between">
        <li>
          <WhyUsCard
            title="Easy Returns"
            content="Our return policy is simple and that is why customers love our shop."
            image={why_us}
          />
        </li>
        <li>
          <WhyUsCard
            title="Customer Service"
            content="We offer amazing customer service no matter what happens."
            image={why_us_2}
          />
        </li>
        <li className="lg:hidden xl:block">
          <WhyUsCard
            title="High Quality"
            content="All of our products go through very strict inspection before we dispatch them."
            image={why_us_3}
          />
        </li>
      </ul>

      <article className="hidden mt-4 w-1/2 mx-auto lg:block xl:hidden">
        <WhyUsCard
          title="High Quality"
          content="All of our products go through very strict inspection before we dispatch them."
          image={why_us_3}
        />
      </article>
    </section>
  );
}

export default WhyUs;
