import axios from "axios";
import store from "@/store";
const service = axios.create({
  // baseURL: "http://localhost:3000",
  timeout: 5000,
  withCredentials: true
});
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    // console.log(response.data);
    if (response.data.code == 200) {
      return Promise.resolve(response.data);
    } else {
      if (response.data.code === 401 || response.data.code === 403) {
        store.dispatch("user/Loginout").then(res => {
          location.reload();
        });
      }
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
