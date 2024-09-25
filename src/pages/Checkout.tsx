import clsx from "clsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import AddressBar from "../components/AddressBar";
import Heading from "../components/Heading";
import CheckoutCard from "../components/CheckoutCard";
import PillButton from "../components/PillButton";
import PillButton2 from "../components/PillButton2";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";

function Checkout() {
  const products = useSelector((state: RootState) => state.products.products);

  const [buyProducts, setBuyProducts] = useState([
    { product: products[9], volumn: "60 g", quantity: 1 },
    { product: products[18], volumn: "510 ml", quantity: 1 },
  ]);

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [password, setPassword] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const deleteProduct = (index: number) => {
    setBuyProducts((prevProducts) =>
      prevProducts.filter((_, i) => i !== index)
    );
  };

  const nextStep = () => {
    setStep(step < 4 ? step + 1 : 4);
  };

  const setCurrentStep = (index: number) => {
    setStep(index);
  };

  const total = buyProducts.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const formatCardNumber = (value: string) => {
    value = value.replace(/\s+/g, "");

    if (value.length > 0) {
      value = value.match(/.{1,4}/g)?.join(" ") || value;
    }

    return value;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCardNumber = formatCardNumber(e.target.value);
    setCardNumber(formattedCardNumber);
  };

  return (
    <>
      <AddressBar
        pages={["Home Page", "Categories", "Shopping Cart", "Checkout"]}
      />

      <article className="flex flex-col gap-14 md:gap-16 xl:gap-[4.5rem]">
        <Heading title="Almost There" content="Checkout" />

        <article className="flex gap-1 items-center">
          <button
            className="font-semibold text-sm rounded-full bg-primary text-white px-[7.5px] md:px-[1.125rem] md:py-2 md:text-xl"
            onClick={() => setCurrentStep(1)}
          >
            1
          </button>
          <span className="w-16 h-[2px] bg-primary rounded-[8px] md:w-32" />
          <button
            className={clsx(
              step >= 2 && "bg-primary text-white",
              "font-semibold text-sm rounded-full border-2 border-accent px-[6.25px] md:px-4 md:py-2 md:text-xl"
            )}
            onClick={() => setCurrentStep(2)}
          >
            2
          </button>
          <span
            className={clsx(
              step >= 2 && "bg-primary",
              "w-16 h-[2px] bg-accent rounded-[8px] md:w-32"
            )}
          />
          <button
            className={clsx(
              step >= 3 && "bg-primary text-white",
              "font-semibold text-sm rounded-full border-2 border-accent px-[6.5px] md:px-4 md:py-2 md:text-xl"
            )}
            onClick={() => setCurrentStep(3)}
          >
            3
          </button>
          <span
            className={clsx(
              step >= 3 && "bg-primary",
              "w-16 h-[2px] bg-accent rounded-[8px] md:w-32"
            )}
          />
          <button
            className={clsx(
              step === 4 && "bg-primary text-white",
              "font-semibold text-sm rounded-full border-2 border-accent px-[7px] md:px-4 md:py-2 md:text-xl"
            )}
            onClick={() => setCurrentStep(4)}
          >
            4
          </button>
        </article>

        <article className="flex flex-col gap-10 md:gap-12 xl:flex-row xl:gap-24">
          {step === 1 ? (
            <article className="rounded-picture border-2 border-accent p-6 md:p-14 xl:w-1/2">
              <article className="flex flex-col gap-10 md:gap-12">
                <p className="font-semibold text-xl md:text-heading-md">
                  Details
                </p>

                <TextField
                  title="Email Address"
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={setEmail}
                />

                <TextField
                  title="Password"
                  placeholder="************"
                  type="password"
                  value={password}
                  onChange={setPassword}
                />
              </article>

              <article className="flex flex-col gap-4 mt-14 md:gap-6 md:mt-20">
                <PillButton
                  content="Continue"
                  onClick={nextStep}
                  className="w-full"
                />
                <PillButton2 content="Guest Checkout" className="w-full" />
              </article>
            </article>
          ) : step === 2 ? (
            <article className="rounded-picture border-2 border-accent p-6 md:p-14 xl:w-1/2">
              <article className="flex flex-col gap-10 md:gap-12">
                <p className="font-semibold text-xl md:text-heading-md">
                  Shipping Details
                </p>

                <TextField
                  title="Full Name"
                  placeholder="Full Name"
                  type="text"
                  value={name}
                  onChange={setName}
                />

                <TextField
                  title="Street Name"
                  placeholder="Street Name"
                  type="text"
                  value={streetName}
                  onChange={setStreetName}
                />

                <article className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-2">
                  <TextField
                    title="House Number"
                    placeholder="123"
                    type="text"
                    value={houseNumber}
                    onChange={setHouseNumber}
                  />

                  <TextField
                    title="City"
                    placeholder="San Francisco"
                    type="text"
                    value={city}
                    onChange={setCity}
                  />

                  <TextField
                    title="Country"
                    placeholder="USA"
                    type="text"
                    value={country}
                    onChange={setCountry}
                  />

                  <TextField
                    title="ZIP Code"
                    placeholder="123 987"
                    type="text"
                    value={zip}
                    onChange={setZip}
                  />
                </article>
              </article>

              <PillButton
                content="Continue"
                onClick={nextStep}
                className="w-full mt-14 md:mt-20"
              />
            </article>
          ) : step === 3 ? (
            <article className="rounded-picture border-2 border-accent p-6 md:p-14 xl:w-1/2">
              <article className="flex flex-col gap-10 md:gap-12">
                <p className="font-semibold text-xl md:text-heading-md">
                  Shipping Details
                </p>

                <Checkbox title="Same as shipping address" initState={true} />
              </article>

              <PillButton
                content="Continue"
                onClick={nextStep}
                className="w-full mt-14 md:mt-20"
              />
            </article>
          ) : (
            <article className="rounded-picture border-2 border-accent p-6 md:p-14 xl:w-1/2">
              <article className="flex flex-col gap-10 md:gap-12">
                <p className="font-semibold text-xl md:text-heading-md">
                  Payment Details
                </p>

                <article>
                  <p className="mb-4">Card Number</p>
                  <input
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={cardNumber}
                    maxLength={19}
                    onChange={handleCardNumberChange}
                    className="text-xl font-semibold placeholder:font-normal rounded-full border-2 border-accent focus:border-primary py-4 px-6 w-full"
                  />
                </article>

                <article className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-2">
                  <TextField
                    title="Expiry Date"
                    placeholder="MM/DD"
                    type="text"
                    value={expiryDate}
                    onChange={setExpiryDate}
                  />

                  <TextField
                    title="CVV"
                    placeholder="123"
                    type="text"
                    value={cvv}
                    onChange={setCVV}
                  />

                  <TextField
                    title="Country"
                    placeholder="USA"
                    type="text"
                    value={country}
                    onChange={setCountry}
                  />

                  <TextField
                    title="ZIP Code"
                    placeholder="123 987"
                    type="text"
                    value={zip}
                    onChange={setZip}
                  />
                </article>
              </article>

              <PillButton
                content="Place Order"
                className="w-full mt-14 md:mt-20"
              />
            </article>
          )}

          <article className="h-fit rounded-picture border-2 border-accent p-6 md:p-14 xl:w-1/2">
            <p className="font-semibold text-xl mb-10 md:mb-12 md:text-heading-md">
              My Cart
            </p>

            <ul className="flex flex-col gap-10 md:gap-12">
              {buyProducts.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                buyProducts.map((item, index) => (
                  <li key={index}>
                    <CheckoutCard
                      item={item.product}
                      volumn={item.volumn}
                      onDelete={() => deleteProduct(index)}
                    />
                  </li>
                ))
              )}
            </ul>

            <article className="flex justify-between font-semibold mt-10 md:mt-12">
              <p className="md:text-2xl">Total:</p>
              <p className="md:text-2xl">${total}</p>
            </article>

            <PillButton2
              content="Edit Cart"
              className="w-full mt-14 md:mt-20"
            />
          </article>
        </article>
      </article>
    </>
  );
}

export default Checkout;
