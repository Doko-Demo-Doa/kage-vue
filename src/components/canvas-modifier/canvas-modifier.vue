<template>
  <div id="canvas-modifier">
    <div class="counter">1</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Konva from "konva";

@Options({
  components: {
    CanvasModifier,
  },
})
export default class CanvasModifier extends Vue {
  mounted() {
    this.initializeKonva();
  }

  initializeKonva() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "canvas-modifier",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    const textInside = new Konva.Transform();

    var rect = new Konva.Rect({
      x: 160,
      y: 60,
      width: 100,
      height: 90,
      fill: "red",
      name: "rect",
      stroke: "black",
      draggable: true,
    });
    layer.add(rect);

    var text = new Konva.Text({
      x: 5,
      y: 5,
    });
    layer.add(text);

    // create new transformer
    var tr = new Konva.Transformer();
    // layer.add(tr);
    // tr.nodes([rect]);
    layer.draw();

    rect.on("transformstart", function () {
      console.log("transform start");
    });

    rect.on("dragmove", function () {
      // Code...
    });
    rect.on("transform", function () {
      console.log("transform");
    });

    rect.on("transformend", function () {
      console.log("transform end");
    });
  }
}
</script>

<style lang="stylus" scoped>
.canvas-modifier
  width 100%
  height 100%
</style>
