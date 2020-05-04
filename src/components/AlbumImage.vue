<template>
  <v-img
    :src="image.src"
    :lazy-src="image.lazySrc"
    :width="width"
    :height="height"
    class="ma-1"
  >h:{{rowHeight}} w:{{width}} {{rownum}}</v-img>
</template>
<script lang="ts">
import Vue from 'vue'

import { Component, Prop } from "vue-property-decorator"

// interfaces
import ImageData from "@/model/ImageData"

@Component
export default class AlbumImage extends Vue {
   
  @Prop () readonly rowHeight!: number
  @Prop () readonly image!: ImageData
  @Prop () readonly rownum!: string

  /**
   * calculates the optimized width of an image based
   * on the aspect ratio and the optimized height.
   */
  get width() {
    const ar = this.image.width / this.image.height
    return Math.round(this.height * ar)
  }

  /**
   * calculates the optimized height of an image. if there're
   * in a last row only some images left, the calculated height 
   * should be never higher than the real height.
   */
  get height() {
    return this.rowHeight < this.image.height ? this.rowHeight : this.image.height 
  }
}
</script>