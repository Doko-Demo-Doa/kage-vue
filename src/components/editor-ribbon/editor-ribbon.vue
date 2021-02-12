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
        <div class="home-panel">
          Home
        </div>
      </el-tab-pane>
      <el-tab-pane label="Design">Design</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class EditorRibbon extends Vue {}
</script>

<style lang="stylus" scoped>
.editor-ribbon
  width 100%
  height 100%

  .el-tabs
    height 100%

  .el-tabs__content
  .home-panel
    height 100%

</style>
