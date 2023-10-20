import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import taskSlice from "./components/task/taskSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        task: taskSlice
    }
})