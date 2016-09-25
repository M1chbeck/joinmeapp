var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/listevent', function(req, res, next) {
  res.send('List all Events.');
});

module.exports = router;
