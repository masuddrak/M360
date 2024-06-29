import { configureStore } from "@reduxjs/toolkit";
import { createProductsApi } from "./productsApi";

export const store = configureStore({
    reducer:{
        [createProductsApi.reducerPath]: createProductsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createProductsApi.middleware)
})