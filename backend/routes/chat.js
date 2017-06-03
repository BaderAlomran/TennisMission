var express = require('express');
var router = express.Router();
var ChatService = require('../services/chat.service');
var QB = require('quickblox');

var CREDENTIALS = {
  appId: 56941,
  authKey: 'bfLM5GrkETO5Qft',
  authSecret: 'x7rC-mVcwQYMSxR'
};

var token;

router.get('/', function(req, res, next) {
        ChatService.CreateSession(function(data){
          console.log(data);
         ChatService.CreateUser(function(data1){
           console.log(data1);
         }); 
        });
});

router.get('/Login', function(req, res, next) {
        ChatService.Login(function(data){
        console.log(JSON.stringify(data));
        });
});


module.exports = router;

 

