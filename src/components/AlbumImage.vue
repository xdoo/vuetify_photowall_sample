<template>
  <v-hover v-slot:default=" { hover } ">
    <v-img
      :src="image.src"
      :lazy-src="image.lazySrc"
      :width="width"
      :height="height"
      class="ma-1"
    >
      <v-container full-height class="ma-0 pa-0">
        <v-fade-transition>
          <v-row
            v-if="hover || selected"
            class="ma-0 gradient"
          >
            <v-btn 
              icon 
              small
              :color="hover ? color : color"
              @click="selected ? deselect() : select()"
              class="ma-1">
              <v-icon class="check">mdi-check-circle</v-icon>
            </v-btn>
          </v-row>
        </v-fade-transition>
        <v-row v-if="hover" class="ma-0">
          <v-sheet
            color="transparent"
            width="100%"
            :height="clickHeight"
            tile
            @click="selected ? deselect() : show()"
            class="ma-0 click"
          ></v-sheet>
        </v-row>
      </v-container>
    </v-img>
  </v-hover>
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

  selected = false

  /**
   * show image
   */
  show() {
    console.log("show picture " + this.image.src)
  }

  /**
   * select image for a later action
   */
  select() {
    console.log("select...")
    this.selected = true 
  }

  /**
   * deselect image
   */
  deselect() {
    console.log("deselect...")
    this.selected = false
  }

  /**
   * calculate the select (check) button color
   */
  get color() {
    return this.selected ? "white" : "rgba(255, 255, 255, 0.6)"
  }

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

  get clickHeight() {
    return this.height - 28
  }
}
</script>
<style scoped>
  /* workaround for sass bug */
  .check:hover {
    color: white;
  }

  .gradient {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0) );
  }

  .click {
    cursor: pointer;
  }
</style>