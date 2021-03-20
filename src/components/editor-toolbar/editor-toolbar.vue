<template>
  <el-row class="toolbar-wrapper">
    <el-button size="small" @click="createNewSlide">
      <i class="el-icon-plus" />
      New Slide
    </el-button>

    <el-button
      v-for="(button, index) in editorButtons"
      :key="index"
      size="small"
      type="text"
      circle
    >
      <i class="fa" :class="`fa-${button.icon}`" />
    </el-button>

    <el-button size="small" type="warning">
      <i class="el-icon-s-platform" />
      Preview
    </el-button>
    <el-button size="small" type="success" plain>
      <i class="el-icon-upload2" />
      Publish
    </el-button>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";

export default defineComponent({
  name: "EditorToolbar",
  data() {
    return {
      editorButtons: [
        { icon: "bold", mode: "bold", action: "toggleBold", shortcut: "Ctrl-B", label: "Bold" },
        {
          icon: "italic",
          mode: "italic",
          action: "toggleItalic",
          shortcut: "Ctrl-I",
          label: "Italic",
        },
        {
          icon: "strikethrough",
          mode: "strikethrough",
          action: "toggleStrikethrough",
          label: "Strike Through",
        },
        {
          icon: "heading",
          mode: "heading",
          action: "toggleHeadingSmaller",
          shortcut: "Ctrl-H",
          label: "Heading",
        },
        {},
        {
          icon: "code",
          mode: "code",
          action: "toggleCodeBlock",
          shortcut: "Ctrl-Alt-C",
          label: "Code",
        },
        {
          icon: "quote-left",
          mode: "quote",
          action: "toggleBlockquote",
          shortcut: "Ctrl-'",
          label: "Quote",
        },
        {
          icon: "list-ul",
          mode: "unordered-list",
          action: "toggleUnorderedList",
          shortcut: "Ctrl-L",
          label: "Genelic List",
        },
        {
          icon: "list-ol",
          mode: "ordered-list",
          action: "toggleOrderedList",
          shortcut: "Ctrl-Alt-L",
          label: "Numbered List",
        },
        {},
        {
          icon: "link",
          mode: "link",
          action: "drawLink",
          shortcut: "Ctrl-K",
          label: "Create Link",
        },
        {
          icon: "picture-o",
          mode: "picture",
          action: "drawImage",
          shortcut: "Ctrl-Alt-I",
          label: "Insert Image",
        },
        { icon: "table", mode: "table", action: "drawTable", label: "Insert Table" },
        {
          icon: "minus",
          mode: "horizontal-rule",
          action: "drawHorizontalRule",
          label: "Insert Horizontal Rule",
        },
      ],
    };
  },
  methods: {
    createNewSlide() {
      store.commit("newSlide");
    },
  },
});
</script>

<style lang="stylus" scoped>
.toolbar-wrapper {
  padding 0px 12px
}
</style>
