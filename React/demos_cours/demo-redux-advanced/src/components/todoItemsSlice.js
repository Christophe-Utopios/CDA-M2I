import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../firebaseConfig";

export const fetchTodos = createAsyncThunk(
    "todoItems/fetchTodos",
    async () => {
        const response = await fetch(BASE_DB_URL + "/todoList.json")
        const data = await response.json()
        const todos = []
        for (const key in data){
            todos.push({id: key, ...data[key]})
        }
        return todos
    }
)

export const postTodo = createAsyncThunk(
    "todoItems/postTodo",
    async (newTodo) => {
        const response = await fetch(BASE_DB_URL + "/todoList.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        })
        const data = await response.json()
        return {
            id: data.name,
            ...newTodo
        }
    }
)

const todoItemsSlice = createSlice({
    name: "todoItems",
    initialState: {
        todos: []
    },
    reducers: {},
    /*
        .fulfilled -> L'action se déclenche si la requête se termine
        .rejected -> L'action se déclenche si la requête echoue
        .pending -> L'action se déclenche pendant la requête
    */
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload
            console.log(state.todos);
        })
        builder.addCase(postTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload)
        })
    }
})

export default todoItemsSlice.reducer