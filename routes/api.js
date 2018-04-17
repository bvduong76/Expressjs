var express = require('express');
var router = express.Router();
const query = require('../model/sql-handle');

/* GET users listing.*/
router.route('/tickets')
  .post(function (req, res, next) {
    const body = req.body;
    query('insert into info (name,code) values ?', [[body.name, body.code]]).then(data => {
      return res.redirect('/');
    }).catch(err => {
      return res.send(err);
    })
  })
  .get(function (req, res, next) {
    query('select * from info', null).then(data => {
      return res.redirect('/');
    }).catch(err => {
      return res.send(err);
    });
    ;
    router.route('/').get(function (req, res, next) {
      res.send('method get');
    });
  });
router.route('/tickets/:id').put(function (req, res, next) {
  const body = req.body;
  console.log(body);
  query(`update info set name='${body.name}', code='${body.code}' where STT= ${req.params.id}`, null).then(data => {
    console.log(`update info set name='${body.name}', code='${body.code}' where STT= '${req.params.id}'`);
    res.status(200);
    res.send(status);
  }).catch(err => {
    return res.send(err);
  });

}).delete(function(req,res, next){
  query(`delete from info where STT= '${req.params.id}'`, null).then(data => {
    console.log(`delete from info where STT= ${req.params.id}`);
     res.status(200);
     res.send(status);
  }).catch(err => {
    return res.send(err);
  });
});




// if (url == '/edit-ticket')



module.exports = router;
