var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.status(403).json({'message': 'Forbidden resource'});
});

module.exports = router;
