import http from "./http";

export const detailPage = uid => {
  return http({
    method: "get",
    url: "/detail",
    params: { uid }
  });
};

export const detailNorm = uid => {
  return http({
    method: "get",
    url: "/suv",
    params: { uid }
  })
}


