<template>
  <div class="quiz-list">
    <div class="quiz-cell meta-cell" @click="onChooseQuiz(0)"></div>
    <div class="quiz-cell">First Cell</div>
    <div class="quiz-cell selected-cell">First Cell</div>
    <div class="quiz-cell">First Cell</div>
    <div class="quiz-cell">First Cell</div>
    <div class="quiz-cell">First Cell</div>
    <div class="quiz-cell">First Cell</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
      deck: store.state.composingQuizDeck,
    };
  },
  methods: {
    onChooseQuiz(idx: number) {
      this.$store.commit("changeQuizIndex", idx);
    },
  },
});
</script>

<style lang="stylus" scoped>
$height = 160px

.quiz-list
  height $height
  min-height $height
  overflow-x auto
  border-top 1px solid $color-gray-medium
  display flex
  align-items center
  padding 0 20px

  .quiz-cell
    margin-right 20px
    min-width  180px
    height 100px
    border-radius 4px
    cursor pointer
    border 1px solid $color-gray-medium
    transition 300ms linear all

    &:hover
      border 1px solid $color-midnight

  .meta-cell
    border 1px dashed $color-gray-medium
    border-radius 4px

  .selected-cell
    border 1px solid $color-midnight
</style>
