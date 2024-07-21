const mongodb = require('mongoose')

const UserSchema = new mongodb.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongodb.model('users', UserSchema)
module.exports = UserModel