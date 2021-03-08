<template>
  <div class="editor-panes">
    <splitpanes vertical class="splitter">
      <pane class="pane1" size="20" min-size="15" max-size="40">2</pane>
      <pane>3</pane>
    </splitpanes>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

@Options({
  components: {
    EditorPanes,
    Splitpanes,
    Pane,
  },
})
export default class EditorPanes extends Vue {}
</script>

<style lang="stylus">
.editor-panes
  height 100%

  .splitter
    .pane1
      background-color yellow
</style>
