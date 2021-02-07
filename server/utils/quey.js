const mysql = require("mysql");
const MYSQL_CONFIG = require("../model/mysql");
//创建连接池 createPool方法
const pool = mysql.createPool(MYSQL_CONFIG);

const query = (sql, val) => {
  return new Promise((resolve, reject) => {
    //从连接池中取出连接。getConnection方法。如无连接可用则隐式的建立一个数据库连接
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, val, (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
          connection.release(); //当连接不再使用时，用connection对象的release方法将其归还到连接池中
        });
      }
    });
  });
};

//手机登录
exports.phoneLogin = (phone) => {
  let sql = `select * from user where phone = ${phone}`;
  return query(sql);
};
//用户名登录
exports.login = ({ userName, password }) => {
  let sql = `select * from user where (phone = '${userName}' or user = '${userName}') and passWord = ${password} `;
  return query(sql)
};
//注册用户
exports.insertUser = (value) => {
  let sql = `insert into user set id=?,userName=?,passWord=?,phone=?`;
  return quey(sql, value);
};
// 验证手机号
exports.rest = (phone) => {
  let sql = `select * from user where phone = ${phone}`
  return query(sql)
}
// 重置密码
exports.pwd = (value) => {
  let sql = `update user set passWord =? where phone =?`
  return query(sql, value)
}

// tab列表
exports.tabList = () => {
  let sql = `select tabImg,tabName from tab`
  return query(sql);
}

// 商品展示
exports.display = () => {
  let sql = `select id,title,sale_price,uid,uImg from product`
  return query(sql);
}

// 根据关键字获取搜索商品
exports.searchList = (keyword) => {
  let sql = `select * from product where title like '%${keyword}%'`;
  return query(sql)
}


// 获取详情
exports.img = (id) => {
  let sql = `select href from img where img_id = ${id}`
  return query(sql)
}
exports.suvImg = (id) => {
  let sql = `select suvImg from suv where product_id = ${id}`
  return query(sql)
}
exports.detail = (id) => {
  let sql = `select * from product where id = ${id}`;
  return query(sql)
}
exports.suvDetail = (uid) => {
  let sql = `select * from norm where uid = ${uid}`;
  return query(sql);
}


// 加入购物车
exports.addCar = (value) => {
  let sql = `insert into car set uid=?,uImg=?,utitle=?,norms=?, num=?,price=?,user=?`
  return query(sql, value)
}
// 查找用户的购物车
exports.findCar = (user) => {
  let sql = `select * from car where user = '${user}'`;
  return query(sql);
}

// 删除某一个商品
exports.deleteOne = (id) => {
  let sql = `delete from car where id = ${id}`;
  return query(sql)
}

// 清空购物车
exports.deleteAll = (user) => {
  let sql = `delete from  car where user = ${user}`
  return query(sql)
}