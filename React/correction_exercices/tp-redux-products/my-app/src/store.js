import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./components/products/productSlice";

export default configureStore({
    reducer: {
        products: productSlice
    }
})