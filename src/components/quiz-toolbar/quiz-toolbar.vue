<template>
  <div class="quiz-toolbar-wrapper">
    <a-button @click="createNewQuiz">
      <plus-circle-outlined />
      New Quiz
    </a-button>

    <div class="separator" />

    <a-button type="primary">
      <save-outlined />
      Save Quiz
    </a-button>

    <div class="separator" />

    <a-button v-for="(button, index) in editorButtons" :key="index" type="link" circle>
      <i class="fa" :class="`fa-${button.icon}`" />
    </a-button>

    <div class="separator" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { PlusCircleOutlined, SaveOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "QuizToolbar",
  components: {
    PlusCircleOutlined,
    SaveOutlined,
  },
  methods: {
    createNewQuiz: function () {
      store.commit("newQuiz");
    },
  },
});
</script>

<style lang="stylus" scoped>
.quiz-toolbar-wrapper
  padding 12px 12px
  padding-top 0
  display flex
  border-bottom 1px dashed $color-gray-medium

  .separator
    width 2rem
</style>
