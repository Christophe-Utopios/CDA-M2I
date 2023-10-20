import { configureStore } from "@reduxjs/toolkit";
import todoItemsSlice from "./components/todoItemsSlice";

export default configureStore({
    reducer: {
        todos: todoItemsSlice
    }
})