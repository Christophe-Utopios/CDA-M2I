import { createBrowserRouter } from "react-router-dom";
import TodoList from "./routes/TodoList";
import AddTodo from "./routes/AddTodo";
import TodoDetail from "./routes/TodoDetail";


const router = createBrowserRouter([
    {
        path : "/",
        element : <TodoList />
    },
    {
        path : "/add",
        element : <AddTodo />
    },
    {
        path : "/detail/:id",
        element : <TodoDetail />
    }
])

export default router