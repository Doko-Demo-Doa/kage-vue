<template>
  <div class="canvas-modifier">
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
  initializeKonva() {
    const stage = new Konva.Stage({
      container: "test",
      width: 200,
      height: 200,
    });

    const layer = new Konva.Layer();
    stage.add(layer);
  }
}
</script>

<style lang="stylus" scoped>
.canvas-modifier
  width 100%
  height 100%
</style>
