import Header from "../components/Header";
import Categories from "../components/Categories";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";
import Reviews from "../components/Reviews";
import Blogs from "../components/Blogs";
import Newsletter from "../components/Newsletter";
import { UseScrollToTop } from "../hooks/useScrollToTop";
function Home() {
  UseScrollToTop();

  return (
    <section className="flex flex-col gap-26 md:gap-28">
      <Header />
      <Categories />
      <Products />
      <WhyUs />
      <Reviews />
      <Blogs />
      <section className="hidden md:block">
        <Newsletter />
      </section>
    </section>
  );
}

export default Home;
