import {configureStore} from "@reduxjs/toolkit"
import TaskSlice from "./components/TaskSlice"

// Ici nous rassemblons toutes les slices

export default configureStore({
    reducer: {
        task: TaskSlice,
        // Possibilité d'importer d'autres reducer
    }
})