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
    const ar = this.images[0].width / this.images[0].height
    const roww = Math.round(this.$vuetify.breakpoint.width / 12) * this.cols
    const glutter = 8 * this.images.length
    let imgc = 0
    this.images.forEach(image => {
      image.width > image.height ? imgc = imgc + 2 : imgc = imgc + 1
    })
    // relative breite pro spalte
    const relw = (roww - glutter - 20) / imgc
    console.log("row - " + this.rnd + " rel width: " + roww + " / " + imgc + " = " + relw)
    const optimalHeight = this.images[0].width > this.images[0].height ? 2 * relw / ar : relw / ar
    return Math.round(optimalHeight)
  }

  imageCols (h: number, w: number) {
    return w > h ? 2 : 1
  }
}
</script>