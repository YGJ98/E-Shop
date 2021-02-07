import { add, getCar, deleteC } from "@/api/car";
const state = {
}
const mutations = {
}
const actions = {
  addCar({ commit }, product) {
    return new Promise((resolve, reject) => {
      add(product).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  Car({ commit }, user) {
    return new Promise((resolve, reject) => {
      getCar(user).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteCar({ commit }, id) {
    console.log(id)
    return new Promise((resolve, reject) => {
      deleteC(id).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
