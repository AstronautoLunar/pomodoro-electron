const { app, BrowserWindow, nativeImage } = require("electron");
const electronReload = require("electron-reload");

electronReload(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
})

function createWindow() {
    const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon-clock.png`);

    if(app.dock) {
        app.dock.setIcon(icon);
    }

    const win = new BrowserWindow({
        icon,
        width: 500,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("./src/index.html");
}

app.whenReady().then(createWindow);