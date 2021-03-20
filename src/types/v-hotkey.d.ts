declare module "v-hotkey" {
  import { PluginObject } from "vue";

  const VueHotkey: PluginObject<Map<string, number>>;
  export default VueHotkey;
}
