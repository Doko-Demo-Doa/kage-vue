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

        <div id="konva-container" />
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
import store from "@/store";
import { isElectron } from "@/native/utils-platform";
import { emitter, EventType } from "@/utils/event-bus";

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
    let stage: Konva.Stage;
    let layer: Konva.Layer;

    stage = new Konva.Stage({
      container: "konva-container",
      width: 800,
      height: 386,
    });

    layer = new Konva.Layer();
    stage.add(layer);

    emitter.on(EventType.INSERT_IMAGE, function (imageArray) {
      // Code...
      const arr: string[] = imageArray;
      const imgUrl = `local-resource://${arr[0]}`;

      Konva.Image.fromURL(imgUrl, function (imgNode: Konva.Image) {
        imgNode.setAttrs({
          name: "rect",
          draggable: true,
          x: 200,
          y: 50,
          scaleX: 0.3,
          scaleY: 0.3,
        });

        console.log(imgNode);

        const imgTransformer = new Konva.Transformer({
          enabledAnchors: ["top-left", "top-right", "bottom-left", "bottom-right"],
          nodes: [imgNode],
          keepRatio: true,
          boundBoxFunc: (oldBox, newBox) => {
            if (newBox.width < 10 || newBox.height < 10) {
              return oldBox;
            }
            return newBox;
          },
        });

        // imgTransformer.setAttr("node", imgNode);

        layer.add(imgNode);
        layer.add(imgTransformer);
        layer.draw();
      });
    });

    Reveal.initialize();
    return;
  }

  unmounted() {
    // Reveal.shuffle();
    emitter.off(EventType.INSERT_IMAGE, () => {
      // Callback
    });
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
        padding 0.2rem 4rem

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
        height 386px
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
