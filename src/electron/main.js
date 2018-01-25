import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';

let win, dev, hiddenWin;
const args = process.argv.slice(1);
dev = args.some(val => val === "--dev");

if (dev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
}

function createWindow() {

  let electronScreen = screen;
  let size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height
  });

  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  if (dev) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
    hiddenWin = null;
  });
}

try {

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

  app.on('ready', function() {
    createWindow();
  });
  
  app.on('window-all-closed', () => {
    app.quit();
  });
  
} catch (e) {
  // Catch Error
  //throw e;
}