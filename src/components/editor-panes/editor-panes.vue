<template>
  <div class="editor-panes">
    <div class="splitter">
      <div class="pane1">
        <slide-thumbnail v-for="(item, index) in items" :key="index" />
        <div class="blank-holder" />
      </div>
      <div>
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
  height 100%

  .splitter
    .pane1
      overflow-y scroll
      border-right 1px dashed grey

      .blank-holder
        height 140px
</style>
