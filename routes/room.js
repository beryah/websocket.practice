var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var result = [
    {
      id: 1,
      name: 'Room A',
      ppl: 4,
      maxPpl: 7,
    },
    {
      id: 2,
      name: 'Room XXX',
      ppl: 15,
      maxPpl: 22,
    },
    {
      id: 3,
      name: '^___^ Y',
      ppl: 6,
      maxPpl: 6,
    },
  ];

  res.send(result);
});

module.exports = router;
