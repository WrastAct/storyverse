var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json({'message': 'Add some users here...'});
});

module.exports = router;
