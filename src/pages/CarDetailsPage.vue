<template>
  <div class="car-details-page row">
    <div class="col-md-11">
      <img :src="car.imgUrl" class="w-100" :alt="car.make - car.model">
      <div class="p-3">
        <div class="text-center">
          <p><b>{{car.year}} - {{car.make}} - {{car.model}}</b></p>
        </div>
        <p>{{car.description}}</p>
        <p><em>{{car.price}}</em></p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await carsService.getCarById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      car: computed(()=> AppState.activeItem),
      async destroy(){
        try {
          await carsService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'CarsPage'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>

</style>