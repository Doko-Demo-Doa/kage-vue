<template>
  <a-form :layout="formState.layout">
    <a-form-item label="Nội dung câu hỏi">
      <a-textarea
        :maxlength="128"
        placeholder="Nội dung câu hỏi"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
      {{ title }}
    </a-form-item>

    <a-form-item v-for="(item, index) in choices" :key="index" :label="'Lựa chọn ' + (index + 1)">
      <a-input :maxlength="24" placeholder="VD: 文法練習C" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";

export default defineComponent({
  name: "QuizToolbar",
  components: {},
  setup() {
    const choices = [0, 1, 2, 3, 4, 5, 6];
    const formState = {
      layout: "vertical",
    };

    return { choices, formState };
  },
  computed: {
    title: function () {
      const idx = store.state.composingQuizMeta.selectedIndex;
      return store.state.composingQuizCollection[idx]?.title;
    },
  },
});
</script>

<style lang="stylus" scoped>
.multiple-choices
  padding 12px 12px
  padding-top 0
  border-bottom 1px dashed $color-gray-medium
</style>
