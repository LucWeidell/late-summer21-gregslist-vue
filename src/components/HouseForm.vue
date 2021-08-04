<template>
  <div class="house-form row">
    <div class="col mt-5">
      <form class = "d-flex" @submit.prevent="createHouse()">
          <div class="form-group">
              <label for="year">Year</label>
              <input v-model="state.house.year" type="number" name="year" id="" class="form-control"
              placeholder="year ..." required min="1950" max="2021">
          </div>
          <div class="form-group">
              <label for="levels">Levels</label>
              <input v-model="state.house.levels" type="number" name="levels" id="" class="form-control"
              placeholder="levels ..." required min="0">
          </div>
          <div class="form-group">
              <label for="squareFeet">SquareFeet</label>
              <input v-model="state.house.year" type="number" name="squareFeet" id="" class="form-control"
              placeholder="squareFeet ...">
          </div>
          <div class="form-group">
              <label for="bed">Bed</label>
              <input  v-model="state.house.bedrooms"  type="number" name="bed" id="" class="form-control"
              placeholder="bed ..." required min="1">
          </div>
          <div class="form-group">
              <label for="bath">Bath</label>
              <input v-model="state.house.bathrooms" type="number" name="bath" id="" class="form-control"
              placeholder="bath ..." required min="1">
          </div>
          <div class="form-group">
              <label for="imgURL">ImgURL</label>
              <input v-model="state.house.imgUrl" type="text" name="imgUrl" id="" class="form-control"
              placeholder="ImgURL ...">
          </div>
          <div class="form-group">
              <label for="description">Description</label>
              <input v-model="state.house.description" type="text" name="description" id="" class="form-control"
              placeholder="Description ..." required maxlength="240">
          </div>
          <div class="form-group">
              <label for="price">Price</label>
              <input v-model="state.house.price" type="number" name="price" id="" class="form-control"
              placeholder="price ..." required min="1">
          </div>
          <div class="d-flex align-items-center">
          <button type ="submit" class="btn btn-outline-success">Add House</button>
          </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'house-form',
  setup(){
    return {}
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>