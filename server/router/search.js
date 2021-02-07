const router = require("koa-router")();
const search = require("../controller/search");

router.get("/search", search.searchProduct)

module.exports = router.routes()