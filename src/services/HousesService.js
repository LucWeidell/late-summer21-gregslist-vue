import { AppState } from "../AppState"
import { sandbox } from "./AxiosService"

class HousesService {
  async getHouses() {
    let res = await sandbox.get("/houses")
    AppState.cars = res.data
  }
  async getHouseById(id){
    let res = await sandbox.get(`/houses/${id}`)
    AppState.activeItem = res.data
  }
  async createHouses(rawHouse){
    let res = await sandbox.post('/houses', rawHouse)
    AppState.houses.push(res.data)
    return res.data.id
  }
  async destroy(id){
    await sandbox.delete(`/houses/${id}`)
    AppState.houses = AppState.houses.filter(h => h.id !== id)
  }
}

export const housesService = new HousesService()