import AddressBar from "../components/AddressBar";
import CompanyValues from "../components/CompanyValues";
import LearnMore from "../components/LearnMore";
import HowStarted from "../components/HowStarted";
import Newsletter from "../components/Newsletter";
import { UseScrollToTop } from "../hooks/useScrollToTop";

function About() {
  UseScrollToTop();

  return (
    <>
      <AddressBar pages={["Home Page", "Navigation", "About"]} />

      <section className="flex flex-col gap-26 md:gap-28 xl:gap-36">
        <LearnMore />
        <HowStarted />
        <CompanyValues />
        <Newsletter />
      </section>
    </>
  );
}

export default About;
