<template>
  <h1>Calendar</h1>
  <form @submit="findPictureByDate">
    <input type="date" id="Test_Date" v-model="state.date" />
    <button type="submit" class="btn btn-success">
      submit
    </button>
  </form>
  <Picture />
</template>

<script>
import { reactive } from '@vue/reactivity'
import { nasaService } from '../services/NasaService.js'
export default {
  name: 'CalendarPage',
  setup() {
    const state = reactive({
      date: '',
      url: ''
    })
    return {
      state,
      async findPictureByDate() {
        await nasaService.findPictureByDate(state.date)
      }
    }
  }

}
</script>

<style>

</style>
