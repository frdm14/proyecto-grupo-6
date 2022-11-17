import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartslice";
import cartUiSlice from "./shopping-cart/cartUiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    },
});

export default store;