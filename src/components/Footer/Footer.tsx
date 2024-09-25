import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./Footer.scss";
import logoImage from "../../assets/logo.png";
import sunImage from "../../assets/sun.png";
import moonImage from "../../assets/moon.png";
import brandLightImage from "../../assets/brand-light.png";
import Switch from "react-switch";
import ContactMethods from "../ContactMethods";
import LinkList from "../LinkList";

const legal = [
  "Terms of Service",
  "Privacy Policy",
  "Return Policy",
  "Shipping",
  "Data Protection",
];

const company = ["About", "Team", "Contact", "Careers", "Vision", "Culture"];

function Footer() {
  const [checked, setChecked] = useState(false);
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const categoriesName = categories.map((category) => category.name);

  const handleChange = () => setChecked(!checked);

  return (
    <footer className="grid grid-footer gap-14 mt-26 md:mt-28 md:w-3/4 lg:flex lg:justify-between lg:w-full xl:mt-36">
      <section className="flex flex-col contact">
        <section className="gap-2 items-center mb-6 hidden md:flex">
          <img src={logoImage} alt="Logo" className="w-7 h-7" />
          <p className="font-bold text-lg">Hygge</p>
        </section>
        <img
          src={brandLightImage}
          alt="Brand"
          className="md:hidden w-[4.75rem] h-8 mb-4"
        />
        <p className="mb-6 md:mb-8">&copy; 2020 - All rights reserved</p>
        <ContactMethods inAside={false} />
        <Switch
          checked={checked}
          onChange={handleChange}
          offColor="#F6F7FB"
          onColor="#F6F7FB"
          handleDiameter={24}
          offHandleColor="#01CA94"
          onHandleColor="#01CA94"
          uncheckedHandleIcon={
            <article className="flex justify-center items-center w-full h-full">
              <img
                src={sunImage}
                alt="Sun"
                className="w-2/3"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </article>
          }
          checkedHandleIcon={
            <article className="flex justify-center items-center w-full h-full">
              <img
                src={moonImage}
                alt="Sun"
                className="w-2/3"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </article>
          }
          uncheckedIcon={false}
          checkedIcon={false}
          height={32}
          width={56}
        />
      </section>
      <section className="categories">
        <LinkList heading="Categories" items={categoriesName} />
      </section>
      <section className="legal">
        <LinkList heading="Legal" items={legal} />
      </section>
      <section className="company">
        <LinkList heading="Company" items={company} />
      </section>
    </footer>
  );
}

export default Footer;
