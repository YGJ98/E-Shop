import http from "./http";

// 发短信验证码登录
export const Code = phone => {
  return http({
    method: "get",
    url: "/code",
    params: { phone }
  });
};

// 登录
export const login = ({ type, userName, password }) => {
  return http({
    method: "post",
    url: "/login",
    data: { type, userName, password }
  });
};
export const Mlogin = ({ type, phone, Mcode }) => {
  return http({
    method: "post",
    url: "/login",
    data: { type, phone, Mcode }
  });
};

// 忘记密码
export const vPhone = (phone) => {
  return http({
    method: "get",
    url: "/vphone",
    data: { phone }
  })
}
export const vCode = (Mcode) => {
  return http({
    method: "get",
    url: "/vCode",
    data: { Mcode }
  })
}
export const restCode = ({ phone, uCode }) => {
  return http({
    method: "post",
    url: "/pwd",
    data: { phone, uCode }
  })
}

// token持久化
export const restToken = () => {
  return http({
    method: "get",
    url: "/token"
  })
}
