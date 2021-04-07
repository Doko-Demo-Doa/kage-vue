<template>
  <div class="interactive-editor">
    <div class="slide-preview" :style="{ zIndex: showPreview ? 0 : -2 }">
      <div class="reveal">
        <div class="slides">
          <section>
            <div class="slide-page-wrapper">
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

              <img
                src="https://cuvent.github.io/react-native-vision-camera/img/example_intro.png"
                alt="Girl in a jacket"
                width="500"
                height="600"
              />
            </div>
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
            <h2>SelectX</h2>
            <h2>SelectX</h2>
            <h2>SelectX</h2>
            <h2>SelectX</h2>
            <h2>SelectX</h2>
          </section>
        </div>
      </div>
    </div>
    <div class="editor-main" :style="{ visibility: showPreview ? 'hidden' : 'visible' }">
      <div class="safe-area">
        <div class="header-area">
          <textarea
            v-model="title"
            class="slide-title"
            placeholder="Enter text here"
            maxlength="42"
            aria-rowcount="2"
            @change="onChangeTitle($event.target.value)"
          />
        </div>

        <div v-if="false" class="text-content-area">
          <textarea class="slide-text-content" placeholder="Enter text here" maxlength="400" />
        </div>

        <div v-if="false" id="konva-container" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// @ts-ignore
import Reveal from "reveal.js/dist/reveal";
// @ts-ignore
import VueWindowPortal from "vue-window-portal";
import Konva from "konva";
import { isElectron } from "@/native/utils-platform";
import store from "@/store";

@Options({
  components: {
    VueWindowPortal,
  },
})
export default class InteractiveEditor extends Vue {
  items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  title = "Title goes here";
  portalOpened = false;

  windowRef?: Window = undefined;

  get showPreview() {
    return store.state.isPreview;
  }

  openPortal() {
    this.portalOpened = true;
    return;
  }

  closePortal(): void {
    return;
  }

  onChangeTitle(newText: string) {
    this.title = newText;
  }

  onClick() {
    store.commit("togglePreview");

    if (isElectron()) {
      const { dialog } = require("electron").remote;
      dialog.showOpenDialog({ properties: ["openFile", "multiSelections"] });
    }
  }

  mounted() {
    const el = document.getElementById("konva-container");
    const enableKonva = true;

    if (el && enableKonva) {
      const stage = new Konva.Stage({
        container: "konva-container",
        width: 800,
        height: 320,
      });

      const layer = new Konva.Layer();
      stage.add(layer);

      const textNode = new Konva.Text({
        text: "Text",
        x: 50,
        y: 50,
        fontSize: 20,
        draggable: true,
        width: 200,
      });

      const textNode2 = new Konva.Text({
        text: "Text",
        x: 60,
        y: 50,
        fontSize: 20,
        draggable: true,
        width: 200,
      });

      layer.add(textNode);
      layer.add(textNode2);

      const tr = new Konva.Transformer({
        anchorCornerRadius: 0,
        enabledAnchors: ["middle-left", "middle-right"],
        // set minimum width of text
        boundBoxFunc: function (oldBox, newBox) {
          newBox.width = Math.max(30, newBox.width);
          return newBox;
        },
      });
      tr.setAttr("node", textNode);

      textNode.on("transform", function () {
        // reset scale, so only with is changing by transformer
        textNode.setAttrs({
          width: textNode.width() * textNode.scaleX(),
          scaleX: 1,
        });
      });

      textNode.on("dragend", function (data) {
        console.log(data);
      });

      layer.add(tr);

      layer.draw();
    }

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
  max-width 800px
  padding 10px
  display flex
  flex-direction column

  .slide-preview
    width 100%
    height 400px
    position absolute
    z-index -2

    .slide-page-wrapper
      position relative

      img
        position absolute
        right 0
        top 0

  .editor-main
    width 800px
    height 520px
    background white
    border 1px solid $color-midnight

    .safe-area
      height 100%

      .header-area
        // border-bottom 1px solid $color-gray-medium
        padding 1.6rem 4rem

        .slide-title
          border 0
          color $color-midnight
          font-size 2.8em
          outline none
          text-align center
          text-anchor end
          writing-mode vertical-rl
          text-orientation upright
          width 100%
          overflow hidden
          white-space pre-wrap
          word-wrap break-word
          resize none

      #konva-container
        height 300px
        background azure

      img
        width 200px
        height 200px

      .text-content-area
        width 100%
        height 320px
        padding 0 20px

        textarea
          font-size 2rem
          padding 10px
          outline none
          border none
          resize none
          border 1px dashed $color-midnight
          width 100%
          height 320px

  &::selection
    color: $color-gray-medium
    background: $color-midnight
</style>
