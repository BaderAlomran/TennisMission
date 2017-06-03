var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var _function = require('../functions/function')

router.post('/', function(req, res, next) {
  _function.saveresponse(req.body).then(User => {
        res.status(200).json(User);
    }).catch(err => {
        res.status(500).json(err).end();
    });
});


module.exports = router;
