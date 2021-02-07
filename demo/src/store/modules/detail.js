import { detailPage, detailNorm, } from "@/api/detail";
const state = {}
const mutations = {}
const actions = {
  ProductDetail({ commit }, uid) {
    // console.log("这个参数" + uid)
    return new Promise((resolve, reject) => {
      detailPage(uid).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  ProductNorm({ commit }, uid) {
    return new Promise((resolve, reject) => {
      detailNorm(uid).then(res => {
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
