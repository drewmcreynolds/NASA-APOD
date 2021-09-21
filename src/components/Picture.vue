<template>
  <div class="card p-3 bg-success">
    <h1 class=""></h1>
    <img :src="apod.hdurl" alt="" class="rounded elevation-4 image-fluid">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
export default {
  setup() {
    return {
      apod: computed(() => AppState.apod)
    }
  }
}
</script>

<style>

</style>
