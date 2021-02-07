const detail = require("../controller/detail");
const router = require("koa-router")();

router.get("/tab", detail.tab)
router.get("/product", detail.display)
router.get("/detail", detail.detail);
router.get("/suv", detail.suvDE);

module.exports = router.routes()