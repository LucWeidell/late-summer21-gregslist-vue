<template>
  <div class="house-card row">
    <div class="bg-light shadow">
      <img :src={{house.imgUrl}} class = w-100 :alt="house.year - house.sq">
      <div class = "p-3">
        <p><b>Floors: ${this.levels}- <br>Year: ${this.year}</b></p>
        <p>Beds - ${this.bedrooms} : Baths - ${this.bathrooms}</p>
        <p>${this.description}</p>
        <h5><i>$${this.price.toLocaleString('en-US')}</i></h5>
        <button class="btn btn-info btn-block" onclick="app.housesController.bidHouse('${this.id}')"> bid </button>
        <button class="btn btn-warning btn-block" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'house-card',
  setup(){
    return {}
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>