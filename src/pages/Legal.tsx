import AddressBar from "../components/AddressBar";
import Heading from "../components/Heading";
import LegalCard from "../components/LegalCard";

const legalSections = [
  {
    title: "1. Introduction",
    cards: [
      {
        title: "1.1 Our Terms & Conditions",
        content:
          "Here you can put any text that you think would be suitable and relevant to this particular section of the website.",
      },
      {
        title: "1.2 Collection of personal data",
        content:
          "This place is reserved for you to put some text content that you think would make sense here.",
      },
      { title: "1.3 Purpose of collection of personal data", content: "" },
      { title: "1.4 Usage of your personal data", content: "" },
    ],
  },
  {
    title: "2. Payment Terms",
    cards: [
      { title: "2.1 Different payment methods on our website", content: "" },
      {
        title: "2.2 Our right to cancel your payment",
        content:
          "Just put any text here that would be suitable for this particular section of the website.",
      },
    ],
  },
  {
    title: "3. Orders",
    cards: [
      { title: "3.1 Order processing on our website", content: "" },
      {
        title: "3.2 Dispatch and shipping times for different types of orders",
        content: "",
      },
      {
        title: "3.3 Return and refund policies for all online orders",
        content:
          "All you need to do is to put your own text here and that is going to be it, all done.",
      },
    ],
  },
  {
    title: "4. Changes",
    cards: [
      { title: "4.1 Our right to change Terms & Conditions", content: "" },
      {
        title: "4.2 Notice of change in Terms & Conditions",
        content:
          "This place is reserved for you to put some text content that you think would make sense here.",
      },
    ],
  },
];

function Legal() {
  return (
    <main>
      <AddressBar pages={["Home Page", "Categories", "Terms and Conditions"]} />
      <Heading title="Legal" content="Hygge - Terms &" className="md:hidden" />
      <Heading
        title="Legal"
        content="Hygge - Terms and"
        className="hidden md:block"
      />
      <p className="text-heading-md font-bold mb-14 md:mb-16 lg:text-heading-lg xl:mb-[4.5rem]">
        Conditions
      </p>

      <section className="flex flex-col gap-14 md:gap-16 xl:gap-36">
        {legalSections.map((section, index) => (
          <section key={index}>
            <p className="font-bold mb-10 text-2xl md:mb-12 lg:text-heading-md">
              {section.title}
            </p>
            <section className="grid grid-cols-1 gap-y-10 lg:gap-y-12 xl:grid-cols-2 xl:gap-y-18 xl:gap-x-24 xl:justify-between">
              {section.cards.map((card, idx) => (
                <LegalCard
                  key={idx}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </section>
          </section>
        ))}
      </section>
    </main>
  );
}

export default Legal;
