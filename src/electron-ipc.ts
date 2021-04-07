import { BrowserWindow, ipcMain } from "electron";

export default function (win: BrowserWindow) {
  ipcMain.on("selectFile", (event, args) => {
    // Code...
    win.webContents.send("selectFile", "aa");
  });
}
