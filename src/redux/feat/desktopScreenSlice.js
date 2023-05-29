import { createSlice } from "@reduxjs/toolkit";
import { wallpapers } from "../../assets";
import initialState from "../initialState";

export const desktopScreenSlice = createSlice ({
    name: "desktopScreen",
    initialState: {
        wallpaper: wallpapers[0],
        activeWindows: [...initialState.activeWindows],
        pinApps: [...initialState.pinApps],
        shortcutApps: [...initialState.shortcutApps]
    },
    reducers: {
        setLockDScreenWallpaper: (state, action) => {
            state.wallpaper = action.payload;
        }, 

        newActiveWindow: (state, action) => {
            const {
                title = "",
                height = "80vh",
                width = "80vw",
                x = 10,
                y = 10,
                minimized = false,
                maximized = false,
                Component = () => null
            } = action.payload; 

            const newId = state.activeWindows.length + 1 ;

            const newWindow = {
                id: newId,
                title,
                height,
                width,
                x,
                y,
                minimized,
                maximized,
                Component
            };

            state.activeWindows.push(newWindow);
        },
        maximizeActiveWindow: (state, action) => {
            const { id } = action.payload;

        },

        cacnelMaximizedActiveWindow: (state, action) => {
            const id = action.payload;

            const filtered = state.activeWindows.map((win) => {
                if(win.id ==- id){
                    win.maximized = false;
                }
                return win;
            })
            state.activeWindows = filtered;
        },
        removeActiveWindow: (state, action) => {

            const filtered = state.activeWindows.map((win) => win.id !== action.payload)

            state.activeWindows = filtered;
        }
    }
})

export const {
    setLockDScreenWallpaper,
    newActiveWindow,
    removeActiveWindow,
    cacnelMaximizedActiveWindow
} = desktopScreenSlice.actions;

export default desktopScreenSlice.reducer;