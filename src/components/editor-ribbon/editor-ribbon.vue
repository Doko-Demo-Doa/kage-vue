<template>
  <div class="editor-ribbon">
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i> File</span>
        </template>
        Route
      </el-tab-pane>
      <el-tab-pane label="Home">
        <div class="home-panel">Home</div>
      </el-tab-pane>
      <el-tab-pane label="Design">Design</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EditorToolbar from "@/components/editor-toolbar/editor-toolbar.vue";

@Options({
  components: {
    EditorToolbar,
  },
})
export default class EditorRibbon extends Vue {}
</script>

<style lang="stylus">
.editor-ribbon
  width 100%
  height 100%
  user-select none

  .el-tabs
    height 100%

  .el-tabs__content
  .home-panel
    height 100%
</style>
