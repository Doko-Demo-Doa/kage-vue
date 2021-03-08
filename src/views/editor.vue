<template>
  <div class="main-layout editor-wrapper">
    <div class="editor-ribbon">
      <el-tabs type="border-card">
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-date" />File</span>
          </template>
          <editor-toolbar />
        </el-tab-pane>
        <el-tab-pane label="Home">
          <div class="home-panel">
            <slide-list />
          </div>
        </el-tab-pane>

        <el-tab-pane label="Design"> Design 2 </el-tab-pane>
      </el-tabs>
    </div>
    <EditorPanes />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EditorToolbar from "@/components/editor-toolbar/editor-toolbar.vue";
import EditorPanes from "@/components/editor-panes/editor-panes.vue";

@Options({
  components: {
    EditorToolbar,
    EditorPanes,
  },
})
export default class Editor extends Vue {}
</script>

<style lang="stylus">
.editor-wrapper
  width 100%

  .editor-ribbon
    width 100%

    .el-tabs
      height 100%

      .el-tabs__content
      .home-panel
        margin 0
        padding 0
        display flex
        flex-direction row
</style>
