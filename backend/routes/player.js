var express = require('express');
var router = express.Router();
var UserService = require('../services/user.service')

 router.get("/",function(req, res, next) {
 UserService.GetAllUser().then(_player =>{
         res.status(200).json(_player);
    }).catch(err => {
      res.status(500).json(err).end();
    });
 });


 router.get("/:id",function(req, res, next) {
   console.log(req.params.id);
 UserService.GetUser(req.params.id).then(_player =>{
         res.status(200).json(_player);
    }).catch(err => {
      res.status(500).json(err).end();
    });
 });


module.exports = router;