var express = require('express');
var router = express.Router();
const query = require('../model/sql-handle');
/* GET home page. */
router.get('/', function (req, res, next) {
  query('select * from info', null).then(
    data => {
      res.render('index', { title: 'Express', data });
    }
  ).catch(err => res.send(err));
});

// router.get('/delete/:id', function (req, res, next) {
//   query(`delete from info where STT=?`, req.params.id).then(
//     data => {
//       console.log(req.params.id);
//       res.redirect('/')
//     }
//   ).catch(err => res.send(err));
// });
// router.post('/update/:id', function (req, res, next) {
//   query(`delete from info where STT=?`, req.params.id).then(
//     data => {
//       console.log(req.params.id);
//       res.redirect('/')
//     }
//   ).catch(err => res.send(err));
// });
module.exports = router;
