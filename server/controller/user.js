const jwt = require("jsonwebtoken");
const sql = require("../utils/quey");

let textCode = null;
// 发短信验证码
exports.sendCode = async (ctx) => {
  // console.log(JSON.parse(JSON.stringify(ctx.query)));
  textCode = Math.random().toString().substr(3, 4);
  return (ctx.body = {
    code: 200,
    data: {
      text: `${ctx.query.phone}的短信验证码:${textCode}`,
    },
  });
};
// 登录
exports.login = async (ctx) => {
  // console.log(ctx.request.body);
  if (ctx.request.body.type === 1) {
    const { userName, password } = ctx.request.body
    await sql.login({ userName, password }).then(res => {
      return ctx.body = {
        code: 200,
        message: "登录成功",
        data: {
          token: jwt.sign({ name: "admin" }, 'abcd', {
            expiresIn: 60 * 60
          }),
          res
        }
      }
    })
  }
  if (ctx.request.body.type === 2) {
    const { phone, Mcode } = ctx.request.body
    if (Mcode == textCode) {
      await sql.phoneLogin(phone).then(res => {
        return ctx.body = {
          code: 200,
          message: "登录成功",
          data: {
            token: jwt.sign({ name: "admin" }, 'abcd', {
              expiresIn: 60 * 60
            }),
            res
          }
        }
      })
    } else {
      new Error("验证码错误")
    }
  }
};
// 注册
exports.insert = async (ctx) => {
  ctx.body = "aaa";
};
// 忘记密码
// 验证手机号是否存在
exports.rest = async (ctx) => {
  const { phone } = ctx.query
  console.log(ctx.query)
  await sql.rest(phone).then(() => {
    return ctx.body = {
      code: 200,
      data: {
        message: "ssucceful",
      }
    }
  }).catch(() => {
    return new Error('error')
  })
}
// 
exports.vCode = async (ctx) => {
  console.log(JSON.parse(JSON.stringify(ctx.query)));
}
// 重置密码
exports.pwd = async (ctx) => {
  console.log(ctx.request.body)
  const { phone, uCode } = ctx.request.body
  await sql.pwd([phone, uCode]).then((res) => {
    console.log(res)
  })
}

// token持久化
exports.tokenSign = async (ctx) => {
  return ctx.body = {
    code: 200,
    data: {
      token: jwt.sign({ name: "admin" }, 'abcd', {
        expiresIn: 60 * 60
      })
    }
  }
}
