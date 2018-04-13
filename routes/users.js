var express = require('express');
var router = express.Router();
const query = require('../model/sql-handle');

/* GET users listing. */
router.route('/').post(function (req, res, next) {
  console.log(req.body.name);
  const body = req.body;

  var test = query('insert into info (name,code) values ?', [[body.name, body.code]]).then((data) => { res.send('Inserted') }).catch((err) => {
    console.log("zxc", err);
  });
  console.log('test', test);


}).get(function (req, res, next) {
  res.send('method get');
});

module.exports = router;
