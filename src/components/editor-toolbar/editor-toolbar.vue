<template>
  <el-row class="toolbar-wrapper">
    <el-button size="medium"><i class="el-icon-plus" /> New Slide</el-button>
    <el-button size="medium">
      <i class="el-icon-s-platform" />
      Preview
    </el-button>
    <el-button size="medium">Medium</el-button>
    <el-button size="medium">Medium</el-button>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditorToolbar",
});
</script>

<style lang="stylus" scoped>
.toolbar-wrapper {
  padding 6px 12px
}
</style>
