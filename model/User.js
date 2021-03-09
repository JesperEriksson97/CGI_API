const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User