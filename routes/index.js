var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.html');
});

router.post('/login', function (req, res, next) {
  var result = {
    isSuccess: req.body.name == 'qwe',
  };
  res.send(result);
});

module.exports = router;
