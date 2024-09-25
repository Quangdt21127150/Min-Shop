import { useState } from "react";
import Dropdown from "../components/Dropdown";
import AddressBar from "../components/AddressBar";
import Heading from "../components/Heading";
import LegalCard from "../components/LegalCard";

const legalSections = [
  {
    title: "General",
    cards: [
      {
        title: "1. How do I place an order on your website?",
        content:
          "All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
      },
      {
        title: "2. What is your return policy?",
        content: "",
      },
      {
        title: "3. Do you offer an option to send a product as a gift?",
        content: "",
      },
    ],
  },
  {
    title: "Checkout",
    cards: [
      { title: "1. What payment methods do you accept?", content: "" },
      {
        title: "2. Do you offer an option to pay for the product over time?",
        content:
          "Yes, we do. We have partnered with a few companies that offer such option.",
      },
    ],
  },
  {
    title: "Shipping",
    cards: [
      { title: "1. Do I have to pay for the shipping?", content: "" },
      {
        title: "2. How long does it take for you to dispatch my order?",
        content: "",
      },
      {
        title: "3. What shipping company do you use?",
        content: "",
      },
      {
        title: "4. How long does it usually take for my order to arrive?",
        content: "",
      },
    ],
  },
  {
    title: "Discounts",
    cards: [
      {
        title: "1. Do you offer any discounts on your website?",
        content: "",
      },
    ],
  },
  {
    title: "Other",
    cards: [
      {
        title: "1. Where can I find the reviews?",
        content: "Please visit our reviews page to find out more about that.",
      },
      {
        title: "2. How do I contact you?",
        content: "",
      },
    ],
  },
];

function Faq() {
  const [isFilter, setIsFilter] = useState(false);
  const [isTopic, setIsTopic] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isSort, setIsSort] = useState(false);

  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };

  const toggleTopic = () => {
    setIsTopic(!isTopic);
  };

  const toggleCategory = () => {
    setIsCategory(!isCategory);
  };

  const toggleSort = () => {
    setIsSort(!isSort);
  };

  return (
    <main>
      <AddressBar pages={["Home Page", "Categories", "FAQ Page"]} />
      <Heading title="Find the Answers" content="Frequently Asked" />
      <p className="text-heading-md font-bold mb-14 md:mb-16 lg:text-heading-lg xl:mb-[4.5rem]">
        Questions
      </p>

      <section className="flex justify-between">
        <Dropdown
          content="Filter By"
          isOpen={isFilter}
          onClick={toggleFilter}
          className="lg:hidden"
        />

        <section className="hidden gap-8 lg:flex">
          <Dropdown content="Topic" isOpen={isTopic} onClick={toggleTopic} />
          <Dropdown
            content="Category"
            isOpen={isCategory}
            onClick={toggleCategory}
          />
        </section>

        <Dropdown content="Sort By" isOpen={isSort} onClick={toggleSort} />
      </section>

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

export default Faq;
