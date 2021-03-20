<template>
  <div class="main-layout editor-wrapper">
    <div class="editor-ribbon">
      <a-tabs>
        <a-tab-pane key="1">
          <template #tab>
            <span>
              <file-outlined />
              File
            </span>
          </template>
          <editor-toolbar />
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #tab>
            <span>
              <home-outlined />
              Home
            </span>
          </template>
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #tab>
            <span>
              <ant-design-outlined />
              Design
            </span>
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>
    <EditorPanes />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { HomeOutlined, FileOutlined, AntDesignOutlined } from "@ant-design/icons-vue";
import EditorToolbar from "@/components/editor-toolbar/editor-toolbar.vue";
import EditorPanes from "@/components/editor-panes/editor-panes.vue";

@Options({
  components: {
    EditorToolbar,
    EditorPanes,
    HomeOutlined,
    FileOutlined,
    AntDesignOutlined,
  },
})
export default class Editor extends Vue {}
</script>

<style lang="stylus">
.editor-wrapper
  width 100%

  .editor-ribbon
    width 100%
    user-select none

    .ant-tabs-nav-scroll {
      display flex
      justify-content flex-start
    }
</style>
