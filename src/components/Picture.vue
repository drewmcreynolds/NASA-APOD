<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <img :src="apod.hdurl" alt="" class="rounded">
      </div>
    </div>
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
