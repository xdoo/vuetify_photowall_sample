<template>
  <v-container fluid>
    <v-row class="display-2 ml-5 mt-9">Flowers, Trees & Bees</v-row>
    <v-row class="caption font-weight-light my-2 ml-5">16.Apr. 2011 - 26. Apr. 2020</v-row>
    <v-row dense>
      <v-col>
        <v-img></v-img>
      </v-col>
      <v-col>
        <v-img></v-img>
      </v-col>
      <v-col>
        <v-img></v-img>
      </v-col>
    </v-row>

  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from "vue-property-decorator"

@Component
export default class Album extends Vue{

}
</script>