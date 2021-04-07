<template>
  <div class="slide-thumbnail" :class="isActive ? 'slide-thumbnail-selected' : ''" @click="onClick">
    <div class="counter">1</div>
    <div class="block-inside">
      <div class="title">Title</div>
      <div class="bord" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    SlideThumbnail,
  },
})
export default class SlideThumbnail extends Vue {}
</script>

<style lang="stylus" scoped>
.slide-thumbnail-selected
  opacity 1 !important

.slide-thumbnail
  width 100%
  height 120px
  padding 0.5rem 1rem
  display flex
  user-select none
  opacity 0.5
  cursor pointer

  &:hover
    opacity 1

  .counter
    margin-right 0.5rem

  .block-inside
    width 80%
    border 1px solid orange
    border-radius 6px

    .title
      padding 6px 12px
      font-weight bold
      text-align start

    .bord
      width 100%
      height 1px
      background $color-gray-medium
</style>
