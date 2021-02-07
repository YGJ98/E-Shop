import { searchList } from "@/api/search";
const state = {
  historyList: localStorage.getItem("history") || []
}
const mutations = {
  SET_HISTORY(state, history) {
    console.log(history)
    // state.historyList = history
  },
  CLEAR_HISTORY(state) {
    state.historyList = []
  }
}
const actions = {
  search({ commit }, keyword) {
    // console.log(keyword)
    return new Promise((resolve, reject) => {
      searchList(keyword).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  setHistory({ commit, state }, history) {
    let list = state.historyList
    const aIndex = list.findIndex(item => {
      return item == history
    })
    if (aIndex == 0) {
      return
    }
    if (aIndex > 0) {
      list.splice(aIndex, 1)
    }
    list.unshift(history)
    let m = JSON.parse(JSON.stringify([list]))
    // localStorage.setItem("history", m)
    commit("SET_HISTORY", m)
  },
  clearHistory({ commit }) {
    // localStorage.removeItem("history")
    commit("CLEAR_HISTORY")
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
