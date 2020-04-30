<template>
  <v-img
    :src="image.src"
    :width="width"
    :height="rowHeight"
    class="ma-1"
    contain
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

  get width() {
    const ar = this.image.width / this.image.height
    return Math.round(this.rowHeight * ar)
  }

}
</script>