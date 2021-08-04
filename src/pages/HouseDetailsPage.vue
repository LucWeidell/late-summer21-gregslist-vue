<template>
  <div class="house-details countainer-fluid">
    <div class="row">
        <div class=" col-md-12">
          <div class="car bg-light shadow">
            <img src=${this.imgUrl} class = w-100 alt="house">
            <div class = "p-3">
              <div class="text-center">
                <p><b>Floors: ${this.levels}- Size: ${this.squareFt}ft^2 <br>Year: ${this.year}</b></p>
              </div>
              <p>Beds - ${this.bedrooms} : Baths - ${this.bathrooms}</p>
              <p>${this.description}</p>
              <h5><i>$${this.price.toLocaleString('en-US')}</i></h5>
              <button class="btn btn-info btn-block" onclick="app.housesController.bidHouse('${this.id}')"> bid </button>
              <button class="btn btn-warning btn-block" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
            </div>
          </div>
        </div>
    </div>


  </div>
</template>


<script>
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  route: useRouter()
  name: 'house-details',
  setup(){
    return {
      house: computed(async()=>{
        try {
          housesService.getById()
        } catch (error) {
          console.log('Error getting active house by ID:', error)
        }
      })
    }
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>