import SlideModel from "@/vms/slide";

export interface AppState {
  composingSlides: Array<SlideModel>;
  selectedSlideIndex: number;
  activeAsset: null;
  backtrack: Array<string>;
}
