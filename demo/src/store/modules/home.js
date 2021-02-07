import { ProductList, tabList } from "@/api/home";

const state = {}
const mutations = {}
const actions = {
  product() {
    return new Promise((resolve, reject) => {
      ProductList().then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  tab() {
    return new Promise((resolve, reject) => {
      tabList().then(res => {
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
