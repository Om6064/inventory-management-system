import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../feature/stock/stockSlice";

const store  = configureStore({
    reducer:{
        stock: stockReducer
    }
})

export default store