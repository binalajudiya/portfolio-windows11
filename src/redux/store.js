import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import lockScreenReducer from "./feat/lockScreenSlice";
import desktopScreenReducer from "./feat/desktopScreenSlice";

const store = configureStore({
    reducer: {
        lockScreen: lockScreenReducer,
        desktopScreen: desktopScreenReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export default store;

