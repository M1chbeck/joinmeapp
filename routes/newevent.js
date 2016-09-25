var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/newevent', function(req, res, next) {
  res.send('create a new Event.');
});

module.exports = router;
