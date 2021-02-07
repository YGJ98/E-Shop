import http from "./http";

export const tabList = () => {
  return http({
    method: "get",
    url: "/tab"
  })
}

export const ProductList = () => {
  return http({
    method: "get",
    url: "/product"
  })
}
