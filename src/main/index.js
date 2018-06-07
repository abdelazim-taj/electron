import {app, BrowserWindow, Menu} from "electron"
import path from 'path'
import { format as formatUrl} from 'url'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Listen for app to be ready
app.on('ready', function(){
    // create new window
    let window = new BrowserWindow({
        width: 1024
    });
    //load html into window
    if(isDevelopment){
        window.loadURL('http://localhost:9080/');
    } else {
        window.loadURL(formatUrl({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true

        }))
    }

    // Build menu from template
    // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    // Menu.setApplicationMenu(mainMenu);
});