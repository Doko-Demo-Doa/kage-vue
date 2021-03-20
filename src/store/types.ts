import SlideModel from "@/vms/slide";

export interface AppState {
  composingSlides: Array<SlideModel>;
  activeAsset: null;
  backtrack: Array<string>;
}
