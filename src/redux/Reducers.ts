import { createSlice } from "@reduxjs/toolkit"
import { IProductData } from "../models/ProductModel";

export type Ibasket = IProductData & { count: number }

const initialState: {
    basket: Array<Ibasket>
} = {
    basket: []
};


const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const element = state.basket.some(item => item.id === action.payload.id)

            if (element) {
                state.basket = state.basket.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    }
                    return item
                })
            }
            else {
                state.basket.push(action.payload)
            }


        },
        addCount: (state, action) => {



            state.basket = state.basket.map(item => {

                if (item.id == action.payload.id) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }
                return item
            })
        },
        descCount: (state, action) => {

            if (action.payload.count == 1) {
                state.basket = state.basket.filter(item => item.id !== action.payload.id)
            }
            else {
                state.basket = state.basket.map(item => {
                    if (item.id == action.payload.id) {
                        return {
                            ...item,
                            count: item.count - 1
                        }
                    }
                    return item
                })
            }

        }
    }

})

export const ProductReducer = ProductSlice.reducer
export const { addProduct, addCount, descCount } = ProductSlice.actions