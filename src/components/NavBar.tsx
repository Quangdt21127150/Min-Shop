import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";
import searchImage from "../assets/search.png";
import cartImage from "../assets/cart.svg";
import activeCartImage from "../assets/active-cart.svg";
import profileImage from "../assets/profile.png";
import brandLightImage from "../assets/brand-light.png";
import brandDarkImage from "../assets/brand-dark.png";
import NavButton from "./NavButton";
import Popup from "./Popup";
import { useScrollBlock } from "../hooks/useScrollBlock";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowBlock] = useScrollBlock();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    isOpen ? blockScroll() : allowBlock();
  }, [isOpen]);

  return (
    <nav className="relative flex justify-between items-center mb-14 md:mb-16">
      <NavButton className="lg:hidden" onClick={toggleMenu} />
      <article className="gap-2 items-center hidden md:flex">
        <img src={logoImage} alt="Logo" className="w-9 h-9" />
        <p className="font-bold text-2xl">Hygge</p>
      </article>
      <img src={brandLightImage} alt="Brand" className="md:hidden" />
      <img src={brandDarkImage} alt="Brand" className="hidden md:hidden" />
      <NavButton className="hidden lg:block" onClick={toggleMenu} />
      <section className="flex gap-8 items-center">
        <button className="hidden md:block">
          <img src={searchImage} alt="Search" className="w-6" />
        </button>
        <Link to="/cart" className="cursor-pointer">
          <img src={cartImage} alt="Cart" className="h-7" />
          <img src={activeCartImage} alt="Cart" className="w-8 hidden" />
        </Link>
        <Link to="/login" className="hidden md:block cursor-pointer">
          <img src={profileImage} alt="Profile" className="w-6" />
        </Link>
      </section>

      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}

export default NavBar;
