var express = require('express');
var router = express.Router();
const { createAccessToken } = require("../helpers/JWT")

router.get('/', function(req, res) {
  res.status(200).json({'message': 'Add some users here...'});
});

router.post('/login', async function(req, res) {
  const email = req.query.email;
  const password = req.query.password;

  //TODO: Authentication
  try{
    const accessToken = createAccessToken(email);
    res.json({accessToken: accessToken});
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
