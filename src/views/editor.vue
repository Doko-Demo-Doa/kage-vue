<template>
  <div class="main-layout editor-wrapper">
    <div class="editor-ribbon">
      <a-tabs>
        <a-tab-pane key="1">
          <template #tab>
            <span>
              <file-outlined />
              Slide Builder
            </span>
          </template>
          <editor-toolbar />
          <editor-panes />
        </a-tab-pane>

        <a-tab-pane key="2">
          <template #tab>
            <span>
              <ant-design-outlined />
              Quiz Builder
            </span>
          </template>
          <quiz-toolbar />
          <quiz-composer />
        </a-tab-pane>

        <a-tab-pane key="3">
          <template #tab>
            <span>
              <home-outlined />
              Settings
            </span>
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { HomeOutlined, FileOutlined, AntDesignOutlined } from "@ant-design/icons-vue";
import EditorToolbar from "@/components/editor-toolbar/editor-toolbar.vue";
import EditorPanes from "@/components/editor-panes/editor-panes.vue";
import QuizToolbar from "@/components/quiz-toolbar/quiz-toolbar.vue";
import QuizComposer from "@/components/quiz-composer/quiz-composer.vue";

@Options({
  components: {
    EditorToolbar,
    EditorPanes,
    QuizToolbar,
    QuizComposer,
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
