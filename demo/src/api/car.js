import http from "./http";

export const add = product => {
  return http({
    method: "post",
    url: "/add",
    data: { product }
  })
}

export const getCar = (user) => {
  return http({
    method: "get",
    url: "/getCar",
    params: { user }
  })
}

export const deleteC = (id) => {
  return http({
    method: "get",
    url: "/deleteCar",
    params: { id }
  })
}

