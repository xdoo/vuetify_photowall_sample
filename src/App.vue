<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
      @click="scrollUp"
    >
      <v-btn icon class="ml-1">
        <v-icon title="go back">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon class="mr-1">
        <v-icon title="share">mdi-share-variant</v-icon>
      </v-btn>
      <v-btn icon class="mr-1">
        <v-icon title="add">mdi-image-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="mx-0 px-0" fluid>
        <v-row no-gutters>
          <v-col cols="0" sm="0" md="1" lg="1" xl="2"></v-col>
          <v-col cols="12" sm="12" md="10" lg="10" xl="8">
            <album></album>
          </v-col>
          <v-col cols="0" sm="0" md="1" lg="1" xl="2"></v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
// components
import Album from './components/Album.vue'
@Component({
  components: {
    Album
  }
})
export default class App extends Vue {

  scrollUp () {
    console.log("scrolling...")
  }

}
</script>
