import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/product1.svg";
import product2 from "../assets/product2.svg";
import product3 from "../assets/product3.svg";
import product4 from "../assets/product4.svg";
import product5 from "../assets/product5.svg";
import product6 from "../assets/product6.svg";
import product7 from "../assets/product7.svg";
import product8 from "../assets/product8.svg";
import product9 from "../assets/product9.svg";
import product10 from "../assets/product10.svg";
import product11 from "../assets/product11.svg";
import product12 from "../assets/product12.svg";
import product13 from "../assets/product13.svg";
import product14 from "../assets/product14.svg";
import product15 from "../assets/product15.svg";
import product16 from "../assets/product16.svg";
import product17 from "../assets/product17.svg";
import product18 from "../assets/product18.svg";
import product19 from "../assets/product19.svg";
import product20 from "../assets/product20.svg";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        name: "Sun Cream",
        status: "20% off",
        price: 20,
        old_price: 30,
        category: "Sun Care",
        image: product1,
        align: "w-2/3",
      },
      {
        name: "Night Eye Cream",
        status: "50% off",
        price: 50,
        old_price: 100,
        category: "Eye Care",
        image: product2,
        align: "w-[63%]",
      },
      {
        name: "Acne Skin Gel",
        status: "",
        price: 25,
        old_price: 0,
        category: "Treatments",
        image: product3,
        align: "w-[60%]",
      },
      {
        name: "Dry Skin Rescue",
        status: "",
        price: 59,
        old_price: 0,
        category: "Moisturizers",
        image: product4,
        align: "w-2/3",
      },
      {
        name: "Body Protection",
        status: "",
        price: 32,
        old_price: 0,
        category: "Treatments",
        image: product5,
        align: "w-[60%]",
      },
      {
        name: "All In One Gel",
        status: "",
        price: 79,
        old_price: 0,
        category: "Featured",
        image: product6,
        align: "w-2/3",
      },
      {
        name: "Deep Treatment",
        status: "5% off",
        price: 17,
        old_price: 22,
        category: "On Sale",
        image: product7,
        align: "mt-[26%] w-3/4",
      },
      {
        name: "Morning Shine",
        status: "",
        price: 14,
        old_price: 0,
        category: "Night Care",
        image: product8,
        align: "w-[63%]",
      },
      {
        name: "After Shower Gel",
        status: "new in",
        price: 78,
        old_price: 0,
        category: "Eye Care",
        image: product9,
        align: "w-3/4",
      },
      {
        name: "Eye Mask Gel",
        status: "15% off",
        price: 21,
        old_price: 26,
        category: "Eye Care",
        image: product10,
        align: "w-[64%]",
      },
      {
        name: "Shiny Eyes",
        status: "",
        price: 95,
        old_price: 0,
        category: "Eye Care",
        image: product11,
        align: "w-[60%]",
      },
      {
        name: "Morning Cream",
        status: "",
        price: 12,
        old_price: 0,
        category: "Eye Care",
        image: product12,
        align: "w-2/3",
      },
      {
        name: "Tired Eyes Cream",
        status: "20% off",
        price: 56,
        old_price: 68,
        category: "Eye Care",
        image: product13,
        align: "w-[60%]",
      },
      {
        name: "Visible Glow",
        status: "",
        price: 17,
        old_price: 0,
        category: "Eye Care",
        image: product14,
        align: "w-[60%]",
      },
      {
        name: "Before Bed Cream",
        status: "75% off",
        price: 30,
        old_price: 129,
        category: "Eye Care",
        image: product15,
        align: "w-[63%]",
      },
      {
        name: "Extra Shine Gel",
        status: "",
        price: 86,
        old_price: 0,
        category: "Eye Care",
        image: product16,
        align: "w-2/3",
      },
      {
        name: "Sleepless Night",
        status: "",
        price: 97,
        old_price: 0,
        category: "Eye Care",
        image: product17,
        align: "w-[60%]",
      },
      {
        name: "Better Eyes",
        status: "10% off",
        price: 32,
        old_price: 35,
        category: "Eye Care",
        image: product18,
        align: "w-[60%]",
      },
      {
        name: "Day Eye Cream",
        status: "",
        price: 180,
        old_price: 0,
        category: "Eye Care",
        image: product19,
        align: "w-[63%]",
      },
      {
        name: "After Sleep Gel",
        status: "",
        price: 45,
        old_price: 0,
        category: "Eye Care",
        image: product20,
        align: "w-[63%]",
      },
    ],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
