var express = require('express');
var router = express.Router();

/* GET home page. */

//链接前端接口搭建
router.get('/get/train_tickets', function(req, res, next) {
    let dates = req.query.date;
    console.log(dates)
    res.send({ code: 1, data: "接口链接成功" });
})
module.exports = router;