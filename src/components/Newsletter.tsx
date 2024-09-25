import Heading from "./Heading";
import PillButton from "./PillButton";

function Newsletter() {
  return (
    <section className="lg:bg-accent lg:rounded-picture lg:py-16 xl:py-24">
      <Heading
        title="Our Newsletter"
        content="Sign Up to our Newsletter"
        className="text-center mb-10 lg:mb-12"
      />

      <section className="flex flex-col gap-6 md:justify-center md:flex-row">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="rounded-full py-4 bg-accent text-xl ps-6 w-full md:w-112 lg:bg-white"
        />
        <PillButton content="Sign Up" className="w-fit" />
      </section>
    </section>
  );
}

export default Newsletter;
