import clsx from "clsx";
import Heading from "./Heading";
import BlogCard from "./BlogCard";
import AngleButton from "./AngleButton";
import { useState } from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.svg";
import blog3 from "../assets/blog3.svg";
import blog4 from "../assets/blog4.svg";
import blog5 from "../assets/blog5.svg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";
import PillButton from "./PillButton";

const blogs = [
  {
    title: "Morning Skincare Routine: 10 Top Tips for you",
    category: "top tips",
    status: "recent",
    image: blog1,
  },
  {
    title: "New Collection is Out",
    category: "new in",
    status: "",
    image: blog2,
  },
  {
    title: "Always Stay Fresh",
    category: "how to",
    status: "popular",
    image: blog3,
  },
  {
    title: "Improve your Skin now",
    category: "masks",
    status: "",
    image: blog4,
  },
  {
    title: "Stay Safe in the Sun",
    category: "Sun Care",
    status: "",
    image: blog5,
  },
  {
    title: "Explore our Bestselling Products",
    category: "bestsellers",
    status: "",
    image: blog6,
  },
  {
    title: "5 Great Tips to Get that Perfect Skin",
    category: "top tips",
    status: "",
    image: blog7,
  },
];

function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightClick = () => {
    if (currentIndex < blogs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section>
      <Heading
        title="Our Blogs"
        content="Check Out our Blog"
        className="text-center mb-14 md:mb-16 lg:text-left xl:mb-[4.5rem]"
      />

      <section className="md:hidden">
        <BlogCard
          item={blogs[currentIndex]}
          className={clsx(
            currentIndex % 4 === 0 && "text-tertiary bg-tertiary-10%",
            currentIndex % 4 === 1 && "text-secondary bg-secondary-10%",
            currentIndex % 4 === 2 && "text-tertiary-2 bg-tertiary-2-10%",
            "text-primary bg-primary-10%"
          )}
        />
      </section>

      <ul className="hidden gap-16 md:flex md:flex-col lg:hidden">
        <li>
          <BlogCard item={blogs[0]} className="text-tertiary bg-tertiary-10%" />
        </li>

        <li>
          <ul className="grid grid-cols-2 gap-y-16 gap-x-12">
            {blogs.slice(1, 5).map((blog, index) => (
              <li key={index}>
                <BlogCard
                  item={blog}
                  className={clsx(
                    index % 4 === 0 && "text-secondary bg-secondary-10%",
                    index % 4 === 1 && "text-tertiary-2 bg-tertiary-2-10%",
                    index % 4 === 2 && "text-primary bg-primary-10%",
                    index % 4 === 3 && "text-tertiary bg-tertiary-10%"
                  )}
                />
              </li>
            ))}
          </ul>
        </li>

        <li>
          <BlogCard
            item={blogs[5]}
            className="text-secondary bg-secondary-10%"
          />
        </li>

        <li>
          <BlogCard
            item={blogs[6]}
            className="text-tertiary-2 bg-tertiary-2-10%"
          />
        </li>
      </ul>

      <ul className="hidden gap-16 flex-col lg:flex">
        <li>
          <ul className="flex gap-14">
            <li className="w-2/3">
              <BlogCard
                item={blogs[0]}
                className="text-tertiary bg-tertiary-10%"
              />
            </li>
            <li className="w-[31%]">
              <BlogCard
                item={blogs[1]}
                className="text-secondary bg-secondary-10%"
              />
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex gap-14">
            {blogs.slice(2, 5).map((blog, index) => (
              <li key={index} className="w-1/3">
                <BlogCard
                  item={blog}
                  className={clsx(
                    index % 4 === 0 && "text-tertiary-2 bg-tertiary-2-10%",
                    index % 4 === 1 && "text-primary bg-primary-10%",
                    index % 4 === 2 && "text-tertiary bg-tertiary-10%"
                  )}
                />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="flex gap-14">
            <li>
              <BlogCard
                item={blogs[5]}
                className="text-secondary bg-secondary-10%"
              />
            </li>
            <li>
              <BlogCard
                item={blogs[6]}
                className="text-tertiary-2 bg-tertiary-2-10%"
              />
            </li>
          </ul>
        </li>
      </ul>

      <AngleButton
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        className="mt-10 md:hidden"
      />

      <section className="text-center">
        <PillButton content="View All" className="mt-14 md:mt-16 xl:mt-18" />
      </section>
    </section>
  );
}

export default Blogs;
