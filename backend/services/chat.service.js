var QB = require('quickblox');
var CREDENTIALS = {
  appId: 56941,
  authKey: 'bfLM5GrkETO5Qft',
  authSecret: 'x7rC-mVcwQYMSxR'
};

var token;

module.exports = {

   CreateSession :function(callback){
    //    new Promise()
       QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret);
            QB.createSession(function(err, result) {
                QB.init(result.token, CREDENTIALS.appId);
                callback(result);
                if(err)
            callback(err);
        })
},

CreateUser : function(callback){
        // QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret);
       var params = { 'login': "emporio", 'password': "somepass"};
           QB.users.create(params, function(err, user){
               callback(user);
            if(err)
                callback(err);
            });
   },

Login : function(callback){
                var user = {
            name: 'chatuserweb1',
            login: 'emporio',
            pass: 'somepass'
        };
             QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret);
            QB.createSession({login: user.login, password: user.pass}, function(err, res) {
        if (res) {
                        QB.chat.connect({userId: res.user_id, password: user.pass}, function(err, roster) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(roster);
                
                    /*
                    *  (Object) roster - The user contact list
                    *  roster = {
                    *    '1126541': {subscription: 'both', ask: null},        // you and user with ID 1126541 subscribed to each other.
                    *    '1126542': {subscription: 'none', ask: null},        // you don't have subscription but user maybe has
                    *    '1126543': {subscription: 'none', ask: 'subscribe'}, // you haven't had subscription earlier but now you asked for it
                    *  }; 
                    */
                
                    }
                    });
        }else{
            console.log(err);
        }
        });
},

}