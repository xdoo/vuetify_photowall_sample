<template>
  <v-row>
    <album-image
      v-for="(image, index) in images"
      :key="index"
      :row-height="optimalRowHeight"
      :image="image"
      :rownum="rnd"
    ></album-image>
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
    let imgc = 0
    this.images.forEach(image => {
      image.width > image.height ? imgc = imgc + 2 : imgc = imgc + 1
    })
    const relw = roww / imgc
    const optimalHeight = this.images[0].width > this.images[0].height ? 2 * relw / ar : relw / ar
    return Math.round(optimalHeight)
  }

  get dummyData() {
    const data = []
    for(let i = 0; i < 50; i++) {
      const rnd = Math.floor(Math.random() * Math.floor(4))

      if(rnd > 3) {
        data.push(new ImageData(i, "https://picsum.photos/267/400", 267, 400))
      } else {
        data.push(new ImageData(i, "https://picsum.photos/600/400", 600, 400))
      }
    }
    return data
  }
}
</script>