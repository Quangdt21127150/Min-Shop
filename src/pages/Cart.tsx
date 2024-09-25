import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import AddressBar from "../components/AddressBar";
import Heading from "../components/Heading";
import BuyProductCard from "../components/BuyProductCard";
import PillButton from "../components/PillButton";
import PillButton2 from "../components/PillButton2";
import Newsletter from "../components/Newsletter";

function Cart() {
  const products = useSelector((state: RootState) => state.products.products);

  const [buyProducts, setBuyProducts] = useState([
    { product: products[16], volumn: "10 g", quantity: 1 },
    { product: products[12], volumn: "75 g", quantity: 1 },
  ]);

  const clearAllProducts = () => {
    setBuyProducts([]);
  };

  const deleteProduct = (index: number) => {
    setBuyProducts((prevProducts) =>
      prevProducts.filter((_, i) => i !== index)
    );
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    setBuyProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const subtotal = buyProducts.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax + 15;

  return (
    <>
      <AddressBar pages={["Home Page", "Categories", "Shopping Cart"]} />
      <section className="flex flex-col gap-6 mb-14 md:mb-16 md:flex-row md:gap-0 md:justify-between md:items-center xl:mb-[4.5rem]">
        <Heading title="Your Cart" content="Shopping Cart" />
        <PillButton2
          content="Clear All"
          className="w-fit"
          onClick={clearAllProducts}
        />
      </section>

      <article className="flex flex-col justify-between gap-10 mb-26 md:mb-28 md:gap-12 xl:flex-row xl:mb-36">
        <ul className="flex flex-col gap-10 md:gap-12 xl:w-[65%]">
          {buyProducts.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            buyProducts.map((item, index) => (
              <li key={index}>
                <BuyProductCard
                  item={item.product}
                  volumn={item.volumn}
                  quantity={item.quantity}
                  onChangeQuantity={(newQuantity) =>
                    updateQuantity(index, newQuantity)
                  }
                  onDelete={() => deleteProduct(index)}
                />
              </li>
            ))
          )}
        </ul>

        <article className="h-fit rounded-picture border-2 border-accent p-6 md:p-14 lg:ps-14 xl:p-14 xl:w-[35%]">
          <p className="font-semibold text-xl mb-10 md:mb-12 md:text-heading-md">
            Cart Total
          </p>
          <article className="grid grid-cols-1 gap-10 md:gap-12 lg:gap-x-24 lg:grid-cols-2 xl:grid-cols-1 xl:gap-12">
            <article className="flex justify-between">
              <p className="md:text-2xl">Subtotal:</p>
              <p className="md:text-2xl">${subtotal}</p>
            </article>
            <article className="flex justify-between">
              <p className="md:text-2xl">Tax:</p>
              <p className="md:text-2xl">${tax.toFixed(1)}</p>
            </article>
            <article className="flex justify-between">
              <p className="md:text-2xl">Shipping:</p>
              <p className="md:text-2xl">$15</p>
            </article>
            <article className="flex justify-between font-semibold">
              <p className="md:text-2xl">Total:</p>
              <p className="md:text-2xl">${total}</p>
            </article>
          </article>

          <Link to="/checkout">
            <PillButton
              content="Checkout"
              className="mt-14 w-full md:mt-20 lg:mt-12 lg:w-fit xl:mt-20 xl:w-full"
            />
          </Link>
        </article>
      </article>

      <Newsletter />
    </>
  );
}

export default Cart;
