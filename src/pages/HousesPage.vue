<template>
  <div class="house-page container-fluid">
    <div class="row">
      <div class="col">
        <HouseForm />
        <p></p>
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="h in houses" :key="h.id">
        <!-- Data passed through prop ':car' to child -->
        <House :house="h"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {housesService } from '../services/HousesService'
import HouseCard from '../components/CarCard.vue'
import HouseForm from '../components/CarForm.vue'

export default {
  name: 'house-page',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await housesService.getCars()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      cars: computed(() => AppState.cars)
      // methods
    }
  },
  components: {
    HouseCard,
    HouseForm
  }
}
</script>