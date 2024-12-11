import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/CartSlice';
import CategoryReducer from '../features/category/CategorySlice';
import  foodCategorySliceReducer  from "../features/foodCategory/foodCategory";
import searchReducer from "../features/search/searchSlice";
export const store = configureStore({
    reducer:{
        cart: cartReducer,
        category: CategoryReducer,
        foodCategory:foodCategorySliceReducer,
        search:searchReducer
    }
});