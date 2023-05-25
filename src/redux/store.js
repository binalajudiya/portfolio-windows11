import { configureStore } from "@reduxjs/toolkit";
import lockScreenReducer from "./feat/lockScreenSlice";
import desktopScreenReducer from "./feat/desktopScreenSlice";

const store = configureStore({
    reducer: {
        lockScreen: lockScreenReducer,
        desktopScreen: desktopScreenReducer
    }
})

export default store;

