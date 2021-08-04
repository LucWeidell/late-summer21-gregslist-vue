import { createRouter, createWebHashHistory } from 'vue-router'
import CarsPage from '../pages/CarsPage.vue'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import HousesPage from '../pages/HousesPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import JobsPage from '../pages/CarDetailsPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
import Home from '../pages/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // SECTION All Car Routes
  {
    path: '/cars',
    name: 'CarsPage',
    component: CarsPage
  },
  {
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },
    // SECTION All House Routes
  {
    path: '/houses',
    name: 'HousesPage',
    component: HousesPage
  },
  {
    // required param ':id'
    path: '/house-details/:id',
    name: 'HousesDetails',
    component: HouseDetailsPage
  },
    // SECTION All Jobs Routes
  {
    path: '/jobs',
    name: 'JobsPage',
    component: JobsPage
  },
  {
    // required param ':id'
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
