import { remote } from "electron";

export const fileUtils = {
  selectSingleFile: () => {
    return remote.dialog.showOpenDialog({
      properties: ["openFile", "multiSelections", "dontAddToRecent"],
      filters: [{ name: "Ảnh ọt", extensions: ["jpg", "png", "gif"] }],
    });
  },
};
