import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
import logoImage from "../assets/logo.png";
import searchImage from "../assets/search.png";
import cartImage from "../assets/cart.svg";
import activeCartImage from "../assets/active-cart.svg";
import profileImage from "../assets/profile.png";
import brandLightImage from "../assets/brand-light.png";
import brandDarkImage from "../assets/brand-dark.png";
import ExitButton from "./ExitButton";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function Popup({ isOpen, onClose }: PopupProps) {
  // const categories = useSelector(
  //   (state: RootState) => state.categories.categories
  // );

  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location]);

  return (
    <aside
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-500 ease-in-out px-8 pt-8 pb-14 pd:px-10 pd:pb-8 lg:px-24 lg:py-12`}
    >
      <nav className="relative flex justify-between items-center mb-14 md:mb-16">
        <ExitButton className="lg:hidden" onClick={onClose} />
        <article className="gap-2 items-center hidden md:flex">
          <img src={logoImage} alt="Logo" className="w-9 h-9" />
          <p className="font-bold text-2xl">Hygge</p>
        </article>
        <img src={brandLightImage} alt="Brand" className="md:hidden" />
        <img src={brandDarkImage} alt="Brand" className="hidden md:hidden" />
        <ExitButton className="hidden lg:block" onClick={onClose} />
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
      </nav>

      <ul className="flex flex-col items-center gap-6 text-2xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-primary"
                : "cursor-pointer hover:text-primary"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <button className="flex items-center gap-4 cursor-pointer active:text-primary hover:text-primary">
            Categories
            <FontAwesomeIcon icon={faAngleRight} className="w-4" />
          </button>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-primary"
                : "cursor-pointer hover:text-primary"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-primary"
                : "cursor-pointer hover:text-primary"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-primary"
                : "cursor-pointer hover:text-primary"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Popup;
