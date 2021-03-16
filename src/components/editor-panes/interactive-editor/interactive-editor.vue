<template>
  <div class="interactive-editor">
    <div class="editor-main">
      <div class="header-area">
        <textarea class="slide-title" maxlength="26" aria-rowcount="2" rows="2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class InteractiveEditor extends Vue {
  items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}
</script>

<style lang="stylus">
.interactive-editor
  height 100%
  max-height 520px
  max-width 1000px
  padding 10px
  display flex

  .editor-main
    flex-grow 2
    border 1px dashed $color-midnight

    .header-area
      border-bottom 1px solid $color-gray-medium

      .slide-title
        border 0
        color $color-midnight
        font-size 2.8em
        margin-top 1.6rem
        outline none
        text-align center
        text-anchor end
        writing-mode vertical-rl
        text-orientation upright
        word-wrap break-word
        resize none

  &::selection
    color: $color-gray-medium
    background: $color-midnight
</style>
