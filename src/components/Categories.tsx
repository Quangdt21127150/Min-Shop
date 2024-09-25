import Heading from "./Heading";
import AngleButton from "./AngleButton";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(0);

  useEffect(() => {
    const updateVisibleCategories = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCategories(8);
      } else if (window.innerWidth >= 1024) {
        setVisibleCategories(6);
      } else if (window.innerWidth < 768) {
        setVisibleCategories(2);
      } else {
        setVisibleCategories(0);
      }

      setCurrentIndex(0);
    };

    window.addEventListener("resize", updateVisibleCategories);
    updateVisibleCategories();

    return () => {
      window.removeEventListener("resize", updateVisibleCategories);
    };
  }, []);

  const handleRightClick = () => {
    if (
      currentIndex <
      categories.length - (visibleCategories ? visibleCategories : 1)
    ) {
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
      <section className="flex justify-between mb-14 md:mb-12 lg:mb-16">
        <Heading
          title="The Categories"
          content="Browse by Category"
          className="text-center md:text-left"
        />

        <section className="hidden items-end md:flex">
          <AngleButton
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
          />
        </section>
      </section>

      <section className="relative overflow-hidden">
        <ul className="flex justify-between md:gap-8 md:justify-normal lg:gap-0 lg:justify-between">
          {categories
            .slice(
              currentIndex,
              visibleCategories
                ? currentIndex + visibleCategories
                : categories.length
            )
            .map((item, index) => (
              <li key={index}>
                <Link
                  to={`/Categories/${item.name}`}
                  className="cursor-pointer"
                >
                  <CategoryCard item={item} />
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <AngleButton
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        className="mt-10 md:hidden"
      />
    </section>
  );
}

export default Categories;
