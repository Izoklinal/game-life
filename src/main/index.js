const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        height: 760,
        width: 700
    });
    win.setMenuBarVisibility(false);
    win.setTitle('Игра "Жизнь"');
    win.loadFile('public/index.html');
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());