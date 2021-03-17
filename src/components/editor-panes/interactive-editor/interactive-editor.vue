<template>
  <div class="interactive-editor">
    <div class="slide-preview" :style="{ zIndex: showPreview ? 0 : -2 }">
      <div class="reveal">
        <div class="slides">
          <section>
            <h2>Tablas con información</h2>
            <i class="fa" :class="`fa-images`"></i>
            <table>
              <thead>
                <tr>
                  <th>Ciudad</th>
                  <th>Año de fundación</th>
                  <th>Población</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gijón</td>
                  <td>Siglo V a. C.</td>
                  <td>274290</td>
                </tr>
                <tr>
                  <td>Oviedo</td>
                  <td>761</td>
                  <td>221870</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h2>{{ title }}</h2>
            <h2></h2>
          </section>
          <section>
            <section>Vertical Slide 1</section>
            <section>Vertical Slide 2</section>
          </section>
          <section>
            <h2>{{ title }}</h2>
            <h2></h2>
          </section>
        </div>
      </div>
    </div>
    <div class="editor-main" :style="{ visibility: showPreview ? 'hidden' : 'visible' }">
      <div class="header-area">
        <textarea
          v-model="title"
          class="slide-title"
          placeholder="Enter text here"
          maxlength="26"
          aria-rowcount="2"
          rows="2"
          @change="onChangeTitle($event.target.value)"
        />
      </div>
    </div>
    <div @click="onClick">Test</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// @ts-ignore
import Reveal from "reveal.js/dist/reveal";

@Options({
  components: {},
})
export default class InteractiveEditor extends Vue {
  items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  title = "hehe";
  showPreview = false;

  onChangeTitle(newText: string) {
    this.title = newText;
  }

  onClick() {
    this.showPreview = !this.showPreview;
  }

  mounted() {
    Reveal.initialize();
    return;
  }

  unmounted() {
    // Reveal.shuffle();
  }
}
</script>

<style lang="stylus">
.interactive-editor
  position relative
  height 100%
  max-height 520px
  max-width 1000px
  padding 10px
  display flex
  flex-direction column

  .slide-preview {
    width 100%
    height 400px
    position absolute
    z-index -2
  }

  .editor-main
    flex-grow 2
    background white
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
