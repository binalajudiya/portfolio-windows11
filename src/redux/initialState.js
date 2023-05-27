import { icons } from "../assets";
import SettingsApp from "../components/SettingsApp";
import { newActiveWindow } from "./feat/desktopScreenSlice";

const initialState = {
    activeWindows: [],
    pinApps:[
        {
            name: "File Explorer",
            icon: icons.apps.winFileExplorer,
            width: 25,
            height: 25,
            onClick: (e,dispatch) => {}
        },
        {
            name: "Google Chrome",
            icon: icons.apps.chrome,
            width: 25,
            height: 25,
            onClick: (e,dispatch) => {}
        },
        {
            name: "WhatsApp",
            icon: icons.apps.whatsapp,
            width: 25,
            height: 25,
            onClick: (e,dispatch) => {}
        },
        {
            name: "Visual Studio Code",
            icon: icons.apps.vscode,
            width: 25,
            height: 25,
            onClick: (e,dispatch) => {}
        },
        {
            name: "Settings",
            icon: icons.apps.winSettings,
            width: 25,
            height: 25,
            onClick: (e,dispatch) => {
                dispatch(
                    newActiveWindow({
                        title: "Settings",
                        height: "80vh",
                        width: "80vw",
                        x: 10,
                        y: 10,
                        minimized: false,
                        maximized: false,
                        Component: SettingsApp,
                    })
                );
            }
        }
    ],
    shortcutApps:[
        {
            name: "Google Chrome",
            icon: icons.apps.chrome,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        },
        {
            name: "GitHub",
            icon: icons.apps.github,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        },
        {
            name: "LinkedIn",
            icon: icons.apps.linkedin,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        },
        {
            name: "Visual Studio Code",
            icon: icons.apps.vscode,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        },
        {
            name: "WhatsApp",
            icon: icons.apps.whatsapp,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        },
        {
            name: "Command Prompt",
            icon: icons.apps.winCMD,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        },
        {
            name: "File Explorer",
            icon: icons.apps.winFileExplorer,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        },
        {
            name: "Mail",
            icon: icons.apps.winMail,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        },
        {
            name: "Settings",
            icon: icons.apps.winSettings,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {
                dispatch(
                    newActiveWindow({
                        title: "Settings",
                        height: "80vh",
                        width: "80vw",
                        x: 10,
                        y: 10,
                        minimized: false,
                        maximized: false,
                        Component: SettingsApp,
                    })
                );
            }
        },
        {
            name: "About This Project",
            icon: icons.apps.github,
            width: 35,
            height: 35,
            onClick: (e,dispatch) => {}
        }
    ]

}

export default initialState;