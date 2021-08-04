<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <img src="../assets/stop-sign.jpg" alt="stop-sign">
        <h3>This is <i>NOT</i> Creglist! </h3>
        <p>Oh you know well, well click an image below or the nav bar to see our wares weary travler. </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <router-link :to="{name: 'CarsPage'}">
          <h4>Cars:</h4>
          <img src="../assets/cars.jpg" alt="cars">
        </router-link>
      </div>
      <div class="col-md-3">
        <router-link :to="{name: 'HousesPage'}">
          <h4>Houses:</h4>
          <img src="../assets/houses.jpg" alt="houses">
        </router-link>
      </div>
      <div class="col-md-3">
        <router-link :to="{name: 'JobsPage'}">
          <h4>Jobs:</h4>
          <img src="../assets/jobs.jpg" alt="jobs">
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'Home',
  setup(){

    return {
      // state,
      // methods
    }
  },
  }
</script>
