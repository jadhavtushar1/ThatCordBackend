const mongoose = require('mongoose')
const userData = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
module.exports = mongoose.model('user',userData)