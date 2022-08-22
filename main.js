const { app, BrowserWindow } = require("electron");

function createWindow() {
    let options = {
        width: 1200,
        height: 1900,
        x: 0,
        y: 0,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        backgroundColor: "#000000"
    }
    options.fullscreen = true;
    options.autoHideMenuBar = true;
    const win = new BrowserWindow(options);

    //win.webContents.openDevTools();  
    // win.loadFile("./call_module/call.html");
    win.loadFile("init.html");
    // win.loadFile("signUp.html");
    // win.loadFile("delete.html");
    // win.loadFile("record.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});