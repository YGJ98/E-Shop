import { Code, login, Mlogin, restToken, vPhone, vCode, restCode } from "@/api/user";
const state = {
  phone: ""
};
const mutations = {
};
const actions = {
  sendCode({ commit }, phone) {
    // console.log(phone)
    return new Promise((resolve, reject) => {
      Code(phone).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  isLogin({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      if (userInfo.type === 1) {
        const { type, userName, password } = userInfo
        login({ type, userName, password }).then(res => {
          // console.log(res.data.res[0])
          localStorage.setItem("user", JSON.stringify(res.data.res[0]))
          localStorage.setItem("token", res.data.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      }
      if (userInfo.type === 2) {
        const { type, phone, Mcode } = userInfo
        Mlogin({ type, phone, Mcode }).then(res => {
          // console.log(res.data.res[0])
          localStorage.setItem("user", JSON.stringify(res.data.res[0]))
          localStorage.setItem("token", res.data.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      }
    })
  },
  verifyPhone({ commit }, phone) {
    return new Promise((resolve, reject) => {
      vPhone(phone).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  verifyCode({ commit }, Mcode) {
    return new Promise((resolve, reject) => {
      vCode(Mcode).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  rest({ commit }, updateCode) {
    console.log(updateCode)
    return new Promise((resolve, reject) => {
      const { phone, uCode } = updateCode
      restCode({ phone, uCode }).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  Loginout({ commit }) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
  tokenSign({ commit }) {
    return new Promise((resolve, reject) => {
      restToken().then(res => {
        localStorage.setItem("token", res.data.token)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
