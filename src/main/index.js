const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        fullscreen: true        
    });
    win.setMenuBarVisibility(false);
    win.setTitle('Игра "Жизнь"');
    win.loadFile('public/index.html');

    win.webContents.on('before-input-event', (event, input) => {
        if (input.key === 'F11') {            
            win.setFullScreen(!win.isFullScreen());
            event.preventDefault();
        };
    });
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());