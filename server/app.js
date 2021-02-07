const Koa = require("koa");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser")
const jwt = require("jsonwebtoken")
const router = require("koa-router")();
const app = new Koa();

app.use(cors());
app.use(bodyParser())

const whiteUrl = {
  GET: ['/vphone', '/vCode', '/detail', '/product', '/getCar', '/deleteCar'],
  POST: ['/login', '/pwd', '/add']
}
const hasOneOf = (str, arr) => {
  return arr.some(item => item.includes(str))
}
app.use(async (ctx, next) => {
  const methods = ctx.request.method.toUpperCase()
  const path = ctx.request.path
  console.log(methods)
  console.log(path)
  if (whiteUrl[methods] && hasOneOf(path, whiteUrl[methods])) {
    ctx.body = {
      code: 200
    }
    // console.log("白名单")
  } else {
    const token = ctx.request.header.authorization
    // console.log(token)
    if (!token) {
      // ctx.status = 401
      ctx.body = {
        code: 401
      }
    } else {
      jwt.verify(token, 'ancd', (err, decode) => {
        if (err) {
          ctx.body = {
            code: 403
          }
        } else {
          decode.name = 'user'
        }
      })
    }
  }
  await next()
})

app.use(require("./router/user"));
app.use(require("./router/detail"));
app.use(require("./router/car"));
app.use(require("./router/search"));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
  console.log(`欢迎访问：http://localhost:3000`);
});
