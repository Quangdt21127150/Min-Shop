import Heading from "./Heading";
import PillButton from "./PillButton";
import productImage from "../assets/product0.svg";
function Header() {
  return (
    <header className="items-center rounded-picture lg:flex lg:pt-12 lg:pe-4 lg:pb-6 lg:ps-12 lg:bg-accent">
      <section className="mb-10 md:mb-12 lg:mb-0">
        <Heading
          title="Skincare Products"
          content="We Offer the Best Products for your Skin"
        />
        <PillButton content="Shop Now" className="mt-6 md:mt-10" />
      </section>
      <article className="px-2 pt-[3.125rem] pb-10 bg-accent rounded-picture md:px-22 md:pt-4 md:pb-0 lg:hidden">
        <img src={productImage} alt="Product" className="w-full" />
      </article>
      <img src={productImage} alt="Product" className="hidden w-1/2 lg:block" />
    </header>
  );
}

export default Header;
