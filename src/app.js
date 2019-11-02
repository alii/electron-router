const { app, BrowserWindow } = require('electron');
require("electron-reload")(__dirname);
const path = require('path');
let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, "renderer", "index.html"));

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});