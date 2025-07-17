import { createSlice, nanoid } from "@reduxjs/toolkit";
import { list } from "postcss";

const stockSlice = createSlice({
    name: "stock",
    initialState: {
        list: JSON.parse(localStorage.getItem("list")) || []
    },
    reducers: {
        addStocks: (state, action) => {
            const newItem = { id: nanoid(), ...action.payload };
            state.list.push(newItem); 
            localStorage.setItem("list", JSON.stringify(state.list));
        },
        removeStocks: (state, action) => {
            state.list= state.list.filter((product) => {
                return product.id !== action.payload
            })
            localStorage.setItem("list", JSON.stringify(state.list));

        },
        updateStocks: (state, action) => {
            const index = state.list.findIndex((sto) => sto.id === action.payload.id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
        },
    }

})

export const { addStocks, removeStocks, updateStocks } = stockSlice.actions
export default stockSlice.reducer