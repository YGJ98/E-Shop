const sql = require("../utils/quey");

exports.searchProduct = async (ctx) => {
    console.log(ctx.query)
    let { keyword } = ctx.query
    await sql.searchList(keyword).then((res) => {
        return ctx.body = {
            code: 200,
            data: { ...res }
        }
    })
}