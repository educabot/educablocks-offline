//handle setupevents as quickly as possible
const setupEvents = require('./setupEvents')
if (setupEvents.handleSquirrelEvent()) {
   // squirrel event handled and app will exit in 1000ms, so don't do anything else
   return;
}

const electron = require('electron');
const url = require('url');
const path = require('path');
const Store = require('electron-store');

const {app, BrowserWindow, Menu} = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const store = new Store();
if (!store.get('width'))
    store.set('width', '1024');
if (!store.get('height'))
    store.set('height', '768');
if (!store.get('perfil'))
    store.set('perfil', 'bloques.ejs');

function createWindow () {
    // Create the browser window.
    let width = store.get('width');
    let height =store.get('height');

    // Pass those values in to the BrowserWindow options
    mainWindow = new BrowserWindow({ width:width, height:height, icon: './resources/app/views/logo.png' });
    //mainWindow = new BrowserWindow({width: 1024, height: 768})

    // The BrowserWindow class extends the node.js core EventEmitter class, so we use that API
    // to listen to events on the BrowserWindow. The resize event is emitted when the window size changes.
    mainWindow.on('resize', () => {
        // The event doesn't pass us the window size, so we call the `getBounds` method which returns an object with
        // the height, width, and x and y coordinates.
        let { width, height } = mainWindow.getBounds();
        // Now that we have them, save them using the `set` method.
        store.set('width', width);
        store.set('height',height);
    });


    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/home/theme/home.ejs'),
        protocol: 'file:',
        slashes: true
    }))


    mainWindow.setMenu(null);

    //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Menu.setApplicationMenu(mainMenu);
    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    /**mainWindow.webContents.session.on('will-download', (event, item, webContents) => {
        // Set the save path, making Electron not to prompt a save dialog.
        item.setSavePath('/tmp/save.pdf')

        item.on('updated', (event, state) => {
            if (state === 'interrupted') {
                console.log('Download is interrupted but can be resumed')
            } else if (state === 'progressing') {
                if (item.isPaused()) {
                    console.log('Download is paused')
                } else {
                    console.log(`Received bytes: ${item.getReceivedBytes()}`)
                }
            }
        })
        item.once('done', (event, state) => {
            if (state === 'completed') {
                console.log('Download successfully')
            } else {
                console.log(`Download failed: ${state}`)
            }
        })
    })**/

    // Emitted when the window is clo;ed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

const mainMenuTemplate = [
    {
    label:'Educablocks',
    submenu: [{
        label:'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',click(){
            app.quit();
        }
    }
    ]
}];

//If mac, add empty object to menu
if (process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})



if (process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Dev tools',
        submenu: [
            {
                label:  'Toogle dev tools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role:'reload'
            }
        ]
    })
}
