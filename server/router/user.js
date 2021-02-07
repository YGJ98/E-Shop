const user = require("../controller/user");
const router = require("koa-router")();

router.get("/code", user.sendCode);
router.post("/login", user.login);
router.get("/token", user.tokenSign)
router.get("/vphone", user.rest)
router.get("/vCode", user.vCode)
router.post("/pwd", user.pwd)
module.exports = router.routes();
