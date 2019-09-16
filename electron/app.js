const { app, BrowserWindow } = require('electron')

/**
 * Electron's main entry point
 *
 * @author [Ehtesham Mohammed]
 */
let mainWindow
app.on('ready', () => {
  mainWindow = new BrowserWindow({ show: false })
  mainWindow.loadURL('http://localhost:3000')
  mainWindow.maximize()
  mainWindow.show()
})
