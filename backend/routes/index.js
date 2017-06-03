var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _function = require('../functions/function')

router.post('/', function(req, res, next) {
   console.log(req.body); // the posted data
  var data = {
    email:req.body.email,
    password:req.body.password,
    username:req.body.username,
    selection:req.body.selection ,
    city:req.body.city
  }
  _function.newUser(data).then(User => {
        res.status(200).json(User);
    }).catch(err => {
        res.status(500).json(err).end();
    });
});



module.exports = router;
