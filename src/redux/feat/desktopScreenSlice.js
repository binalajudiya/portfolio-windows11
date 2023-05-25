import { createSlice } from "@reduxjs/toolkit";
import { wallpapers } from "../../assets";

export const desktopScreenSlice = createSlice ({
    name: "desktopScreen",
    initialState: {
        wallpaper: wallpapers[0]
    },
    reducers: {
        setLockDScreenWallpaper: (state, action) => {
            state.wallpaper = action.payload;
        }
    }
})

export const {setLockDScreenWallpaper} = desktopScreenSlice.actions;

export default desktopScreenSlice.reducer;