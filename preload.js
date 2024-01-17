const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('fileOperation', {
    read: () => ipcRenderer.invoke('file-read:content'),
    write: (text) => ipcRenderer.invoke('file-write:content',text),
})