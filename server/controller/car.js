const sql = require("../utils/quey");

exports.add = async (ctx) => {
    console.log(ctx.request.body.product)
    const { uid, uImg, utitle, norm, num, price, user } = ctx.request.body.product
    await sql.addCar([uid, uImg, utitle, norm, num, price, user]).then(() => {
        return ctx.body = {
            code: 200,
            message: "ok"
        }
    })

}

exports.getCar = async (ctx) => {
    const { user } = ctx.query
    await sql.findCar(user).then(res => {
        return ctx.body = {
            code: 200,
            meg: user,
            data: {
                carList: res
            }
        }
    })
}

exports.deleteCar = async (ctx) => {
    const { id } = ctx.query
    await sql.deleteOne(id).then(res => {
        return ctx.body = {
            code: 200,
            message: "删除成功"
        }
    })
}