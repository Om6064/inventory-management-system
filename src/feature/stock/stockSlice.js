import { createSlice, nanoid } from "@reduxjs/toolkit";


const stockSlice = createSlice({
    name: "stock",
    initialState: {
        list: JSON.parse(localStorage.getItem("list")) || [],
        isLogin: JSON.parse(localStorage.getItem("isLogin")) || false
    },
    reducers: {
        addStocks: (state, action) => {
            const newItem = { id: nanoid(), ...action.payload };
            state.list.push(newItem);
            localStorage.setItem("list", JSON.stringify(state.list));
        },
        removeStocks: (state, action) => {
            state.list = state.list.filter((product) => {
                return product.id !== action.payload
            })
            localStorage.setItem("list", JSON.stringify(state.list));

        },
        updateStocks: (state, action) => {
            const index = state.list.findIndex((sto) => sto.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
            localStorage.setItem("list", JSON.stringify(state.list));

        },
        searchStock: (state, action) => {
            const searchText = action.payload.toLowerCase();
            const originalList = JSON.parse(localStorage.getItem("list")) || [];

            state.list = originalList.filter((sto) =>
                sto.name.toLowerCase().includes(searchText)
            );
        },
        filterCatagory: (state, action) => {

            const originalList = JSON.parse(localStorage.getItem("list")) || [];
            state.list = originalList.filter((sto) => {
                return action.payload !== "" ? sto.catagory == action.payload : true
            })
        },
        sortPrice: (state, action) => {
            const originalList = JSON.parse(localStorage.getItem("list")) || [];

            state.list = originalList.sort((a, b) => {
                if (action.payload) {
                    return a.price - b.price
                } else {
                    return b.price - a.price
                }
            })
        },
        loginForm: (state, action) => {
            const isValid =
                action.payload.email === "admin@gmail.com" &&
                action.payload.password === "admin@123";

            console.log(isValid)

            state.isLogin = isValid; 
            localStorage.setItem("isLogin", JSON.stringify(state.isLogin)); 
        },
        setLogin:(state, action)=>{
            state.isLogin = action.payload;
            localStorage.setItem("isLogin", JSON.stringify(state.isLogin)); 
        }


    }

})

export const { addStocks, removeStocks, updateStocks, searchStock, filterCatagory, sortPrice, loginForm, setLogin } = stockSlice.actions
export default stockSlice.reducer