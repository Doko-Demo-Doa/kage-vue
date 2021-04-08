<template>
  <a-row class="toolbar-wrapper">
    <a-button @click="createNewSlide">
      <paper-clip-outlined />
      New Slide
    </a-button>

    <div class="separator" />

    <a-button
      v-for="(button, index) in editorButtons"
      :key="index"
      type="link"
      circle
      @click="onClickToolbarItem(button.action)"
    >
      <i class="fa" :class="`fa-${button.icon}`" />
    </a-button>

    <div class="separator" />

    <a-button type="danger" @click="togglePreview">
      <gateway-outlined />
      {{ "Preview:" + " " + `${isPreview ? "ON" : "OFF"}` }}
    </a-button>
    <div class="separator" />
    <a-button type="primary">
      <upload-outlined />
      Publish
    </a-button>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PaperClipOutlined, UploadOutlined, GatewayOutlined } from "@ant-design/icons-vue";
import store from "@/store";
import { fileUtils } from "@/utils/utils-files";
import { emitter, EventType } from "@/utils/event-bus";

export default defineComponent({
  name: "EditorToolbar",
  components: {
    PaperClipOutlined,
    UploadOutlined,
    GatewayOutlined,
  },
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
          icon: "images",
          mode: "images",
          action: "insertImage",
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
  computed: {
    isPreview: function () {
      return store.state.isPreview;
    },
  },
  methods: {
    async onClickToolbarItem(itemId: string) {
      if (itemId === "insertImage") {
        const resp = await fileUtils.selectSingleFile();
        console.log(resp.filePaths);
        emitter.emit(EventType.INSERT_IMAGE, resp.filePaths);
      }
    },
    createNewSlide() {
      store.commit("newSlide");
    },
    togglePreview() {
      store.commit("togglePreview");
    },
  },
});
</script>

<style lang="stylus" scoped>
.toolbar-wrapper
  padding 0px 12px
  margin-bottom 12px

  .separator
    width 0.5rem

  .publish
    background $color-green
</style>
