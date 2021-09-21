<template>
  <h1>Calendar</h1>
  <input type="datetime-local" id="Test_DatetimeLocal" v-model="state.date" />
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'CalendarPage',
  setup() {
    const state = reactive({
      date: ''
    })
    return { state }
  }

}
</script>

<style>

</style>
