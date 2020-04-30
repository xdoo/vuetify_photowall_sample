<template>
  <v-container 
    class="pa-0"
    fluid>
    <v-row class="display-2 ml-5 mt-9">Flowers, Trees & Bees</v-row>
    <v-row class="caption font-weight-light my-2 ml-5">16.Apr. 2011 - 26. Apr. 2020</v-row>
    <album-row
      v-for="(row, index) in rows"
      :key="index"
      :images="row"
      :cols="colsForViewport"
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

  get colsForViewport() {
    if(this.$vuetify.breakpoint.sm && this.sm) {
      return this.sm
    }

    if(this.$vuetify.breakpoint.md && this.md) {
      return this.md
    }

    if(this.$vuetify.breakpoint.lg && this.lg) {
      return this.lg
    }

    if(this.$vuetify.breakpoint.xl && this.xl) {
      return this.xl
    }

    return this.cols
  }

  get rows() {
    // create a bunch of images
    const images = []
    // generate so sample data. for bigger albums change 50 to whatever.
    for(let i = 0; i < 50; i++) {
      const rnd = Math.floor(Math.random() * Math.floor(4))
      if(rnd > 2) {
        images.push(new ImageData(i, "https://picsum.photos/267/400", 267, 400))
      } else {
        images.push(new ImageData(i, "https://picsum.photos/600/400", 600, 400))
      }
    }
    
    // create the array of rows...
    const rows = new Array<Array<ImageData>>()
    let index = 0

    // fill all rows with data 
    while(index < images.length) {
      const row = this.fillRow(images, index)
      index = index + row.length
      rows.push(row)
    }

    return rows
  }

  /**
   * fill a single row with a random amount of pics.
   */
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