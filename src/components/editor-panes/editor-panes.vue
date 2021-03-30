<template>
  <div class="editor-panes">
    <div class="splitter">
      <div class="pane1">
        <slide-thumbnail v-for="(item, index) in items" :key="index" />
        <div class="blank-holder" />
      </div>
      <div class="pane2">
        <interactive-editor />
        <!-- <canvas-modifier /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import hotkeys from "hotkeys-js";
import SlideThumbnail from "@/components/slide-thumbnail/slide-thumbnail.vue";
import InteractiveEditor from "@/components/editor-panes/interactive-editor/interactive-editor.vue";
import CanvasModifier from "@/components/canvas-modifier/canvas-modifier.vue";

import { useStore } from "@/store";

import SlideModel from "@/vms/slide";

@Options({
  components: {
    EditorPanes,
    SlideThumbnail,
    InteractiveEditor,
    CanvasModifier,
  },
})
export default class EditorPanes extends Vue {
  items: SlideModel[] = [];

  mounted() {
    const store = useStore();
    this.items = store.state.composingSlides;

    hotkeys("ctrl+m", () => {
      store.commit("newSlide");
    });
  }

  beforeUnmount() {
    hotkeys.unbind("a");
  }
}
</script>

<style lang="stylus">
.editor-panes
  overflow auto
  height 100vh
  width 100%

  .splitter
    display flex
    width 100%

    .pane1
      height calc(100vh - 110px)
      overflow-y scroll
      border-right 1px dashed grey
      min-width 280px

      .blank-holder
        height 140px

    .pane2
      flex-grow 2
      height 100%
      background wheat
</style>
