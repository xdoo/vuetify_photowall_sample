<template>
  <v-img
    class="ma-1"
    :src="image.src"
    :width="width"
    :height="rowHeight"
  >{{rowHeight}} {{width}} {{rownum}}</v-img>
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
  @Prop () readonly rownum!: number

  get width() {
    const ar = this.image.width / this.image.height
    return Math.round(this.rowHeight * ar)
  }

}
</script>