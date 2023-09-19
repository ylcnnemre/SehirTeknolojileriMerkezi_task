import { configureStore } from "@reduxjs/toolkit"
import { ProductReducer } from "./Reducers"

export const store = configureStore({
    reducer: {
        product: ProductReducer
    },
})