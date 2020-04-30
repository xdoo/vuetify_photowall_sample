<template>
  <v-row
    justify="center" 
    no-gutters
  >
    <v-col
      v-for="(image, index) in images"
      :key="index"
      cols="auto"
    >
      <album-image
        :row-height="optimalRowHeight"
        :image="image"
        :rownum="rnd"
      ></album-image>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from "vue-property-decorator"

// components
import AlbumImage from "@/components/AlbumImage.vue"

// interfaces
import ImageData from "@/model/ImageData"

@Component ({
  components: {
    AlbumImage
  }
})
export default class AlbumRow extends Vue {

  @Prop ({ default: 10 }) readonly cols!: number
  @Prop () readonly images!: Array<ImageData>

  rnd: number = Math.floor(Math.random() * Math.floor(100))

  get optimalRowHeight() {
    // how wide is the middle column?
    const roww = Math.round(this.$vuetify.breakpoint.width / 12) * this.cols
    // the total border (ma-1)
    const glutter = 8 * this.images.length
    // let's calc the total row aspect ratio for the row
    let totalRowAspectRatio = 0
    this.images.forEach(image => {
      totalRowAspectRatio = totalRowAspectRatio + image.width / image.height
    })
    // finally get the optimized height 
    // (-20 is for rounding and stuff)
    return Math.round((roww - glutter - 20) / totalRowAspectRatio)
  }

  imageCols (h: number, w: number) {
    return w > h ? 2 : 1
  }
}
</script>