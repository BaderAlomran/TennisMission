var User = require('../models/user');
var Algorithm = require('../models/algorithm');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId

module.exports = {

   GetAllUser :function(){

   return  User.find({}).then(u=>{
      if(u){
         return Promise.resolve(u);
      }
      else if(u.length==0){
             var err = new Error();
                err.status = 404;
                err.message = "User Not found";
                return Promise.reject(err);
      }
      else{
              var err = new Error();
                err.status = 500;
                err.message = "Error Occured";
                return Promise.reject(err);
      }



     })

   },

    GetUser :function(_id){
      console.log(ObjectId(_id));
   return  Algorithm.findOne({"User_id":ObjectId(_id)}).then(u=>{
      if(u){
         return Promise.resolve(u);
      }
      else{
              var err = new Error();
                err.status = 500;
                err.message = "Error Occured";
                return Promise.reject(err);
      }
     })

   },
}