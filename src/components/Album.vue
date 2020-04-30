<template>
  <v-container 
    class="pa-0"
    fluid>
    <v-row class="display-2 ml-5 mt-9">Flowers, Trees & Bees</v-row>
    <v-row class="caption font-weight-light my-2 ml-5">16.Apr. 2011 - 26. Apr. 2020</v-row>
    <v-row class="caption font-weight-light my-2 ml-5">col: {{columnWidth}} row: {{optimalRowHeight}} bp: {{breakpoint}}</v-row>
    <album-row
      v-for="(row, index) in rows"
      :key="index"
      :images="row"
    ></album-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from "vue-property-decorator"

// components
import AlbumRow from "@/components/AlbumRow.vue"

// interfaces
import ImageData from "@/model/ImageData"

@Component({
  components: {
    AlbumRow
  }
})
export default class Album extends Vue {

  @Prop ({ default: 10 }) readonly cols!: number
  @Prop () readonly sm!: number
  @Prop () readonly md!: number
  @Prop () readonly lg!: number
  @Prop () readonly xl!: number

  get columnWidth() {
    return Math.round(this.$vuetify.breakpoint.width / 12)
  }

  get optimalRowHeight() {
    const roww = Math.round(this.$vuetify.breakpoint.width / 12) * this.cols
    return roww
  }

  get breakpoint() {
    return this.$vuetify.breakpoint.width
  }

  get rows() {
    // create a bunch of images
    const images = []
    for(let i = 0; i < 50; i++) {
      const rnd = Math.floor(Math.random() * Math.floor(4))
      if(rnd > 2) {
        images.push(new ImageData(i, "https://picsum.photos/300/400", 267, 400))
      } else {
        images.push(new ImageData(i, "https://picsum.photos/600/400", 600, 400))
      }
    }
    
    // create the array of rows...
    const rows = new Array<Array<ImageData>>()
    let index = 0

    while(index < images.length) {
      const row = this.fillRow(images, index)
      index = index + row.length
      rows.push(row)
    }

    return rows
  }

  fillRow(images: Array<ImageData>, startIndex: number) {
    const endindex = startIndex + 6 > images.length ? images.length : startIndex + 6
    const part = images.slice(startIndex, endindex)
    const row = new Array<ImageData>()
    let w = 0
    part.forEach(image => {
      image.width > image.height ? w = w + 2 : w = w + 1
      if(w < 8) {
        row.push(image)
      }
    })
    return row
  }

  isPortrait(image: ImageData) {
    return image.width > image.height ? true : false 
  }

}
</script>