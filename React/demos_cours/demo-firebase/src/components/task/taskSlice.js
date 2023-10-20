import {createSlice} from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    }
})

export const {addTask} = taskSlice.actions
export default taskSlice.reducer