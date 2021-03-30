<template>
  <div class="quiz-composer">
    <div class="middle">
      <div>Test</div>
    </div>
    <div class="bottom">Test</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    QuizComposer,
  },
})
export default class QuizComposer extends Vue {}
</script>

<style lang="stylus">
.quiz-composer
  display flex
  flex-direction column
  height calc(100vh - 106px)
  overflow auto
  position relative
  width 100%

  .middle
    flex-grow 2
  .bottom
    height 4rem
    border-top 1px solid $color-gray-medium
    margin-bottom 112px
</style>
