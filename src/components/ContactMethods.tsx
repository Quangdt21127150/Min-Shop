import instagramImage from "../assets/instagram.svg";
import twitterImage from "../assets/twitter.svg";
import facebookImage from "../assets/facebook.svg";
import clsx from "clsx";

interface ContactMethodsProps {
  inAside: boolean;
}

function ContactMethods({ inAside }: ContactMethodsProps) {
  return (
    <section className="flex gap-6 md:gap-4 items-center mb-12">
      <a
        href="https://www.instagram.com"
        className={clsx(
          inAside && "bg-transparent",
          "md:bg-accent md:p-3 rounded-full"
        )}
      >
        <img src={instagramImage} alt="Instagram" className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com"
        className={clsx(
          inAside && "bg-transparent",
          "md:bg-accent md:p-3 rounded-full"
        )}
      >
        <img src={twitterImage} alt="Twitter" className="w-6 h-6" />
      </a>
      <a
        href="https://www.facebook.com"
        className={clsx(
          inAside && "bg-transparent",
          "md:bg-accent md:p-3 rounded-full"
        )}
      >
        <img src={facebookImage} alt="Facebook" className="w-6 h-6" />
      </a>
    </section>
  );
}

export default ContactMethods;
