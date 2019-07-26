const mongoose  = require('mongoose');

var userSchema = mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    email:{type:String}
})

module.exports = mongoose.model('User',userSchema)