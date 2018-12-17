var express = require('express');
var router = express.Router();
let mysql = require("mysql");
/* GET home page. */
let config = {
    port: "5244",
    host: "localhost",
    user: "root",
    database: "dhxycharge",
    password: "KS18835194520"
}

let connection = mysql.createPool(config);
//链接前端接口搭建
router.get('/get/train_tickets', function(req, res, next) {
    let dates = req.query.date;
    console.log(dates)
    if (dates.indexOf("=") == -1) {
        dates = dates;
    } else {
        dates = dates.split("=")[1]
    }
    let sql = `select * from zk3 where dates='${dates}'`
    connection.getConnection((err, connect) => {
        if (err) console.log(err, "链接数据库错误");
        connect.query(sql, (err, wras) => {
            if (err) console.log(err, "请求数据错误");
            res.send({ code: 1, wras });
        })
    })
})
module.exports = router;