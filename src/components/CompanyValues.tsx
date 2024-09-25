import Heading from "./Heading";
import WhyUsCard from "./WhyUsCard";
import value from "../assets/value.svg";
import value2 from "../assets/why-us-3.svg";
import value3 from "../assets/why-us-2.svg";
import PillButton from "./PillButton";

function CompanyValues() {
  return (
    <section>
      <Heading
        title="Company Values"
        content="Our Core Values"
        className="text-center mb-14 md:mb-16"
      />

      <ul className="flex flex-col gap-14 md:gap-16 xl:flex-row xl:justify-between">
        <li>
          <WhyUsCard
            title="Great Innovation"
            content="We are always focusing on making all our products as innovative as possible."
            image={value}
          />
        </li>
        <li>
          <WhyUsCard
            title="High Quality"
            content="One of our main values is the quality of the products that we sell to the customers."
            image={value2}
          />
        </li>
        <li>
          <WhyUsCard
            title="Teamwork Matters"
            content="We believe that being a successful company is all about being a team."
            image={value3}
          />
        </li>
      </ul>

      <section className="text-center">
        <PillButton content="View Jobs" className="mt-14 md:mt-16 xl:mt-18" />
      </section>
    </section>
  );
}

export default CompanyValues;
