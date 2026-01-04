const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 760,
    minWidth: 900,
    minHeight: 650,
    backgroundColor: "#0b1220",
    title: "IDKMovie",
    icon: path.join(__dirname, "assets", "icon.ico"), // ✅ HERE
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
});

win.setMenuBarVisibility(false);


  win.loadFile("index.html");

  // Any target="_blank" should open in the default browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  // Prevent the app from navigating away from local file://
  win.webContents.on("will-navigate", (e, url) => {
    const isLocal = url.startsWith("file://");
    if (!isLocal) {
      e.preventDefault();
      shell.openExternal(url);
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
