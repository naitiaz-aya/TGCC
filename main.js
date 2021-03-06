const { BrowserWindow, app } = require('electron');
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');

  // Open the DevTools.
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);