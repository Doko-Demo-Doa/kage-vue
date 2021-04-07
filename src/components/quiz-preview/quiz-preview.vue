<template>
  <div class="quiz-preview">
    <a-carousel ref="carousel" class="carousel-wrapper" :dots="false" :after-change="handleChange">
      <!-- First slide, the instruction -->
      <div v-if="true" class="quiz-intro">
        <h1>{{ quizTitle || " " }}</h1>
        <div class="instruction">{{ quizInstruction }}</div>
      </div>

      <!-- Main quiz -->
      <div v-if="true" class="quiz-main">
        <h2 class="quiz-content">彼女は、毎日_____アイスクリームがすきです。</h2>

        <a-radio-group v-model:value="value" class="choice-group" size="large">
          <a-radio v-for="(item, index) in choices" :key="index" :value="item.id">
            <div v-html="transformText(item.label)"></div>
          </a-radio>
        </a-radio-group>
      </div>
    </a-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { furiganaTemplateToHTML } from "@/utils/utils-formatting";
import store from "@/store";

export default defineComponent({
  setup() {
    const value = ref<number>(1);

    const choices = [
      {
        id: 0,
        label: "{食(た)}べると",
      },
      {
        id: 1,
        label: "{食(た)}べ始める",
      },
      {
        id: 2,
        label: "{食(た)}べるほど",
      },
      {
        id: 3,
        label: "{食(た)}べるなら",
      },
    ];

    return {
      value,
      choices,
      deck: store.state.composingQuizMeta,
    };
  },
  computed: {
    quizIndex: function () {
      const selectedIndex = store.state.composingQuizMeta.selectedIndex;
      if (selectedIndex >= 0) {
        // @ts-ignore
        this.$ref.carousel.goTo(selectedIndex);
      }
      return selectedIndex;
    },
    quizTitle: function () {
      return store.state.composingQuizMeta.name;
    },
    quizInstruction: function () {
      return store.state.composingQuizMeta.instruction;
    },
  },
  methods: {
    transformText: function (str: string) {
      return furiganaTemplateToHTML(str);
    },
    handleChange: function (newIndex: number) {
      store.commit("changeQuizIndex", newIndex - 1);
    },
  },
});
</script>

<style lang="stylus">
$radio-size = 60px

.quiz-preview
  display flex
  align-items center
  justify-content center
  padding 0 4rem
  flex-grow 2
  width 220px
  text-text-align start
  user-select text

  .carousel-wrapper
    width 100%

  .quiz-intro
    min-height 360px
    h1
      margin-top 6rem
    .instruction
      font-size 1.6em
      overflow-wrap break-word

  .quiz-main
    padding 0 2rem

    .choice-group
      display flex
      flex-direction column
      align-items flex-start

      .ant-radio-wrapper
        display flex
        flex-direction row
        align-items center
        justify-content center
        .ant-radio
          display flex
          align-items center
          margin 2rem 0
          margin-right 2rem
          font-size 22px

          .ant-radio-inner
            transform scale(2)
        span
          font-size 22px
</style>
