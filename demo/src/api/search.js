import http from "./http";

export const searchList = (keyword) => {
  return http({
    method: "get",
    url: "/search",
    params: { keyword }
  })
}
