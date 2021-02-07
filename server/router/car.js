const car = require("../controller/car");
const router = require("koa-router")();

router.post("/add", car.add);
router.get("/getCar", car.getCar)
router.get("/deleteCar", car.deleteCar)
module.exports = router.routes()