const imagesWallpapers = (fileName) => {
    return require (`./images/wallpapers/${fileName}`);
}

const ASSETS = {
    images: {
        // icons:{
        //     apps:{
        //         chrome: imagesIconsApps("chrome.ico"),
        //         github: imagesIconsApps("github.png"),
        //         linkedin: imagesIconsApps("linkedin.png"),
        //         vscode: imagesIconsApps("vscode.png"),
        //         whatsapp: imagesIconsApps("whatsapp.png"),
        //         winCMD: imagesIconsApps("win-cmd.png"),
        //         winDefender: imagesIconsApps("win-defender.png"),
        //         winFileExplorer: imagesIconsApps("win-file-explorer.ico"),
        //         winMail: imagesIconsApps("win-mail.png"),
        //         winSearch: imagesIconsApps("win-search.ico"),
        //         winSettings: imagesIconsApps("win-settings.ico"),
        //         winTrashEmpty: imagesIconsApps("win-trash-empty.ico"),
        //         winTrashFull: imagesIconsApps("win-trash-full.ico"),
        //         dkPortfolio: imagesIconsApps("dk-portfolio.png"),
        //     }
        // },
        // profiles: {
        //     binal: imagesProfile('binal.jpg')
        // },
        wallpapers: [
            imagesWallpapers("1.jpeg"),
            imagesWallpapers("2.jpeg"),
            imagesWallpapers("3.jpeg"),
        ]
    }
}

export const { icons, profiles, wallpapers } = ASSETS.images;

export default ASSETS;