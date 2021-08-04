<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <router-link :to="{name: 'Home'}" class="navbar-brand">Luc's List</router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link :to="{name: 'CarsPage'}">
            <a class="nav-link" href="#">Cars</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'HousesPage'}" >
              <a class="nav-link" href="#">Houses</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'JobsPage'}">
              <a class="nav-link" href="#">Jobs</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="container-fluid bg-primary">
    <div class="row">
      <div class="col text-center p-3 text-light">
        <p>Made with <img class="logo" src="./assets/logo.png" /> by Luc (ripped from CW)</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
}
.logo {
  height: 1rem;
}
</style>
