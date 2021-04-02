// Thanh dưới cùng trong tab Quiz
<template>
  <div class="quiz-list" tabindex="2">
    <div
      class="quiz-cell meta-cell"
      :class="{ 'selected-cell': activeIndex === -1 }"
      @click="onChooseQuiz(-1)"
    />
    <div
      v-for="(item, index) in qCollection"
      :key="index"
      class="quiz-cell"
      :class="{ 'selected-cell': activeIndex === index }"
      @click="onChooseQuiz(index)"
    >
      Quiz
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import store from "@/store";

export default defineComponent({
  setup() {
    const activeIndex = computed(() => {
      return store.state.composingQuizMeta.selectedIndex;
    });

    const qCollection = computed(() => {
      return store.state.composingQuizCollection;
    });

    return {
      activeIndex,
      qCollection,
      deck: store.state.composingQuizMeta,
    };
  },
  methods: {
    onChooseQuiz(idx: number) {
      store.commit("changeQuizIndex", idx);
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
  outline none

  .quiz-cell
    margin-right 20px
    min-width  180px
    height 100px
    border-radius 4px
    cursor pointer
    border 1px solid $color-gray-medium
    transition 300ms linear all
    display flex
    justify-content center
    align-items center

    &:hover
      border 1px solid $color-midnight

  .meta-cell
    border 1px dashed $color-gray-medium
    border-radius 4px

  .selected-cell
    border 1px solid $color-midnight
</style>
