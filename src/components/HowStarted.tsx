import Heading from "../components/Heading";
import about2 from "../assets/about2.jpg";
import about2bis from "../assets/about2bis.svg";
import about2bisbis from "../assets/about2bisbis.svg";

function HowStarted() {
  return (
    <section>
      <article className="flex flex-col xl:flex-row xl:gap-30 xl:mx-24">
        <article className="flex flex-col gap-14 md:gap-16 xl:gap-24">
          <Heading
            title="How it has Started"
            content="How and When it has All Started"
            className="text-center xl:text-left xl:w-114"
          />

          <img
            src={about2}
            alt="About"
            className="hidden rounded-picture md:block xl:hidden"
          />

          <article className="aspect-square rounded-picture md:hidden">
            <img src={about2bis} alt="About" />
          </article>
          <img
            src={about2bisbis}
            alt="About"
            className="hidden rounded-picture w-114 xl:block"
          />
        </article>

        <ul className="ms-5 text-xl mt-14 md:mt-16 lg:text-2xl xl:mt-8 xl:w-120">
          <li className="list-disc text-primary font-semibold mb-4 lg:mb-8">
            Natural Ingredients Only
          </li>

          <li className="mb-14 lg:mb-16 xl:mb-12">
            10 years ago, when one of the co-founders came up with the idea of
            making skincare and beauty products using only natural ingredients,
            he did not even think twice.
          </li>

          <li className="list-disc text-primary font-semibold mb-4 lg:mb-8">
            Affordable Pricing Strategy
          </li>

          <li>
            One of our main goals from the start was to offer high quality
            products that would also have affordable prices. We just can't
            believe that we have finally achieved this and now we are proud of
            it.
          </li>
        </ul>
      </article>
    </section>
  );
}

export default HowStarted;
