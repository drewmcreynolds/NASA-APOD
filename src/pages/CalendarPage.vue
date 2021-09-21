<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 text-center">
        <h1 class="text-center">
          Calendar
        </h1>
        <form @submit="findPictureByDate">
          <input type="date" id="Test_Date" v-model="state.date" />
          <button type="submit" class="btn btn-success">
            submit
          </button>
        </form>
      </div>
    </div>
    <div class="row m-3">
      <div class="col-lg-8 text-center">
        <Picture />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { nasaService } from '../services/NasaService.js'
export default {
  name: 'CalendarPage',
  setup() {
    const state = reactive({
      date: '',
      url: '',
      desc: ''
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
