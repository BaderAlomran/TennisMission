var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    city:{
        type: String,
        required: true
    } ,
    password:{
        type: String,
        required: true
    } ,
    username: {
        type: String,
        required: true
    },
    selection: { 
        type: String, 
        required: true }
});

module.exports = mongoose.model('User', userSchema);
