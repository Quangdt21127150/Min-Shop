import { Link } from "react-router-dom";
import AddressBar from "../components/AddressBar";
import Heading from "../components/Heading";
import Newsletter from "../components/Newsletter";
import ReachUs from "../components/ReachUs";

function Contact() {
  return (
    <main>
      <AddressBar pages={["Home Page", "Categories", "Contact Us"]} />

      <section className="flex flex-col gap-26 md:gap-28 xl:gap-36">
        <Heading
          title="Ask Questions"
          content="We are always here to help you"
          className="md:w-3/5 xl:w-1/2"
        />

        <ul className="grid grid-cols-1 gap-14 md:gap-16 xl:grid-cols-2 xl:gap-y-18 xl:gap-x-24">
          <li>
            <p className="font-semibold text-2xl mb-4">Customer Service</p>
            <p>
              Please send us an email at{" "}
              <Link
                to="/"
                className="cursor-pointer underline underline-offset-4 font-semibold active:text-primary hover:text-primary"
              >
                customercare@hygge.com
              </Link>
            </p>
          </li>

          <li>
            <p className="font-semibold text-2xl mb-4">Large Orders</p>
            <p>
              If you are thinking of making a very large order, please feel free
              to contact us at{" "}
              <Link
                to="/"
                className="cursor-pointer underline underline-offset-4 font-semibold active:text-primary hover:text-primary"
              >
                sales@hygge.com
              </Link>{" "}
              and we will give you a special discount
            </p>
          </li>

          <li>
            <p className="font-semibold text-2xl mb-4">Public Relations</p>
            <p>
              You can contact our media team by sending an email{" "}
              <Link
                to="/"
                className="cursor-pointer underline underline-offset-4 font-semibold active:text-primary hover:text-primary"
              >
                media@hygge.com
              </Link>
            </p>
          </li>

          <li>
            <p className="font-semibold text-2xl mb-4">Other Enquiries</p>
            <p>
              For all of your other questions, please send us an email at{" "}
              <Link
                to="/"
                className="cursor-pointer underline underline-offset-4 font-semibold active:text-primary hover:text-primary"
              >
                general@hygge.com
              </Link>
            </p>
          </li>
        </ul>

        <ReachUs />

        <Newsletter />
      </section>
    </main>
  );
}

export default Contact;
