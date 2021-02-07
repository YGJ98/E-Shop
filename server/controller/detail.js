const sql = require("../utils/quey")

exports.tab = async (ctx) => {
    await sql.tabList().then(res => {
        return ctx.body = {
            code: 200,
            data: {
                ...res
            }
        }
    })
}

exports.display = async (ctx) => {
    await sql.display().then(res => {
        return ctx.body = {
            code: 200,
            data: {
                ...res
            }
        }
    })
}
exports.detail = async (ctx) => {
    console.log(ctx.query)
    let { uid } = ctx.query
    let imgs = null;
    let suvImg = null;
    await sql.img(uid).then(res => {
        imgs = res.map(item => item.href)
        return ctx.body = imgs
    })
    await sql.suvImg(uid).then(res => {
        suvImg = res.map(item => item.suvImg)
    })
    await sql.detail(uid).then(res => {
        return ctx.body = {
            code: 200,
            data: {
                ...res[0],
                imgs,
                suvImg
            }
        }
    })
}

exports.suvDE = async (ctx) => {
    // console.log(ctx.query);
    let { uid } = ctx.query;

    await sql.suvDetail(uid).then(res => {
        let { m1, m2, m3, m4, p1, p2, p3, p4 } = res[0]
        // let guige = [{ m: m1, p1 }, { m2, p2 }, { m3, p3 }, { m4, p4 }]
        let a = [m1, m2, m3, m4]
        let b = [p1, p2, p3, p4]
        let guige = { a, b }
        return ctx.body = {
            code: 200,
            data: {
                guige
            }
        }
    })
}