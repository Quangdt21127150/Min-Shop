import { createSlice } from "@reduxjs/toolkit";
import cate1 from "../assets/cate1.svg";
import cate2 from "../assets/cate2.svg";
import cate3 from "../assets/cate3.svg";
import cate4 from "../assets/cate4.svg";
import cate5 from "../assets/cate5.svg";
import cate6 from "../assets/cate6.svg";
import cate7 from "../assets/cate7.svg";
import cate8 from "../assets/cate8.svg";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      { name: "On Sale", image: cate1 },
      { name: "Featured", image: cate2 },
      { name: "Masks", image: cate3 },
      { name: "Eye Care", image: cate4 },
      { name: "Moisturizers", image: cate5 },
      { name: "Treatments", image: cate6 },
      { name: "Night Care", image: cate7 },
      { name: "Sun Care", image: cate8 },
    ],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { setCategories, addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
