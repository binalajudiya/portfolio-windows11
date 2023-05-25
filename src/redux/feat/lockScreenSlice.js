import { createSlice } from '@reduxjs/toolkit';
import { wallpapers } from "../../assets";

export const lockScreenSlice = createSlice ({
    name: "lockScreen",
    initialState: {
        wallpaper: wallpapers[2],
        isLocked: false
    },
    reducers:{
        setLockScreenWallpaper: (state, action) => {
            state.wallpaper = action.payload;
        }
    }

})

export const { setLockScreenWallpaper } = lockScreenSlice.actions;

export default lockScreenSlice.reducer;