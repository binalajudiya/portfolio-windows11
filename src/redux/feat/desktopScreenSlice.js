import { createSlice } from "@reduxjs/toolkit";
import { wallpapers } from "../../assets";
import initialState from "../initialState";

export const desktopScreenSlice = createSlice ({
    name: "desktopScreen",
    initialState: {
        wallpaper: wallpapers[0],
        pinApps: [...initialState.pinApps],
        shortcutApps: [...initialState.shortcutApps]
    },
    reducers: {
        setLockDScreenWallpaper: (state, action) => {
            state.wallpaper = action.payload;
        }
    }
})

export const {setLockDScreenWallpaper} = desktopScreenSlice.actions;

export default desktopScreenSlice.reducer;