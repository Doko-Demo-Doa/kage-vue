<template>
  <div class="editor-panes">
    <splitpanes vertical class="splitter">
      <pane class="pane1" size="20" min-size="15" max-size="40">
        <slide-thumbnail v-for="(item, index) in items" :key="index" />
        <div class="blank-holder" />
      </pane>
      <pane>
        <interactive-editor />
      </pane>
    </splitpanes>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Splitpanes, Pane } from "splitpanes";
import SlideThumbnail from "@/components/slide-thumbnail/slide-thumbnail.vue";
import InteractiveEditor from "@/components/editor-panes/interactive-editor/interactive-editor.vue";

import "splitpanes/dist/splitpanes.css";

@Options({
  components: {
    EditorPanes,
    Splitpanes,
    Pane,
    SlideThumbnail,
    InteractiveEditor,
  },
})
export default class EditorPanes extends Vue {
  items = [1, 1, 1];
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
