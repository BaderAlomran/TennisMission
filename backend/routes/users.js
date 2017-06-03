var express = require('express');
var router = express.Router();
var _function = require('../functions/function')
/* GET users listing. */

router.post('/', function(req, res, next) {
  _function.get(req.param('email'),req.param('password')).then(User => {
        res.status(200).json(User);
    }).catch(err => {
        res.status(500).json(err).end();
    });
});

module.exports = router;
