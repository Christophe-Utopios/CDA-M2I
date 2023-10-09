import { createContext, Dispatch, SetStateAction } from "react";
import Todo from "../models/Todo";

export type TodoContextType = {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

export const TodoContext = createContext<TodoContextType | null>(null)