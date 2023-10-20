import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products : []
    },
    reducers : {
        addProduct: (state, action) => {
            const newProduct = {
                id: Date.now(),
                name: action.payload.name,
                price: action.payload.price
            }

            state.products.push(newProduct)
            // state.products.push(action.payload)
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id)
            if (index != -1) {
                state.products[index] = action.payload
            }
        }
    }
})

export const {addProduct, deleteProduct, updateProduct} = productSlice.actions
export default productSlice.reducer