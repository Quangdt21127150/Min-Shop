import clsx from "clsx";
import Heading from "./Heading";
import ReviewCard from "./ReviewCard";
import AngleButton from "./AngleButton";
import { useState, useEffect } from "react";
import avatar from "../assets/avatar.svg";
import avatar2 from "../assets/avatar2.svg";

const reviews = [
  {
    name: "Amy Smith",
    content:
      "This is the best website I have ordered something from. I highly recommend.",
    image: avatar,
  },
  {
    name: "Anna Clarke",
    content:
      "It’s quite a nice product and I am really satisfied with the quality of it.",
    image: avatar2,
  },
  {
    name: "Anna Clarke",
    content:
      "It’s quite a nice product and I am really satisfied with the quality of it.",
    image: avatar2,
  },
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBorder, setIsBorder] = useState(window.innerWidth >= 1024);

  const handleRightClick = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsBorder(window.innerWidth >= 1024);
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="items-center rounded-picture lg:bg-accent lg:flex lg:pt-12 lg:pe-4 lg:pb-12 lg:px-12 lg:gap-16 xl:px-24 2xl:gap-40">
      <Heading
        title="Our Reviews"
        content="What our Customers are Saying"
        className="text-center lg:text-left lg:w-1/2"
      />

      <section className="flex flex-col lg:w-1/2">
        <section className="relative w-full h-full overflow-hidden">
          <section
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <section key={index} className="min-w-full">
                <ReviewCard
                  name={review.name}
                  content={review.content}
                  image={review.image}
                />
              </section>
            ))}
          </section>
        </section>

        <section className="flex justify-center gap-4 mt-8 mb-10 md:mt-10 lg:justify-start">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={clsx(
                currentIndex === index
                  ? "border-2 border-primary"
                  : "bg-primary",
                "w-3 h-3 rounded-full"
              )}
            />
          ))}
        </section>

        <AngleButton
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
          isBorder={isBorder}
          className="lg:justify-start"
        />
      </section>
    </section>
  );
}

export default Reviews;
