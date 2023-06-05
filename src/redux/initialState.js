import { icons } from "../assets";
import SettingsApp from "../components/SettingsApp";
import { newActiveWindow } from "./feat/desktopScreenSlice";
import { WIN_FEATURES } from "../const/winSize"

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
            onClick: () => {
                window.open(
                    "https://www.google.com/search?q=binalajudiya"
                )
            }
        },
        {
            name: "Visual Studio Code",
            icon: icons.apps.vscode,
            width: 25,
            height: 25,
            onClick: () => {
                window.open(
                    "https://code.visualstudio.com/",
                    "_blank",
                    WIN_FEATURES
                )
            }
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
            onClick: () => {
                window.open(
                    "https://www.google.com/search?q=binalajudiya"
                )
            }
        },
        {
            name: "GitHub",
            icon: icons.apps.github,
            width: 35,
            height: 35,
            onClick: () => {
                window.open(
                    "https://github.com/binalajudiya",
                    "_blank",
                    WIN_FEATURES
                  );
            }
        },
        {
            name: "LinkedIn",
            icon: icons.apps.linkedin,
            width: 35,
            height: 35,
            onClick: () => {
                window.open(
                    "https://www.linkedin.com/in/binalajudiya/",
                    "_blank",
                    WIN_FEATURES
                )
            }
        },
        {
            name: "Visual Studio Code",
            icon: icons.apps.vscode,
            width: 35,
            height: 35,
            onClick: () => {
                window.open(
                    "https://code.visualstudio.com/",
                    "_blank",
                    WIN_FEATURES
                )
            }
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
            onClick: () => {
                window.location.href = "mailto:binalajudiya.ba@gmail.com"
            }
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
            onClick: () => {
                window.open(
                    "https://github.com/binalajudiya",
                    "_blank",
                    WIN_FEATURES
                  );
            }
        }
    ]

}

export default initialState;